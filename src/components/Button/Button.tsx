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
        primary: 'bg-red-default hover:bg-red-secondary text-white py-2 px-4 rounded flex justify-center items-center gap-2',
        secondary: 'bg-black-10 hover:bg-black-30 text-black-default py-2 px-4 rounded flex justify-center items-center gap-2',
    };
    const iconStyles = {
        black: 'fill-black-default w-5 h-5 fill-black inline-block',
        white: 'fill-white w-5 h-5 fill-black inline-block',
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
