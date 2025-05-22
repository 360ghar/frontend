import React from 'react';

import LogoImg from '../../public/assets/images/logo/logo.png';
import { Link } from 'react-router-dom';

const Logo = () => {
    return   (
        <>
            <Link to="/" className="link">
                <img src={LogoImg} alt="Logo"/>
            </Link>
        </>
    );
};

export default Logo;    