import {createAction, createReducer} from "@reduxjs/toolkit";

export type SetBoardType = {
    starValue: string,
    maxValue: string,
    startIncrValue: boolean,
    buttonError: boolean
}
// @ts-ignore
const initialState: SetBoardType = {}

export const getStartValueAC = createAction<{startValue: string}>("setBoard/get-start-value")

export const getMaxValueAC = createAction<{maxValue: string}>("setBoard/get-max-value")

export const setButtonErrorAC = createAction<{buttonError: boolean}>("setBoard/set-button-error")


export const setBoardReducer = createReducer(initialState, builder => {
    builder
        .addCase(getStartValueAC, (state, action) => {
            state.starValue = action.payload.startValue
        })
        .addCase(getMaxValueAC, (state, action) => {
            state.maxValue = action.payload.maxValue
        })
        .addCase(setButtonErrorAC, (state, action) => {
            state.buttonError = action.payload.buttonError
        })
})