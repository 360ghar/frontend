    import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { navMenus } from '../data/CommonData/CommonData';

const NavMenu = (props) => {

    const [activeIndex, setActiveIndex] = useState(null);

    const handleDropdownOpen = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <>
            <ul className={`nav-menu flx-align ${props.navMenusClass}`}>
                {
                    navMenus.map((navMenu, index) => {
                        return (
                            <li
                                className={`nav-menu__item 
                                    ${ navMenu.submenus && navMenu.submenus.length > 0 ? 'has-submenu' : '' } 
                                    ${ activeIndex === index ? 'active' : '' }
                                `}
                                key={index}
                                onClick={() => handleDropdownOpen(index)}
                            >
                                <NavLink to={navMenu.path} className="nav-menu__link">{navMenu.text}</NavLink>
                                {
                                    navMenu.submenus && navMenu.submenus.length > 0 && (
                                        <ul className="nav-submenu">
                                            {
                                                navMenu.submenus.map((submenu, subIndex) => (
                                                    <li className="nav-submenu__item" key={subIndex}>
                                                        <Link to={submenu.path} className="nav-submenu__link">{submenu.text}</Link>
                                                    </li>
                                                ))
                                            }
                                        </ul>
                                    )
                                }
                            </li>
                        )
                    })
                }
            </ul>   
        </>
    );
};

export default NavMenu;

