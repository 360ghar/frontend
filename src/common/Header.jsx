import React, { useContext, useEffect, useState } from 'react';
import NavMenu from './NavMenu';
import Logo from './Logo';
import { MobileMenuContext } from '../contextApi/MobileMenuContext';
import { OffCanvasContext } from '../contextApi/OffCanvasContext';
import { ScrollHideContext } from '../contextApi/ScrollHideContext';
import Button from './Button';
import { Link } from 'react-router-dom';
import LogoWhite from './LogoWhite';
import { topHeaderInfos } from '../data/CommonData/CommonData';

const Header = (props) => {
        
    const { handleMobileMenuClick } = useContext(MobileMenuContext); 

    const { handleOffCanvas } = useContext(OffCanvasContext); 

    const { handleScrollHide, handleScrollHideLg } = useContext(ScrollHideContext); 

    // Sticky header Code 
    const [stickyHeader, setStickyHeader] = useState(false);
    
    useEffect(() => {
        window.addEventListener('scroll', function() {
            window.scrollY > 100 ? setStickyHeader(true) : setStickyHeader(false)
        });
    }, []);

    return (
        <>
            {/* ==================== Header Start Here ==================== */}
            <header className={`header ${props.headerClass} ${stickyHeader ? 'fixed-header' : ''}`}>
                <div className="container container-two">
                    <nav className="header-inner flx-between">

                        {
                            props.logoBlack && (
                                <div className="logo">
                                    <Logo/>
                                </div>
                            )
                        }

                        {
                            props.logoWhite && (
                                <div className="logo">
                                    <LogoWhite/>
                                </div>
                            )
                        }

                        {/* Menu Start  */}
                        <div className={`header-menu d-lg-block d-none ${props.headerMenusClass}`}>
                            <NavMenu navMenusClass="" />
                        </div>
                        {/* Menu End  */}

                        {/* Header Right start */}
                        <div className="header-right flx-align">
                            {
                                props.showContactNumber && (
                                    <Link to={`tel:${topHeaderInfos[0].text}`} className="contact-number text-poppins text-gray-800 fw-500 d-flex align-items-center gap-2">
                                        <span className="icon text-gradient font-20"><i className="fas fa-phone"></i></span>
                                        <span className="text">{topHeaderInfos[0].text}</span>
                                    </Link>
                                )
                            }
                            
                            {
                                props.showOffCanvasBtn && (
                                    <button type="button" className={`offcanvas-btn d-lg-block d-none ${props.offCanvasBtnClass}`} 
                                        onClick={() => { handleOffCanvas(); handleScrollHideLg(); }}
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="24" viewBox="0 0 30 24" fill="none">
                                            <line x1="0.0078125" y1="12.293" x2="30.0078" y2="12.293" stroke="#181616" strokeWidth="3"/>
                                            <path d="M5.00781 22.293H30.0078" stroke="#181616" strokeWidth="3"/>
                                            <path d="M10.0078 2.29297H30.0078" stroke="#181616" strokeWidth="3"/>
                                        </svg>
                                    </button>
                                )
                            }
                            
                            {
                                props.showHeaderBtn && (
                                    <Button 
                                        btnLink={props.btnLink} 
                                        btnClass={props.btnClass} 
                                        btnText={props.btnText} 
                                        spanClass={props.spanClass}
                                        iconClass="fas fa-arrow-right" 
                                    />
                                )
                            }

                            <button type="button" className="toggle-mobileMenu d-lg-none ms-3" 
                                onClick={() => { handleMobileMenuClick(); handleScrollHide(); }}
                            >
                                <i className="las la-bars"></i> 
                            </button>
                        </div>
                        
                        {/* Header Right End  */}
                    </nav>
                </div>
            </header>
            {/* ==================== Header End Here ==================== */}   
        </>
    );
};

export default Header;