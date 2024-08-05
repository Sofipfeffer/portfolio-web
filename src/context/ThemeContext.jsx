import React, { createContext, useState, useContext } from 'react';

// Crea el contexto
const ThemeContext = createContext();

// Proveedor del tema
export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState('light'); // Tema inicial

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

// Hook para usar el contexto del tema
export const useTheme = () => useContext(ThemeContext);
