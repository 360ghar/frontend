import React, { createContext, useState } from 'react';

export const ScrollHideContext = createContext(); 

const ScrollHideProvider = ({ children }) => {

    const [hideScroll, setHideScroll] = useState(false); 

    const handleScrollHide = () => {
        setHideScroll(!hideScroll); 
        document.body.classList.add('scroll-hide-sm');
    }

    const handleScrollHideClose = () => {
        setHideScroll(false); 
        document.body.classList.remove('scroll-hide-sm');
    }

    // Large Device Scroll Hide
    const handleScrollHideLg = () => {
        setHideScroll(!hideScroll); 
        document.body.classList.add('scroll-hide');
    }

    const handleScrollHideLgClose = () => {
        setHideScroll(false); 
        document.body.classList.remove('scroll-hide');
    }
    
    return (
        <ScrollHideContext.Provider value={{ hideScroll, handleScrollHide, handleScrollHideClose, handleScrollHideLg, handleScrollHideLgClose }}>
            { children }
        </ScrollHideContext.Provider>
    );
};

export default ScrollHideProvider;