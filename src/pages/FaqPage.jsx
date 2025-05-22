import React from 'react';
import Header from '../common/Header';
import Footer from '../common/Footer';
import Breadcrumb from '../common/Breadcrumb';
import Cta from '../components/Cta';
import FaqTwo from '../components/FaqTwo';
import FaqContactUs from '../components/FaqContactUs';
import CounterFour from '../components/CounterFour';
import PageTitle from '../common/PageTitle';

const FaqPage = () => {
    return (
        <>
        <PageTitle title="360Ghar - Frequently Ask Question" />

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
                pageTitle="FAQ"
                pageName="FAQ"
            />

            {/* Faq Two */}
            <FaqTwo/>

            {/* Faq Contact Us */}
            <FaqContactUs/>

            {/* Counter Four */}
            <CounterFour/>
            
            {/* Cta */}
            <Cta ctaClass=""/>

            {/* Footer */}
            <Footer/>
        </>
    );
};

export default FaqPage;