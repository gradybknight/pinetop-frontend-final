import { GET_FRACTIONAL_GRAPH_DATA, GET_RUN_OVERVIEW } from './types'
import axios from "axios"
import store from '../store'


export const getRunOverview = () => dispatch => {
    let serverString = `http://107.13.224.253:3001/fractionalsummary`
    axios.get(serverString)
        .then(res => {
            console.log(`server returned ${res.data.serverPotStatus}`);
            return res.data.serverRunOverview;
        })
        .then(serverRunOverview => dispatch({
                type:GET_RUN_OVERVIEW,
                payload:serverRunOverview
            })
        )
}

export const getGraphData = () => dispatch => {
    let serverString = `http://107.13.224.253:3001/fractionalgraphdata`
    let theState = store.getState();
    let lastGraphPointID =  theState.fractionalStill.fractionalGraphData.length > 1 ? theState.fractionalStill.fractionalGraphData[theState.fractionalStill.fractionalGraphData.length -1].id : 0;
    axios.get(serverString)
        .then(res => {
            console.log(res.data)
            let newDataPoints = res.data.fractionalGraphData.filter(dataPoint => dataPoint.id > lastGraphPointID);
            console.log(newDataPoints);
            return newDataPoints;
        })
        .then(newDataPoints => dispatch({
                type:GET_FRACTIONAL_GRAPH_DATA,
                payload:newDataPoints
            })
        )
}