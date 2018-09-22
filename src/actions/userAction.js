import { SET_USER_INFORMATION , SET_ACTIVE_CARD, SET_NEXT_EXPLANATION_CARD, FORCE_GIN_STRIPPING_RUN, INTERFACE_FOR_GIN, INTERFACE_FOR_BIG_POT, HIDE_CONTROL_BUTTONS } from './types';

export const setUserInformation = userInformation => ({
        type: SET_USER_INFORMATION,
        payload: userInformation //pass object containing userName (string) and allowedTabs (array)
    });

export const setActiveCard = (activeCard) => ({
        type: SET_ACTIVE_CARD,
        payload: activeCard
    });

export const setNextExplanationCard = (nextCardIndex) => ({
        type: SET_NEXT_EXPLANATION_CARD,
        payload: nextCardIndex
})

export const forceGinStrippingRun = () => ({
    type: FORCE_GIN_STRIPPING_RUN,
    payload: {
        showControlButtons:true,
        showGinDetails:false,
        showBigPotStart:false,
        showGinStart:false,
        showStripStart:true,
        bigPotSliderStatus:false,
        showGraph:false
    }
})

export const interfaceForGin = () => ({
    type: INTERFACE_FOR_GIN,
    payload: {
        showControlButtons:true,
        showGinDetails:true,
        showBigPotStart:false,
        showGinStart:true,
        showStripStart:false,
        bigPotSliderStatus:false,
        showGraph:false
    }
})

export const interfaceForBigPot = () => ({
    type: INTERFACE_FOR_BIG_POT,
    payload: {
        showControlButtons:true,
        showGinDetails:false,
        showBigPotStart:true,
        showGinStart:false,
        showStripStart:false,
        bigPotSliderStatus:true,
        showGraph:false
    }
})

export const hideControlButtons = () => ({
    type: HIDE_CONTROL_BUTTONS,
    payload: {
        showControlButtons:false,
        showGinDetails:false,
        showBigPotStart:false,
        showGinStart:false,
        showStripStart:false,
        bigPotSliderStatus:false,
        showGraph:true
    }
})