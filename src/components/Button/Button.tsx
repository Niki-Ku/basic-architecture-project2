import React from 'react';
import { buttonIcons } from '../../config/dynamicIcons';

interface ButtonProps {
    label: string;
    onClick?: () => void;
    variant?: 'primary' | 'secondary';
    type?: 'button' | 'submit' | 'reset';
    icon?: keyof typeof buttonIcons;
}

const Button: React.FC<ButtonProps> = ({ 
    label, 
    onClick, 
    variant = 'primary',
    type = 'button',
    icon
}) => {
    const buttonStyles = {
        primary: 'bg-red-default hover:bg-red-secondary text-white py-2 px-4 rounded flex justify-center items-center gap-2',
        secondary: 'bg-black-10 hover:bg-black-30 text-black-default py-2 px-4 rounded flex justify-center items-center gap-2',
    };
    let Icon: any;
    icon ? Icon = buttonIcons[icon] : Icon = null;
    return (
        <button
            type={type}
            className={buttonStyles[variant]}
            onClick={onClick}
        >   
            {icon && <Icon className="w-5 h-5 fill-black inline-block" />}
            {label}
        </button>
    );
};

export default Button;
