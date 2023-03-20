import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './PersonComics.scss';

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
        <div className='series'>
            <ul className='series__list'>
                {comicsName
                    .sort((a, z) => a - z)
                    .map(({ name }) =>
                        <li key={name} className='series__list-item'>
                            <span className='subtitle'>Series</span>
                            <span className='colon'> : </span>
                            <span className='description'>{name}</span>
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