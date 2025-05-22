import React, { useEffect } from 'react';
import Button from '../common/Button';
import { useNavigate } from 'react-router-dom';
import PageTitle from '../common/PageTitle';

const NotFound = () => {

    // Automatically redirect to previous page
    const navigate = useNavigate(); 

    useEffect(() => {
        setTimeout(() => {
            navigate(-1)
        }, 2500);
    }, []);
    
    return (
        <>
        <PageTitle title="360Ghar - 404 Page Not Found" />

            <div className="not-found text-center">
                <div className="not-found__inner">
                    <span className="not-found__icon">
                        <i className="far fa-frown text-body"></i>
                    </span>
                    <h1 className='mt-4 mb-5'>404 Page Not Found</h1>   
                    <Button 
                        btnLink="/" 
                        btnClass="btn-main" 
                        btnText="Back To Home" 
                        spanClass="icon-right" 
                        iconClass="" 
                    />
                </div>
            </div>
        </>
    );
};

export default NotFound;