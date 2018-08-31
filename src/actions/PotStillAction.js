import { SET_GRAPH_DATA, SET_POT_STATUS , SET_LAST_TIME_POINT} from './types'
import axios from "axios"
import store from '../store'


export const setPotStatus = () => dispatch => {
    let serverString = `/api/potstatus`;
    axios.get(serverString)
        .then(res => dispatch({
            type:SET_POT_STATUS,
            payload:res.data.serverPotStatus
        }))
}

export const setPot = (desiredPotState) => dispatch => {
    let serverString = `/api/setpot`
    axios.post(serverString, { desiredPotState: desiredPotState })
        .then(res => {
            console.log(`server returned ${res.data.serverPotStatus}`);
            return res.data.serverPotStatus;
        })
        .then(serverPotStatus => dispatch({
                type:SET_POT_STATUS,
                payload:serverPotStatus
            })
        )
}

export const setGraphData = () => dispatch => {
    let serverString = `/api/potgraphdata`
    let theState = store.getState();
    let lastGraphPointID =  theState.potStill.graphData.length > 1 ? theState.potStill.graphData[theState.potStill.graphData.length -1].id : 0;
    axios.get(serverString)
        .then(res => {
            let newDataPoints = res.data.serverGraphData.filter(dataPoint => dataPoint.id > lastGraphPointID);
            return newDataPoints;
        })
        .then(newDataPoints => dispatch({
                type:SET_GRAPH_DATA,
                payload:newDataPoints
            })
        )
}

export const setLastTimePoint = (lastTimePoint) => ({
        type:SET_LAST_TIME_POINT,
        payload:lastTimePoint
});