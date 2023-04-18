import React, { useContext, useState } from 'react';
import { ChangeCssVariables } from '../Services/ChangeCssVariables';
export const THEME__LIGHT = 'light';
export const THEME__DARK = 'dark';
export const THEME__NEITRAL = 'neitral';

const ThemeContext = React.createContext();
export const useTheme = () => useContext(ThemeContext); 

export const ThemeProvider = ({ children, ...props }) => {
    const [theme, setTheme] = useState(null);

    const change = name => {
        setTheme(name);
        ChangeCssVariables(name);
    }

    return (
        <ThemeContext.Provider
            value={{
                theme,
                change
            }}
            {...props}
        >
            {children}
        </ThemeContext.Provider>
    )
}
