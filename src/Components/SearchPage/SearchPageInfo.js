import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { IMG__URL } from '../constants/constants';
import styles from './SearchPageInfo.module.css';

const SearchPageInfo = ({ character }) => (
    <>
        <div className={styles.wrapper}>
            {character.length
                ? (
                    <ul className={styles.list}>
                        {character.map(({ id, name, path, extension }) => (
                            <li className={styles.list__item} key={id}>
                                <Link to={`/characters/${id}`}>
                                    <img className={styles.character__photo} src={path + '/' + IMG__URL + '.' + extension} alt={name} />
                                    <p className={styles.character__name}>{name}</p>
                                </Link>
                            </li>
                        )
                        )}
                    </ul>
                )
                : <h2 className={styles.character__coment}>No results</h2>
            }
        </div>
    </>
)

SearchPageInfo.propTypes = {
    character: PropTypes.array
}

export default SearchPageInfo;