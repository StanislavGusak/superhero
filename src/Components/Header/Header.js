import React, { useEffect, useState } from 'react';
import { THEME__DARK, THEME__LIGHT, THEME__NEITRAL, useTheme } from '../../Context/ThemeProvider';
import { Navigation } from '../Navigation/Navigation';
import { MARVEL } from '../constants/constants';
import imgDark from './img/dark.png';
import imgLight from './img/light.png';
import imgNeitral from './img/neitral.png';
import styles from './Header.module.css';

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
        <header className={styles.header}>
            <div className={styles.header__wrapper}>
                <a href={MARVEL} className={styles.logo}>
                    <img src={icon} alt='shield' className={styles.logo__img} />
                    <span className={styles.logo__text}>SuperHeroes</span>
                </a>
                <Navigation></Navigation>
            </div>
        </header>
    )
}

export default Header;




