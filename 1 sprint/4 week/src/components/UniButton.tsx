import React from 'react';
// @ts-ignore
import s from './UniButton.module.css'

type Props = {
    name?: string
    onClick: () => void
    children: React.ReactNode
    color?: string
    disabled?: boolean
}

export const UniButton: React.FC<Props> = (props) => {

    const {name, onClick,children, color, disabled, ...restProps} = props

    const className = `${s.button} ${color === 'red' ? s.red : color === 'secondary' ? s.secondary : s.default} ${disabled ? s.disabled : ''}`

    const onClickHandler = () => {
        onClick()
    }

    return(
        <button className={className} onClick={onClickHandler}>{children}</button>
    )
}