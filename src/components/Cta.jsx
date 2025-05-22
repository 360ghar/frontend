import React from 'react';
import CtaThumb from '../../public/assets/images/thumbs/cta-img.png';
import NewsletterForm from '../common/NewsletterForm';

const Cta = (props) => {
    return (
        <section className={`cta padding-b-120 ${props.ctaClass}`}>
            <div className="container container-two">
                <div className="cta-box flx-between gap-2">
                    <div className="cta-content">
                        <h2 className="cta-content__title">Subscribe To Our <span className="text-gradient">Newsletter</span> </h2>
                        <p className="cta-content__desc">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>

                        <NewsletterForm formClass="max-w-unset" inputClass="bg-danger" iconClass="text-gradient"/>
                        
                    </div>
                    <div className="cta-content__thumb d-xl-block d-none">
                        <img src={CtaThumb} alt="Cta Image"/>
                    </div>
                </div>
            </div>
        </section>   
    );
};

export default Cta;