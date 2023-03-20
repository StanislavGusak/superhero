import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import starFill from './img/star-fill.svg';
import starOutFill from './img/star.svg';

import { setCharacterToFavourite, removeCharacterFromFavourite } from '../../../store/actions/index';
import './PersonPhoto.scss';

const PersonPhoto = ({
    personId,
    personName,
    personPhoto,
    personFavourite,
    setPersonFavourite
}) => {
    const dispatch = useDispatch();

    const dispatchFavourite = () => {
        if (personFavourite) {
            dispatch(removeCharacterFromFavourite(personId));
            setPersonFavourite(false);
        } else {
            dispatch(setCharacterToFavourite({
                [personId]: {
                    name: personName,
                    img: personPhoto
                },
            }));
            setPersonFavourite(true);
        }
    }

    return (
        <div className='photo'>
            <img src={personPhoto} alt={personName} className='photo__img' />
            <img
                src={personFavourite ? starFill : starOutFill}
                onClick={dispatchFavourite}
                alt='Add to favourite'
                className='favourite'
            />
        </div>
    )
}

PersonPhoto.propTypes = {
    personId: PropTypes.number,
    personPhoto: PropTypes.array,
    personFavourite: PropTypes.bool,
    setPersonFavourite: PropTypes.func,

}

export default PersonPhoto;