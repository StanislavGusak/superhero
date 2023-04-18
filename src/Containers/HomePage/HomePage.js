import React from 'react';
import ChooseSide from '../../Components/HomePage/ChooseSide/ChooseSide';
import styles from './HomePage.module.css';

const HomePage = () => {
    return (
        <>
            <div className={styles.wrapper}>
                <h1 className={styles.title}>Choose your theme</h1>
                <ChooseSide />
            </div>
        </>
    )
}

export default HomePage;