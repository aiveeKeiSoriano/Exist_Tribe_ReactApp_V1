import { HANDLE_ACCORDION_EXPANDED, SET_PAUSE_TIME, SET_TIME_PAUSED, START_BEDTIME, TOGGLE_BEDTIME_DRAWER } from "../action_types/bedtime"

export const handleAccordionExpanded = (payload) => ({
    type: HANDLE_ACCORDION_EXPANDED,
    payload
})

export const setPauseTime = (payload) => ({
    type: SET_PAUSE_TIME,
    payload
})

export const setTimePaused = (payload) => ({
    type: SET_TIME_PAUSED,
    payload
})

export const startBedtime = (payload) => ({
    type: START_BEDTIME,
    payload
})

export const toggleBedtimeDrawer = (payload) => ({
    type: TOGGLE_BEDTIME_DRAWER,
    payload
})