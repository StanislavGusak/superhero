import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import LoaderBlue from'../img/loader-blue.svg';
import LoaderBlack from'../img/loader-black.svg';
import LoaderWhite from'../img/loader-white.svg';
import './UILoading.scss';

const UILoading = ({
  theme = 'light',
 

}) => {
const [loaderIcon, setLoaderIcon] = useState(null);

useEffect(() => {
  switch (theme) {
    case 'dark': setLoaderIcon(LoaderBlack); break;
    case 'light': setLoaderIcon(LoaderWhite); break;
    case 'neitral': setLoaderIcon(LoaderBlue); break;
    default: setLoaderIcon(LoaderBlack);
  }
}, []);

  return (
    <img 
    className='loader shadow'
    src={loaderIcon}
    alt='loader'
    />
  )
}

UILoading.propTypes = {
  theme: PropTypes.string,
  classes: PropTypes.string,
}

export default UILoading;