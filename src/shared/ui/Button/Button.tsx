import React, { ButtonHTMLAttributes, FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import * as cls from './Button.module.scss';
import { Theme } from 'app/providers';

export enum ThemeButton {
    CLEAR = 'clear',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    className?: string;
    theme?: ThemeButton;
}

export const Button: FC<ButtonProps> = (props) => {
    console.log(ThemeButton.CLEAR)
    const {
        className,
        children,
        theme,
        ...otherProps
    } = props;
    return (
        <button 
            className={classNames(cls.Button, {}, [className, theme])}
            {...otherProps}>
            {children}
            
        </button>
    );
};
