import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import CharactersList from '../../Components/CharactersPage/CharactersList/CharactersList';
import PersonLinkBack from '../PersonPage/PersonLinkBack/PersonLinkBack';
import styles from './FavouritePage.module.css';

const FavouritePage = () => {
    const [characters, setCharacters] = useState([]);

    const storeData = useSelector(state => state.favouriteReduser);

    useEffect(() => {
        const arr = Object.entries(storeData);

        if (arr.length) {
            const res = arr.map(item => {
                return {
                    id: item[0],
                    name: item[1].name,
                    ...item[1]
                }
            })

            setCharacters(res)
        }
    }, []);

    return (
        <div className={styles.favourite__wrapper}>
            <PersonLinkBack />
            <h1 className={styles.title}>FavouritePage</h1>
            {characters.length
                ? <CharactersList characters={characters} />
                : <h2 className={styles.coment}>You don't have any characters</h2>
            }
        </div>
    )
}

export default FavouritePage;