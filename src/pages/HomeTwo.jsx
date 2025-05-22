import React from 'react';

import Header from './../common/Header';
import MobileMenu from '../common/MobileMenu';
import OffCanvas from '../common/OffCanvas';
import BannerTwo from '../components/BannerTwo';
import Service from '../components/Service';
import AboutTwo from '../components/AboutTwo';
import FloorPlan from './../components/FloorPlan';
import CounterTwo from '../components/CounterTwo';
import Gallery from '../components/Gallery';
import Apartment from './../components/Apartment';
import MessageTwo from '../components/MessageTwo';
import BlogTwo from './../components/BlogTwo';
import Footer from '../common/Footer';
import PageTitle from '../common/PageTitle';

const HomeTwo = () => {
    return (
        <>
            <PageTitle title="360Ghar - Home Two" />
            
            <OffCanvas/>
            <MobileMenu/>
            
            <main className="dark-background">

                {/* Header */}
                <Header 
                    headerClass="dark-header" 
                    logoBlack={false}
                    logoWhite={true}
                    headerMenusClass="ms-auto me-4"
                    btnClass="btn btn-outline-main btn-outline-main-dark d-lg-block d-none"
                    btnLink="/add-new-listing"
                    btnText="Add Listing"
                    spanClass="icon-right text-gradient" 
                    showHeaderBtn={true}
                    showOffCanvasBtn={false}
                    offCanvasBtnClass=""
                    showContactNumber={true}
                />

                {/* Banner Two */}
                <BannerTwo/>

                {/* Service */}
                <Service/>

                {/* About Two */}
                <AboutTwo/>

                {/* Floor Plan */}
                <FloorPlan/>

                {/* Gallery */}
                <Gallery/>

                {/* Counter Two */}
                <CounterTwo/>

                {/* Apartment */}
                <Apartment/>

                {/* Message Two */}
                <MessageTwo/>

                {/* Blog Two */}
                <BlogTwo/>

                {/* Footer */}
                <Footer/>
                
            </main>   
        </>
    );
};

export default HomeTwo;