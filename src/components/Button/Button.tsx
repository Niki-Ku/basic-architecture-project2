import React from 'react';
import { buttonIcons } from '../../config/dynamicIcons';

interface ButtonProps {
    label: string;
    onClick?: () => void;
    variant?: 'primary' | 'secondary' | 'white';
    type?: 'button' | 'submit' | 'reset';
    icon?: keyof typeof buttonIcons;
    iconVariant?: 'black' | 'white';
    disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({ 
    label, 
    onClick, 
    variant = 'primary',
    iconVariant = 'black',
    type = 'button',
    icon,
    disabled
}) => {
    const buttonStyles = {
        primary: `bg-red-default hover:bg-red-secondary text-text-default py-2 px-4 rounded inline-flex justify-center items-center gap-2 ${disabled ? 'bg-gray-default hover:bg-gray-default' : ''}`,
        secondary: `bg-gray-secondary hover:bg-bg-hover text-text-default py-2 px-4 rounded inline-flex justify-center items-center gap-2 ${disabled ? 'bg-gray-default hover:bg-gray-default' : ''}`,
        white: `bg-white hover:bg-bg-hover text-black-default py-2 px-4 rounded inline-flex justify-center items-center gap-2 ${disabled ? 'bg-gray-default hover:bg-gray-default' : ''}`,
    };
    const iconStyles = {
        black: 'w-5 h-5 fill-text-default inline-block',
        white: 'w-5 h-5 fill-text-default inline-block',
    }
    let Icon: any;
    icon ? Icon = buttonIcons[icon] : Icon = null;
    return (
        <button
            type={type}
            className={buttonStyles[variant]}
            onClick={onClick}
            disabled={disabled}
        >   
            {icon && <Icon className={iconStyles[iconVariant]} />}
            {label}
        </button>
    );
};

export default Button;
