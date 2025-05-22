import React from 'react';
import Header from '../common/Header';
import Footer from '../common/Footer';
import Breadcrumb from '../common/Breadcrumb';
import Cta from '../components/Cta';
import AboutThree from '../components/AboutThree';
import PropertyTypeThree from '../components/PropertyTypeThree';
import Team from '../components/Team';
import PageTitle from '../common/PageTitle';

const AboutUs = () => {
    return (
        <>
            <PageTitle title="360Ghar - About Us" />
            {/* Header */}
            <Header 
                headerClass="dark-header has-border" 
                logoBlack={false}
                logoWhite={true}
                headerMenusClass="mx-auto"
                btnClass="btn btn-outline-main btn-outline-main-dark d-lg-block d-none"
                btnLink="/add-new-listing"
                btnText="Add Listing"
                spanClass="icon-right text-gradient" 
                showHeaderBtn={true}
                showOffCanvasBtn={false}
                offCanvasBtnClass=""
                showContactNumber={false}
            />

            {/* BreadCrumb */}
            <Breadcrumb 
                pageTitle="About Us"
                pageName="About Us"
            />

            <AboutThree/>    

            <Team/>

            <PropertyTypeThree/> 

            {/* Cta */}
            <Cta ctaClass=""/>

            {/* Footer */}
            <Footer/>
        </>
    );
};

export default AboutUs;