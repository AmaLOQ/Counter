import { useEffect, useState} from 'react';
import s from "./App.module.css"
import {SetBoard} from "./components/SetBoard/SetBoard";
import {ResulBoard} from "./components/ResultBoard/ResulBoard";


export const App = () => {
    // стейты для хранения значений импутов, изменяются динамически в зависимости от изменения значения в импуте
    const [startValue, setStartValue] = useState<string>(() => {
        const localStartValue = localStorage.getItem('start value')
        return localStartValue ? localStartValue : '0'
    })
    const [maxValue, setMaxValue] = useState<string>(() => {
        const localStartValue = localStorage.getItem('max value')
        return localStartValue ? localStartValue : '1'
    })

    const [counter, setCounter] = useState<string>('0')
    const [maxValueDisplay, setMaxValueDisplay] = useState<string>(maxValue)

    const [startIncrValue, setStartIncrValue] = useState<boolean>(false)
    const [errorButtonSet, setErrorButtonSet] = useState<boolean>(false)

    const equalErrorInput = +startValue >= +maxValue
    const resultBoxError = equalErrorInput || +startValue < 0

    useEffect(() => {
        setErrorButtonSet(false)
        setStartIncrValue(false)
        localStorage.setItem('isStart', JSON.stringify(true))
    },[startValue, maxValue])


    const startCount = () => {
        setErrorButtonSet(true)
        setStartIncrValue(true)
        setCounter(startValue)
        setMaxValueDisplay(maxValue)
    }

    const onChangeStartInput = (value: string) => {
        setStartValue(value)
        localStorage.setItem('start value', value)
    }
    const onChangeMaxInput = (value: string) => {
        setMaxValue(value)
        localStorage.setItem('max value', value)
    }
    const changeCount = (value: string) => {
        setCounter(value)
    }
    const resetCount = () => {
        setCounter(startValue)
    }


    return (
        <div className={s.app}>
            <SetBoard
                getStartValue={onChangeStartInput}
                getMaxValue={onChangeMaxInput}
                startValue={startValue}
                maxValue={maxValue}
                equalErrorInput={equalErrorInput}
                startCount={startCount}
                buttonError={errorButtonSet}
            />
            <ResulBoard
                counter={counter}
                maxValue={maxValueDisplay}
                error={resultBoxError}
                start={startIncrValue}
                changeCount={changeCount}
                resetCount={resetCount}
            />
        </div>
    );
}