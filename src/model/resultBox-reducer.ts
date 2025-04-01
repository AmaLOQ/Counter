import {createAction, createReducer} from "@reduxjs/toolkit";

export type ResultBoxType  = {
    startValue: string
    counter: string
    maxValueDisplay: string
    start: boolean
}

export const changeStartIncrValueAC = createAction<{isStart: boolean}>("resultBoard/change-start-incr")
export const buttonStartPressAC = createAction<{startValue: string, counter: string, maxValueDisplay: string}>("resultBoard/button-start-press")
export const changeCountAC = createAction("resultBoard/change-count")
export const resetCountAC = createAction("resultBoard/reset-count")
// @ts-ignore
const initialState: ResultBoxType = {}

export const resultBoxReducer = createReducer(initialState, builder => {
    builder
        .addCase(changeStartIncrValueAC, (state, action) => {
            state.start = action.payload.isStart
        })
        .addCase(buttonStartPressAC, (state, action) => {
            state.startValue = action.payload.startValue
            state.counter = action.payload.counter
            state.maxValueDisplay = action.payload.maxValueDisplay
        })
        .addCase(changeCountAC, state => {
            state.counter = (+state.counter + 1).toString()
        })
        .addCase(resetCountAC, state => {
            state.counter = state.startValue
        })
})