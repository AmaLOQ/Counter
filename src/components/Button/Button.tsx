import React from 'react';
import s from './Button.module.css'

type ButtonPropsType = {
    text: string
    isDisabled: boolean
    onClick: ()=> void
}
export const Button: React.FC<ButtonPropsType> = (props) => {
    const {text, isDisabled, onClick} = props

    const onClickStartCount = () => {
        onClick()
    }
    return (
        <button
            onClick={onClickStartCount}
            disabled={isDisabled}
            className={s.button}
        >{text}</button>
    );
};

