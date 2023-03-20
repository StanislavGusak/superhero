import PropTypes, { element } from 'prop-types';
import { useCallback, useEffect, useState } from 'react';
import { debounce } from 'lodash';
import { GetApi } from '../../Utils/GetApi';
import { withErrorApi } from '../../Hoc/withErrorApi';
import UiInput from '../../Utils/UI/UiInput/UiInput';
import SearchPageInfo from '../../Components/SearchPage/SearchPageInfo';
import { API__SEARCH, HASH, API__KEY, IMG__URL } from '../../Components/constants';
import photo from './img/Hulk.png';
import styles from './SearchPage.module.css';

const SearchPage = ({ setErrorApi }) => {
    const [inputSearchValue, setInputSearchValue] = useState('');
    const [character, setCharacter] = useState([])

    const getResponse = async param => {
        const url = `${API__SEARCH}${param}&apikey=${API__KEY}&hash=${HASH}`;
        const res = await GetApi(url);

        if (res) {
            const characterList = res.data.data.results.map(({ id, name, thumbnail: { path, extension } }) => {

                return {
                    id,
                    name,
                    path,
                    extension
                }
            });

            setCharacter(characterList)
            //     setErrorApi(false)
            // }else {
            //     setErrorApi(true)
        }
    }

    const debouncedGetResponse = useCallback(
        debounce(value => getResponse(value), 300),
        []
    );

    const handleInputChange = (value) => {
        setInputSearchValue(value);
        debouncedGetResponse(value);
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.search__wrapper}>
                <h1 className={styles.title}>Search</h1>
                <UiInput type='text'
                    value={inputSearchValue}
                    handleInputChange={handleInputChange}
                    placeholder="Search hero..."
                    classes={styles.input__search}
                />
                <SearchPageInfo character={character} />
            </div>
            <img className={styles.photo} src={photo} alt='hero photo' />
        </div>
    )
}

SearchPage.propTypes = {
    setErrorApi: PropTypes.func
}
// export default withErrorApi(SearchPage);

export default SearchPage;

