import { SET_GRAPH_DATA, SET_POT_STATUS, SET_LAST_TIME_POINT } from '../actions/types'

const initialState = {
    graphData: [
        // { x: '1-Jan-15', y: 20, id:1},
        // { x: '1-Feb-15', y: 21, id:2},
        // { x: '1-Mar-15', y: 65, id:3},
        // { x: '1-Apr-15', y: 75, id:4},
        // { x: '1-May-15', y: 78, id:5}
    ],
    isRunning: false
}

export default function(state = initialState, action) {
    switch(action.type) {
        case SET_GRAPH_DATA:
            return {
                ...state,
                graphData:[...state.graphData, ...action.payload]
            }
        case SET_POT_STATUS:
            return {
                ...state,
                isRunning:action.payload
            }
        case SET_LAST_TIME_POINT:
            return {
                ...state,
                lastTimePoint:action.payload
            }
        default:
            return state;
    }
}