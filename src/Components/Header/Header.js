import React, { useEffect, useState } from 'react';
import { THEME__DARK, THEME__LIGHT, THEME__NEITRAL, useTheme } from '../../Context/ThemeProvider';
import { Navigation } from '../Navigation/Navigation';
import { MARVEL } from '../constants';
import imgDark from './img/dark.png';
import imgLight from './img/light.png';
import imgNeitral from './img/neitral.png';
import './Header.scss';

const Header = () => {
    const [icon, setIcon] = useState(imgNeitral)
    const isTheme = useTheme();

    useEffect(() => {
        switch (isTheme.theme) {
            case THEME__LIGHT: setIcon(imgLight); break;
            case THEME__DARK: setIcon(imgDark); break;
            case THEME__NEITRAL: setIcon(imgNeitral); break;
            default: setIcon(imgNeitral);
        }
    }, [isTheme]);

    return (
        <header className='header'>
            <div className='header__wrapper'>
                <a href={MARVEL} className="logo">
                    <img src={icon} alt='shield' className='logo__img' />
                    <span className="logo__text">SuperHeroes</span>
                </a>
                <Navigation></Navigation>
            </div>
        </header>
    )
}

export default Header;




