import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import icon from './img/favourite.svg';
import { Link } from 'react-router-dom';
import styles from './Favourite.module.css';

const Favourite = () => {
    const [count, setCount] = useState()
    const storeData = useSelector(state => state.favouriteReduser);

useEffect(() => {

    const length = Object.keys(storeData).length;
    length.toString().length > 2 ? setCount('...') : setCount(length)
});

  return (
    <div className={styles.container}>
        <Link to={'/favourites'} className="{({isActive}) => ? 'active' : false}">
            <span className={styles.counter}>{count}</span>
            <img className={styles.icon} src={icon} alt='Favourite' />
        </Link>
    </div>
  )
}

export default Favourite;