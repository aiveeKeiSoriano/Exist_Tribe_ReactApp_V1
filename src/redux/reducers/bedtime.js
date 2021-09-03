import { HANDLE_ACCORDION_EXPANDED, SET_PAUSE_TIME, SET_TIME_PAUSED, START_BEDTIME, TOGGLE_BEDTIME_DRAWER } from "../action_types/bedtime"

const initState = {
    accordionExpanded: null,
    bedtimeStart: null,
    bedtimeDrawerExpanded: false,
    pauseTime: null,
    timePaused: 0
}

export default function reducer(state = initState, action) {
    const {type, payload} = action
    const selector = {}
    
    selector[HANDLE_ACCORDION_EXPANDED] = handleAccordionExpanded
    selector[SET_PAUSE_TIME] = setPauseTime
    selector[SET_TIME_PAUSED] = setTimePaused
    selector[START_BEDTIME] = startBedtime
    selector[TOGGLE_BEDTIME_DRAWER] = toggleBedtimeDrawer

    if(!selector[type]) return {...state}

    return selector[type](state, payload)
}

function handleAccordionExpanded(state, payload) {
    return {...state, accordionExpanded: payload}
}

function setPauseTime(state, payload) {
    return {...state, pauseTime: payload}
}

function setTimePaused(state, payload) {
    return {...state, timePaused: payload}
}

function startBedtime(state, payload) {
    return {...state, bedtimeStart: payload}
}

function toggleBedtimeDrawer(state, payload) {
    return {...state, bedtimeDrawerExpanded: payload}
}