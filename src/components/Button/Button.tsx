import React from 'react';
import { buttonIcons } from '../../config/dynamicIcons';

interface ButtonProps {
    label: string;
    onClick?: () => void;
    variant?: 'primary' | 'secondary';
    type?: 'button' | 'submit' | 'reset';
    icon?: keyof typeof buttonIcons;
    iconVariant?: 'black' | 'white';
}

const Button: React.FC<ButtonProps> = ({ 
    label, 
    onClick, 
    variant = 'primary',
    iconVariant = 'black',
    type = 'button',
    icon
}) => {
    const buttonStyles = {
        primary: 'bg-red-default hover:bg-red-secondary text-text-default py-2 px-4 rounded inline-flex justify-center items-center gap-2',
        secondary: 'bg-gray-secondary hover:bg-bg-hover text-text-default py-2 px-4 rounded inline-flex justify-center items-center gap-2',
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
        >   
            {icon && <Icon className={iconStyles[iconVariant]} />}
            {label}
        </button>
    );
};

export default Button;
