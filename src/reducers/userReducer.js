import { SET_USER_INFORMATION, SET_ACTIVE_CARD, SET_NEXT_EXPLANATION_CARD, FORCE_GIN_STRIPPING_RUN, INTERFACE_FOR_GIN, INTERFACE_FOR_BIG_POT, HIDE_CONTROL_BUTTONS} from '../actions/types'

const initialState = {
    userName:'anonymous',
    allowedTabs:    [
                    // 'Explanation',
                    'Dashboard',
                    'Pot Still',
                    'Fractional Still',
                    'Utility Calculators'                
    ],
    isMobileDevice:false,
    activeCard:'Dashboard',
    potStillGraph:{
        width:750,
        height:250,
        yMin:0,
        yMax:100,
        xMin:0
        },
    potStillButtons:{
        showControlButtons:true,
        showGinDetails:false,
        showBigPotStart:true,
        showGinStart:false,
        showStripStart:false,
        bigPotSliderStatus:true,
        showGraph:false
    }
}

export default function(state = initialState, action) {
    switch(action.type) {
        case SET_USER_INFORMATION:
            return {
                ...state,
                userName:action.payload.userInformation.userName,
                allowedTabs:action.payload.userInformation.allowedTabs
            }
        case SET_ACTIVE_CARD:
            return {
                ...state,
                activeCard:action.payload,
            }
        case SET_NEXT_EXPLANATION_CARD:
            return {
                ...state,
                currentArrayIndex:action.payload
            }
        case FORCE_GIN_STRIPPING_RUN:
            return {
                ...state,
                potStillButtons:action.payload
            }
        case INTERFACE_FOR_GIN:
            return {
                ...state,
                potStillButtons:action.payload
            }
        case INTERFACE_FOR_BIG_POT:
            return {
                ...state,
                potStillButtons:action.payload
            }
        case HIDE_CONTROL_BUTTONS:
            return {
                ...state,
                potStillButtons:action.payload
            }
        default:
            return state;
    }
}
