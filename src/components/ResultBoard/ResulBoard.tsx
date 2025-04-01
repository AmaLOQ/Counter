import React from 'react';
import s from '../SetBoard/SetBoard.module.css'
import s2 from './ResultBox.module.css'
import {Button} from "../Button/Button";
import {useAppSelectors} from "../../common/hooks/useAppSelectors.ts";
import {selectResultBox} from "../../model/resultBox-selectors.ts";
import {useAppDispatch} from "../../common/hooks/useAppDispatch.ts";
import {changeCountAC, resetCountAC} from "../../model/resultBox-reducer.ts";

type ResulBoardPropsType = {
    error: boolean
}


export const ResulBoard: React.FC <ResulBoardPropsType> = (props) => {
    const {error} =props

    const resultBoard = useAppSelectors(selectResultBox)

    const dispatch = useAppDispatch()

    const valueStyle = +resultBoard.counter === +resultBoard.maxValueDisplay ? s2.equalValue: s2.enterValue

    const renderText = error
                    ? <div className={s2.equalValue}>Incorrect Values!</div>
                    : resultBoard.start
                        ? <div className={valueStyle}>{resultBoard.counter}</div>
                        : <div className={s2.enterValue}>Enter value and press 'set'</div>

    const onClickIncrValue = () => {
        dispatch(changeCountAC())
    }
    const onClickResetValues = () => {
        dispatch(resetCountAC())
    }
    return (
        <div className={s.setBoardWrapper}>
            <div className={s2.resultBoxTextWrapper}>
                {renderText}
            </div>
            <div className={s.setBoardButtonWrapper}>
                <Button
                    onClick={onClickIncrValue}
                    isDisabled={+resultBoard.counter === +resultBoard.maxValueDisplay ? true : false || error || !resultBoard.start}
                    text={'Incr'}
                />
                <Button
                    onClick={onClickResetValues}
                    isDisabled={error || !resultBoard.start}
                    text={'Reset'}
                />
            </div>
        </div>
    );
};

