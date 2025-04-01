import s from './SetBoard.module.css'
import {Button} from "../Button/Button";
import {Input} from "../Input/Input";
import React, {useState} from "react";
import {useAppDispatch} from "../../common/hooks/useAppDispatch.ts";
import {getMaxValueAC, getStartValueAC, setButtonErrorAC} from "../../model/setBoard-reducer.ts";
import {useAppSelectors} from "../../common/hooks/useAppSelectors.ts";
import {selectSetBoard} from "../../model/setBoard-selectors.ts";
import {buttonStartPressAC, changeStartIncrValueAC} from "../../model/resultBox-reducer.ts";

type SetBoardType = {
    equalError: boolean
}



export const SetBoard: React.FC<SetBoardType> = (props) => {
    const { equalError} = props

    const setBoardState = useAppSelectors(selectSetBoard)

    const [startValue, setStartValue] = useState<string>('')
    const [maxtValue, setMaxValue] = useState<string>('')

    const dispatch = useAppDispatch();

    const START_VALUE = 'Start value'
    const MAX_VALUE = 'Max value'

    const onButtonClick = () => {
        dispatch(setButtonErrorAC({buttonError: true}))
        dispatch(changeStartIncrValueAC({isStart: true}))
        dispatch(buttonStartPressAC({startValue: startValue, counter: startValue, maxValueDisplay: maxtValue}))
    }

    const startInputHandler = (value: string) => {
        dispatch(getStartValueAC({startValue: value}))
        setStartValue(value)
    }

    const maxInputHandler = (value: string) => {
        //здесь нужно будет реализовать логику добавления значения в локал сторадж
        dispatch(getMaxValueAC({maxValue: value}))
        setMaxValue(value)
    }


    return (
        <div className={s.setBoardWrapper}>
            <div className={s.setBoardValues}>
                <div className={s.setBoardInputsWrapper}>
                    <Input
                        onChange={maxInputHandler}
                        value={setBoardState.maxValue}
                        text={MAX_VALUE}
                        error={equalError}
                    />
                    <Input
                        onChange={startInputHandler}
                        value={setBoardState.starValue}
                        text={START_VALUE}
                        error={equalError}
                    />
                </div>
            </div>
            <div className={s.setBoardButtonWrapper}>
                <Button
                    onClick={onButtonClick}
                    isDisabled={equalError || +setBoardState.starValue < 0 || setBoardState.buttonError}
                    text={'Set'}
                />
            </div>
        </div>
    );
};

