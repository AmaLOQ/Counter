import React, {ChangeEvent} from 'react';
import s2 from './Input.module.css'


type InputPropsType = {
    value: string
    text: string
    onChange: (value: string) => void
    error: boolean
}

export const Input: React.FC <InputPropsType> = (props) => {


    const {value,text,onChange, error} = props
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        onChange(e.currentTarget.value)
    }

    const finalStyle = +value < 0 || error ? s2.inputError : s2.input

    return (
        <div className={s2.inputItemWrapper}>
            <div className={s2.inputLabel}>{text}</div>
            <div className={s2.inputItemWrapper}>
                <input
                    value={value}
                    className={finalStyle} type={"number"}
                    onChange={onChangeHandler}
                />
            </div>
        </div>
    );
};

