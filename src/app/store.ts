import {combineReducers, configureStore } from '@reduxjs/toolkit'
import {setBoardReducer} from "../model/setBoard-reducer.ts";
import {resultBoxReducer} from "../model/resultBox-reducer.ts";


export const rootReducer = combineReducers({
    setBoard: setBoardReducer,
    resultBox: resultBoxReducer
})

export const store = configureStore({
    reducer: rootReducer
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch