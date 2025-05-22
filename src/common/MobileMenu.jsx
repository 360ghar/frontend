import React, { useContext } from 'react';
import Logo from './Logo';
import NavMenu from './NavMenu';
import { MobileMenuContext } from '../contextApi/MobileMenuContext';
import { ScrollHideContext } from '../contextApi/ScrollHideContext';
import Button from './Button';

const MobileMenu = () => {

    const { toggleMobileMenu, handleMobileMenuClose } = useContext(MobileMenuContext);

    const { handleScrollHideClose } = useContext(ScrollHideContext); 
    
    return (
        <>
            {/* ==================== Mobile Menu Start Here ==================== */}
            <div className={`side-overlay ${toggleMobileMenu ? 'show' : "" }`} onClick={()=> {handleMobileMenuClose(); handleScrollHideClose(); }}></div>
            
            <div className={`mobile-menu d-lg-none d-block ${toggleMobileMenu ? 'active' : "" }`}>
                <button type="button" className="close-button" onClick={ ()=> {handleMobileMenuClose(); handleScrollHideClose(); }}>
                    <i className="las la-times"></i> 
                </button>
                <div className="mobile-menu__inner">

                    {/* Logo */}
                    <Logo/>
                    
                    <div className="mobile-menu__menu">

                        {/* Nav Menu */}
                        <NavMenu navMenusClass="nav-menu--mobile" />

                        {/* Header Button */}
                        <Button
                            btnLink="/property-details" 
                            btnClass="btn-outline-light d-lg-none d-block mt-4" 
                            btnText="Learn More" 
                            spanClass="icon-right text-gradient" 
                            iconClass="fas fa-arrow-right" 
                        />
                        
                    </div>
                </div>
            </div>
            {/* ==================== Mobile Menu End Here ==================== */}
        </>
    );
};

export default MobileMenu;