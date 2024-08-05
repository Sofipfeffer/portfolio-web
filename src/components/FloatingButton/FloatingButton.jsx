import React from 'react';
import { useTheme } from '../../context/ThemeContext.jsx';
import { FaSun, FaMoon } from 'react-icons/fa'; // Librería de iconos

const FloatingButton = () => {
    const { theme, toggleTheme } = useTheme();

    const buttonStyle = {
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        backgroundColor: theme === 'light' ? '#fff' : '#333',
        color: theme === 'light' ? '#000' : '#fff',
        border: 'none',
        borderRadius: '50%',
        width: '50px',
        height: '50px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    };

    return (
        <button onClick={toggleTheme} style={buttonStyle}>
            {theme === 'light' ? <FaSun size={24} /> : <FaMoon size={24} />}
        </button>
    );
};

export default FloatingButton;
