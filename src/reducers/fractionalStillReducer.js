import { GET_FRACTIONAL_GRAPH_DATA, GET_RUN_OVERVIEW } from '../actions/types'

const initialState = {
    fractionalGraphData: [],
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