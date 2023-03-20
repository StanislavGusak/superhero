import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Favourite from '../Favourite/Favourite';
import { VscMenu, VscClose } from "react-icons/vsc";
import BackDrop from '../BurgerMenu/BackDrop/BackDrop';
import './Navigation.scss';

const Navigation = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [hideOrShow, SetHideOrShow] = useState({});

    const handleMenu = () => {
        setIsOpen((prev) => !prev)
        if (isOpen) {
            SetHideOrShow(() => {
                return [];
            })
        } else {
            SetHideOrShow(() => {
                return {display: 'flex'};
            })
        }
    }

    return (
        <div className='nav__container'>
            <div className='nav__wrapper'>
                {isOpen ? <button onClick={handleMenu} className="menu__btn">{<VscClose />}</button>
                        : <button onClick={handleMenu} className="menu__btn">{<VscMenu />}</button>}

                {isOpen ? <BackDrop handleMenu={handleMenu} /> : null}
                    <div className='nav__vision' style={hideOrShow}>
                    <nav className="nav">
                        <ul className="menu">
                            <li className="menu__list">
                                <NavLink to={'/'} className="{({isActive}) => ? 'active' : false} menu__list-link">Home</NavLink>
                            </li>
                            <li className="menu__list">
                                <NavLink to={'/characters'} className="{({isActive}) => ? 'active' : false} menu__list-link">Characters</NavLink>
                            </li>
                            <li className="menu__list">
                                <NavLink to={'/search'} className="{({isActive}) => ? 'active' : false} menu__list-link">Search</NavLink>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
            <Favourite />
        </div>
    )





    // return (
    //     <nav className="nav">
    //         <ul className="menu">
    //             <li className="menu__list">
    //                 <NavLink to={'/'} className="{({isActive}) => ? 'active' : false} menu__list-link">Home</NavLink>
    //             </li>
    //             <li className="menu__list">
    //                 <NavLink to={'/characters'} className="{({isActive}) => ? 'active' : false} menu__list-link">Characters</NavLink>
    //             </li>
    //             <li className="menu__list">
    //                 <NavLink to={'/search'} className="{({isActive}) => ? 'active' : false} menu__list-link">Search</NavLink>
    //             </li>
    //         </ul>
    //     </nav>
    // )
};

export { Navigation };