import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './PersonComics.module.css';

const PersonComics = ({ personComics }) => {
    const [comicsName, setComicsName] = useState([]);

    useEffect(() => {
        (async () => {
            const series = personComics.map(({ name, resourceURI }) => {
                return {
                    name,
                    resourceURI
                }
            })
         
            setComicsName(series)
        })();
    }, []);

    return (
        <div className={styles.series}>
            <ul className={styles.series__list}>
                {comicsName
                    .sort((a, z) => a - z)
                    .map(({ name }) =>
                        <li key={name} className={styles.series__list__item}>
                            <span className={styles.subtitle}>Series</span>
                            <span className={styles.colon}> : </span>
                            <span className={styles.description}>{name}</span>
                        </li>
                    )}
            </ul>
        </div>
    )
}

PersonComics.propTypes = {
    personComics: PropTypes.array
}

export default PersonComics;