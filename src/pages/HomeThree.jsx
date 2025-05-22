import React from 'react';

import Header from './../common/Header';
import Footer from '../common/Footer';
import MobileMenu from '../common/MobileMenu';
import OffCanvas from '../common/OffCanvas';
import BannerThree from '../components/BannerThree';
import AboutThree from './../components/AboutThree';
import PropertyTypeThree from './../components/PropertyTypeThree';
import PropertyTwo from './../components/PropertyTwo';
import MessageThree from '../components/MessageThree';
import Newsletter from '../components/Newsletter';
import TestimonialThree from '../components/TestimonialThree';
import CounterThree from '../components/CounterThree';
import Faq from '../components/Faq';
import BlogThree from './../components/BlogThree';
import PageTitle from '../common/PageTitle';

const HomeThree = () => {
    return (
        <>
        
        <PageTitle title="360Ghar - Home Three" />
            <OffCanvas/>
            <MobileMenu/>
            
            <main className="body-bg">

                {/* Header */}
                <Header 
                    headerClass="bg-transparent" 
                    logoBlack={true}
                    logoWhite={false}
                    headerMenusClass="ms-auto menu-right"
                    btnClass="btn btn-main  d-lg-block d-none"
                    btnLink="/add-new-listing"
                    btnText="Add Listing"
                    spanClass="icon-right" 
                    showHeaderBtn={true}
                    showOffCanvasBtn={false}
                    offCanvasBtnClass=""
                    showContactNumber={true}
                />

                {/* Banner Three */}
                <BannerThree/>

                {/* About Three */}
                <AboutThree/>

                {/* Property Type Three */}
                <PropertyTypeThree/>

                {/* Property Two */}
                <PropertyTwo/>

                {/* Message Three */}
                <MessageThree/>

                {/* Newsletter */}
                <Newsletter/>

                {/* Testimonial Three */}
                <TestimonialThree/>

                {/* Counter Three */}
                <CounterThree/>

                {/* Faq */}
                <Faq/>

                {/* Blog Three */}
                <BlogThree/>

                {/* Footer */}
                <Footer/>
                
            </main>   
        </>
    );
};

export default HomeThree;