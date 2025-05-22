import React from 'react';
import TopHeader from '../common/TopHeader';
import Header from './../common/Header';
import Banner from '../components/Banner';
import About from '../components/About';
import Property from '../components/Property';
import PropertyType from '../components/PropertyType';
import VideoPopup from '../components/VideoPopup';
import Counter from './../components/Counter';
import Portfolio from '../components/Portfolio';
import Testimonial from './../components/Testimonial';
import Blog from './../components/Blog';
import FooterTwo from './../common/FooterTwo';
import Message from './../components/Message';
import MobileMenu from '../common/MobileMenu';
import OffCanvas from '../common/OffCanvas';

const HomeOne = () => {
    return (
        <>
            <OffCanvas/>
            <MobileMenu/>
            
            <main className="body-bg">

                {/* Top header */}
                <TopHeader/>

                {/* Header */}
                <Header 
                    headerClass="" 
                    logoBlack={true}
                    logoWhite={false}
                    headerMenusClass=""
                    btnClass="btn btn-outline-light d-lg-block d-none"
                    btnLink="/property-details"
                    btnText="Sell Property"
                    spanClass="icon-right text-gradient" 
                    showHeaderBtn={true}
                    showOffCanvasBtn={true}
                    offCanvasBtnClass=""
                    showContactNumber={true}
                />

                {/* Banner */}
                <Banner/>
                
                {/* About */}
                <About/>

                {/* Property */}
                <Property/>

                {/* Property Type */}
                <PropertyType/>

                {/* Video Popup */}
                <VideoPopup/>

                {/* Counter */}
                <Counter/>

                {/* Message */}
                <Message/>

                {/* Portfolio */}
                <Portfolio/>

                {/* Testimonial */}
                <Testimonial/>

                {/* Blog */}
                <Blog/>

                {/* FooterTwo */}
                <FooterTwo/>
                
            </main>
        </>
    );
};

export default HomeOne;