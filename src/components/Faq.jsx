import React from 'react';
import SectionHeading from '../common/SectionHeading';
import FaqAccordion from '../common/FaqAccordion';

const Faq = () => {
    return (
        <>
            <section className="faq padding-y-120 mt-minus-120">
                <div className="container container-two">
                    <div className="row">
                        <div className="col-lg-6 pe-xl-5">

                            <SectionHeading
                                headingClass="section-heading style-left"  
                                subtitle="Ask question"
                                subtitleClass="" 
                                title="Let us find the perfect property for you" 
                                renderDesc={false}
                                desc="Real estate is a lucrative ind involves the buying selling and reproperties. It Real estate is a lucrative ind involves. Real estate is a lucrative"
                                renderButton={false}
                                renderBesideDesc={false}
                                buttonClass="btn-main"
                                buttonText="View More"
                            />
                            
                            <FaqAccordion accordionClass="" itemClass=""/>
                            
                        </div>
                        <div className="col-lg-6  d-lg-block d-none">
                            <div className="faq-thumb">
                                <img src="assets/images/thumbs/faq-img.png" alt="Image"/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>   
        </>
    );
};

export default Faq;