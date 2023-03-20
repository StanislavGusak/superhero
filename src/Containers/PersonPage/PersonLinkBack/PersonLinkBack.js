import { useNavigate } from "react-router-dom";
import { IoChevronBack } from 'react-icons/io5';
import './PersonLinkBack.scss';

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
        className='link'
    >
        <IoChevronBack className="link__img"/>
        <span>Go back</span>
    </a>
  )
}

export default PersonLinkBack;