import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import '../ErrorMessage/ErrorMessage.scss';

const Error = () => {
  let location = useLocation();

  return (
    <div className='error title'>
        <h1>Error</h1>
        <h2>Page not found</h2>
        <p className='error__text'>No much for <u>{location.pathname}</u></p>
        <p>Please go to <Link to={'/'} className="error__message">Home page</Link></p>
    </div>
  )
}

export default Error;