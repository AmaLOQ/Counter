import {RootState} from "../app/store.ts";
import {ResultBoxType} from "./resultBox-reducer.ts";

export const selectResultBox = (state: RootState): ResultBoxType => state.resultBox