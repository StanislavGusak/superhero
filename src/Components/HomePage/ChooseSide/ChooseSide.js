import cn from 'classnames';
import PropTypes from 'prop-types';
import { THEME__DARK, THEME__LIGHT, THEME__NEITRAL, useTheme } from '../../../Context/ThemeProvider';
import imgDarkSide from './img/dark-side.jpg';
import imgLightSide from './img/light-side.jpg';
import imgNeitral from './img/neitral.jpg';
import styles from './ChooseSide.module.css';

const ChooseSideItem = ({
    classes,
    theme,
    text,
    img,
}) => {

    const isTheme = useTheme();

    return (
        <div
            className={cn(styles.item, classes)}
            onClick={() => isTheme.change(theme)}
        >
            <div className={styles.theme__header}>{text}</div>
            <img className={styles.theme__img} src={img} alt={text} />
        </div>
    )
}

ChooseSideItem.propTypes = {
    classes: PropTypes.string,
    onClick: PropTypes.string,
    text: PropTypes.string,
    img: PropTypes.string,
}

const ChooseSide = () => {

    const elements = [
        {
            theme: THEME__LIGHT,
            text: 'Light Side',
            img: imgLightSide,
            classes: styles.item__light,
        },
        {
            theme: THEME__DARK,
            text: 'Dark Side',
            img: imgDarkSide,
            classes: styles.item__dark,

        },
        {
            theme: THEME__NEITRAL,
            text: 'Neitral',
            img: imgNeitral,
            classes: styles.item__neitral,

        }
    ];

    return (
        <div className={styles.theme}>
            {elements.map(({ theme, text, img, classes }, index) => (
                <ChooseSideItem
                    key={index}
                    theme={theme}
                    text={text}
                    img={img}
                    classes={classes}
                />
            ))}
        </div>
    )
}

export default ChooseSide;