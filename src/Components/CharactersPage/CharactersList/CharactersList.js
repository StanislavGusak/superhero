import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { IMG__URL } from '../../constants';
import './CharactersList.scss';

const CharactersList = ({ characters }) => {
    return (
        <>
            <ul className='list'>
                {characters.map(({ id, name, img }) =>
                    <li key={id} className='list__item'>
                        <Link to={`/characters/${id}`} className='list__item-link'>
                            <img src={img} alt={name} className='list__item-img' />
                            <p className='list__item-name'>{name}</p>
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