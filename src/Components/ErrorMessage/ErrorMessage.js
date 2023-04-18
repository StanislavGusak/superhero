import React from 'react';
import cn from 'classnames';
import styles from './ErrorMessage.module.css';


const ErrorMessage = () => {
    return (
        <div>
            <p className={cn(styles.error, styles.title)}>Page is not defined!</p>
        </div>
    )
}

export default ErrorMessage;