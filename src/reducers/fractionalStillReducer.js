import { GET_FRACTIONAL_GRAPH_DATA, GET_RUN_OVERVIEW } from '../actions/types'

const initialState = {
    fractionalGraphData: [
        // { x: '1-Jan-15', y: 20, id:1},
        // { x: '1-Feb-15', y: 21, id:2},
        // { x: '1-Mar-15', y: 65, id:3},
        // { x: '1-Apr-15', y: 75, id:4},
        // { x: '1-May-15', y: 78, id:5}
    ],
    serverRunOverview: {}
}

export default function(state = initialState, action) {
    switch(action.type) {
        case GET_FRACTIONAL_GRAPH_DATA:
            return {
                ...state,
                fractionalGraphData:[...state.fractionalGraphData, ...action.payload]
            }
        case GET_RUN_OVERVIEW:
            return {
                ...state,
                serverRunOverview:action.payload
            }
        default:
            return state;
    }
}