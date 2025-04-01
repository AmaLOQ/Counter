import {useEffect} from 'react';
import s from "./App.module.css"
import {SetBoard} from "../components/SetBoard/SetBoard.tsx";
import {ResulBoard} from "../components/ResultBoard/ResulBoard.tsx";
import {useAppSelectors} from "../common/hooks/useAppSelectors.ts";
import {selectSetBoard} from "../model/setBoard-selectors.ts";
import {useAppDispatch} from "../common/hooks/useAppDispatch.ts";
import {changeStartIncrValueAC} from "../model/resultBox-reducer.ts";
import {setButtonErrorAC} from "../model/setBoard-reducer.ts";


export const App = () => {
    // стейты для хранения значений импутов, изменяются динамически в зависимости от изменения значения в импуте

    const setBoardState = useAppSelectors(selectSetBoard)

    const dispatch = useAppDispatch();
    const equalErrorInput = +setBoardState.starValue >= +setBoardState.maxValue
    const resultBoxError = equalErrorInput || +setBoardState.starValue < 0

    useEffect(() => {
        dispatch(setButtonErrorAC({buttonError: false}))
        dispatch(changeStartIncrValueAC({isStart: false}))
    },[setBoardState.starValue, setBoardState.maxValue])

    return (
        <div className={s.app}>
            <SetBoard
                equalError={equalErrorInput}
            />
            <ResulBoard
                error={resultBoxError}
            />
        </div>
    );
}