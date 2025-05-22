import React from 'react';
import Header from '../common/Header';
import Footer from '../common/Footer';
import Breadcrumb from '../common/Breadcrumb';
import Cta from '../components/Cta';
import ContactTop from '../components/ContactTop';
import ContactUsSection from '../components/ContactUsSection';
import PageTitle from '../common/PageTitle';

const Contact = () => {
    return (
        <>
        <PageTitle title="360Ghar - Contact Us" />

        <main className="body-bg">
            
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
                pageTitle="Contact Us"
                pageName="Contact Us"
            />

            {/* Contact Top */}
            <ContactTop/>

            <div className="contact-map address-map">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224356.8202113498!2d76.9302921759173!3d28.423957136112284!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d19d582e38859%3A0x2cf5fe8e5c64b1e!2sGurugram%2C%20Haryana!5e0!3m2!1sen!2sin!4v1653544138149!5m2!1sen!2sin" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>

            {/* Contact Us Section */}
            <ContactUsSection/>

            {/* Cta */}
            <Cta ctaClass=""/>

            {/* Footer */}
            <Footer/>

        </main>   
        </>
    );
};

export default Contact;