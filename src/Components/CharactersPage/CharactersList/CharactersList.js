import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './CharactersList.module.css';

const CharactersList = ({ characters }) => {
    return (
        <>
            <ul className={styles.list}>
                {characters.map(({ id, name, img }) =>
                    <li key={id} className={styles.list__item}>
                        <Link to={`/characters/${id}`} className={styles.list__item__link}>
                            <img src={img} alt={name} className={styles.list__item__img} />
                            <p className={styles.list__item__name}>{name}</p>
                        </Link>
                    </li>
                )}
            </ul>
        </>
    )
}

CharactersList.propTypes = {
    characters: PropTypes.array
}

export default CharactersList;