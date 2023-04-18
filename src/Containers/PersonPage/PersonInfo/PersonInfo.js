import PropTypes from 'prop-types';
import styles from './PersonInfo.module.css';

const PersonInfo = ({ personInfo }) => {

    return (
        <>
            <div className={styles.info}>
                <ul className={styles.info__list}>
                    {personInfo.map(({ title, desc }) => (
                        { desc } && (
                            <li key={title} className={styles.info__list__item}>
                                <span className={styles.info__title}>{title}</span>
                                <span className={styles.info__colon}> : </span>
                                <span className={styles.info__description}>{desc}</span>
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