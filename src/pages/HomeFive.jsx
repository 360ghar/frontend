import React from 'react';

import Header from './../common/Header';
import Banner from '../components/Banner';
import Footer from '../common/Footer';
import MobileMenu from '../common/MobileMenu';
import OffCanvas from '../common/OffCanvas';
import PageTitle from '../common/PageTitle';

const HomeFive = () => {
    return (
        <>
        <PageTitle title="360Ghar - Home Five" />

            <OffCanvas/>
            <MobileMenu/>
            
            <main className="body-bg">

                {/* Header */}
                <Header 
                    headerClass="" 
                    logoBlack={true}
                    logoWhite={false}
                    headerMenusClass=""
                    btnClass="btn btn-main  d-lg-block d-none"
                    btnLink="/add-new-listing"
                    btnText="Add Listing"
                    spanClass="icon-right" 
                    showHeaderBtn={false}
                    showOffCanvasBtn={true}
                    offCanvasBtnClass=""
                    showContactNumber={true}
                />

                {/* Banner */}
                <Banner/>

             
                {/* Footer */}
                <Footer/>
                
            </main>   
        </>
    );
};

export default HomeFive;