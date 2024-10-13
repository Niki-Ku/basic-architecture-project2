import React from 'react';
import "./BurgerButton.css"; 

interface BurgerButtonProps {
    onClick?: () => void;
    variant: 'burgerBlack' | 'burger';
    background?: 'black' | 'white' | 'transparent' | 'transparentBlack';
    isOpen: boolean;
    ariaLabel?: string;
}

const BurgerButton: React.FC<BurgerButtonProps> = ({ 
    onClick, 
    variant = 'burger',
    background = 'transparent',
    isOpen,
    ariaLabel,
}) => {
    const divStyles = {
      transparentBlack: 'bg-black-10 inline-block p-2 relative cursor-pointer rounded',
      white: 'bg-white inline-block p-2 cursor-pointer rounded',
      black: 'bg-black-default inline-block p-2 cursor-pointer rounded',
      transparent: 'bg-transparent inline-block p-2 cursor-pointer rounded',
    }
    const buttonStyles = {
      burger: `burger-icon ${isOpen ? 'active' : ''} relative`,
      burgerBlack: `burger-icon-black ${isOpen ? 'active' : ''} relative`,
    };
    return (
        <div className={divStyles[background]} onClick={onClick}>
            <button
              className={buttonStyles[variant]}
              aria-label={ariaLabel}
            >   
              <span></span>
            </button>
        </div>
    );
};

export default BurgerButton;
