import {SetBoardType} from "./setBoard-reducer.ts";
import {RootState} from "../app/store.ts";

export const selectSetBoard = (state: RootState): SetBoardType => state.setBoard