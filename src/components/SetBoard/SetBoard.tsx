import s from './SetBoard.module.css'
import {Button} from "../Button/Button";
import {Input} from "../Input/Input";
import React from "react";

type SetBoardType = {

    getStartValue: (value: string)=>void
    getMaxValue: (value: string)=>void
    startValue: string,
    maxValue: string
    equalErrorInput: boolean
    startCount: () => void
    buttonError: boolean

}

export const SetBoard: React.FC <SetBoardType> = (props) => {
    const {startValue, maxValue, equalErrorInput, getStartValue, getMaxValue,  startCount, buttonError} = props

    const START_VALUE = 'Start value'
    const MAX_VALUE = 'Max value'


    const onButtonClickSetValuesFromLocalStorage = () => {
        startCount()
    }

    const startInputHandler = (value: string) => {
        getStartValue(value)
    }

    const maxInputHandler = (value: string) => {
        getMaxValue(value)
    }


    return (
        <div className={s.setBoardWrapper}>
            <div className={s.setBoardValues}>
                <div className={s.setBoardInputsWrapper}>
                    <Input
                        onChange={maxInputHandler}
                        value={maxValue}
                        text={MAX_VALUE}
                        error={equalErrorInput}
                    />
                    <Input
                        onChange={startInputHandler}
                        value={startValue}
                        text={START_VALUE}
                        error={equalErrorInput}
                    />
                </div>
            </div>
            <div className={s.setBoardButtonWrapper}>
                <Button
                    onClick={onButtonClickSetValuesFromLocalStorage}
                    isDisabled={equalErrorInput || +startValue < 0 || buttonError}
                    text={'Set'}
                />
            </div>
        </div>
    );
};

