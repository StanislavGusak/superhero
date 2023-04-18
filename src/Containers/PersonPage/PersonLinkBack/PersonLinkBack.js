import { useNavigate } from "react-router-dom";
import { IoChevronBack } from 'react-icons/io5';
import styles from './PersonLinkBack.module.css';

const PersonLinkBack = () => {
const navigate = useNavigate();

const HandleGoBack = e => {
    e.preventDefault();
    navigate(-1);
}

  return (
    <a
        href='#'
        onClick={HandleGoBack}
        className={styles.link}
    >
        <IoChevronBack className={styles.link__img} />
        <span>Go back</span>
    </a>
  )
}

export default PersonLinkBack;