import React, { createContext, useState } from 'react';

export const MobileMenuContext = createContext(); 

const MobileMenuProvider = ({ children }) => {
        
    const [toggleMobileMenu, setToggleMobileMenu] = useState(false);

    const handleMobileMenuClick = () => {
        setToggleMobileMenu(!toggleMobileMenu)
    }
    
    const handleMobileMenuClose = () => {
        setToggleMobileMenu(false)
    }
    
    return (
        <MobileMenuContext.Provider value={{ toggleMobileMenu, handleMobileMenuClick, handleMobileMenuClose }}>
            { children }
        </MobileMenuContext.Provider>
    );
};

export default MobileMenuProvider;
