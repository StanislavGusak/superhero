import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import CharactersList from '../../Components/CharactersPage/CharactersList/CharactersList';
import { withErrorApi } from '../../Hoc/withErrorApi';
import { GetApi } from '../../Utils/GetApi';
import { API__CHARACTERS, IMG__URL } from '../../Components/constants';

const CharactersPage = ({ setErrorApi }) => {
// const CharactersPage = () => {

    const [characters, setCharacters,] = useState(null);

    const getResource = async (url) => {
        const res = await GetApi(url);

        if (res) {
            const heroList = res.data.data.results.map(({ id, name, thumbnail: { path, extension } }) => {
                const img = path + '/' + IMG__URL + '.' + extension
                return {
                    id,
                    name,
                    img: img
                }
            })
            
            setCharacters(heroList);
            setErrorApi(false);
        } else {
            setErrorApi(true);
        }
    }

    useEffect(() => {
        getResource(API__CHARACTERS);
    }, []);

    return (
        <>
            <div className='wrapper'>
                {characters && <CharactersList characters={characters} />}
            </div>
        </>
    )
}

CharactersPage.propTypes = {
    setErrorApi: PropTypes.func
}

export default withErrorApi(CharactersPage);
// export default CharactersPage;


