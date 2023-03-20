import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import CharactersList from '../../Components/CharactersPage/CharactersList/CharactersList';
import styles from './FavouritePage.module.css';

const FavouritePage = () => {
const [characters, setCharacters] = useState([]);

    const storeData = useSelector(state => state.favouriteReduser);
    
    useEffect(() => {
        const arr = Object.entries(storeData);

        if(arr.length) {
            const res = arr.map(item => {
                return {
                    id: item[0],
                    name: item[1].name,
                    ... item[1]
                }
            })

            setCharacters(res)
        }
    }, []);

  return (
    <div className={styles.favourite__wrapper}>
        <h1 className={styles.title}>FavouritePage</h1>
        {characters.length
            ? <CharactersList characters={characters} />
            : <h2 className={styles.coment}>No data</h2>
        }
    </div>
  )
}

export default FavouritePage;