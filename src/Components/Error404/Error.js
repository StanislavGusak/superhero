import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import cn from 'classnames';
import styles from '../ErrorMessage/ErrorMessage.module.css';

const Error = () => {
  let location = useLocation();

  return (
    <div className={cn(styles.error, styles.title)}>
        <h1>Error</h1>
        <h2>Page not found</h2>
        <p className={styles.error__text}>No much for <u>{location.pathname}</u></p>
        <p>Please go to <Link to={'/'} className={styles.error__message}>Home page</Link></p>
    </div>
  )
}

export default Error;