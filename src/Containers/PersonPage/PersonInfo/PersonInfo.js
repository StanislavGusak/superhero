import PropTypes from 'prop-types';
import './PersonInfo.scss';

const PersonInfo = ({ personInfo }) => {

    return (
        <>
            <div className='info'>
                <ul className='info__list'>
                    {personInfo.map(({ title, desc }) => (
                        { desc } && (
                            <li key={title} className='info__list-item'>
                                <span className='info-title'>{title}</span>
                                <span className='info-colon'> : </span>
                                <span className='info-description'>{desc}</span>
                            </li>
                        )
                    ))}
                </ul>
            </div>
        </>
    )
}

PersonInfo.propTypes = {
    personInfo: PropTypes.array
}

export default PersonInfo;