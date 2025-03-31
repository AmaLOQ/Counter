import React from 'react';
import s from '../SetBoard/SetBoard.module.css'
import s2 from './ResultBox.module.css'
import {Button} from "../Button/Button";

type ResulBoardPropsType = {
    counter: string
    maxValue: string
    error: boolean
    start: boolean
    changeCount: (value: string)=> void
    resetCount: () => void
}


export const ResulBoard: React.FC <ResulBoardPropsType> = (props) => {
    const {counter, maxValue,error, start, changeCount, resetCount} =props



    const valueStyle = +counter === +maxValue ? s2.equalValue: s2.enterValue

    const renderText = error
                    ? <div className={s2.equalValue}>Incorrect Values!</div>
                    : start
                        ? <div className={valueStyle}>{counter}</div>
                        : <div className={s2.enterValue}>Enter value and press 'set'</div>

    const onClickIncrValue = () => {
        changeCount((+counter + 1).toString())
    }
    const onClickResetValues = () => {
        resetCount()
    }
    return (
        <div className={s.setBoardWrapper}>
            <div className={s2.resultBoxTextWrapper}>
                {renderText}
            </div>
            <div className={s.setBoardButtonWrapper}>
                <Button
                    onClick={onClickIncrValue}
                    isDisabled={+counter === +maxValue ? true: false || error || !start}
                    text={'Incr'}
                />
                <Button
                    onClick={onClickResetValues}
                    isDisabled={error || !start}
                    text={'Reset'}
                />
            </div>
        </div>
    );
};

