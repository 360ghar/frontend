import React from 'react';
import TabFilter from '../common/TabFilter';
import { bannerThreeContent } from '../data/HomeThreeData/HomeThreeData';
import { topHeaderInfos } from '../data/CommonData/CommonData';
import { Link } from 'react-router-dom';

const BannerThree = () => {
    return (
        <>
            {/* ============================ Banner Three Start =============================    */}
            <section className="banner-three">
                <img src="assets/images/thumbs/dotted-bg.png" alt="" className="banner-three__dotted"/>
                <img src="assets/images/shapes/banner-shape.png" alt="" className="banner-three__shape"/>
                <div className="container container-two">
                    <div className="banner-three__inner position-relative padding-y-120">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="banner-inner position-relative">
                                    <div className="banner-content">
                                        <span className="banner-content__subtitle text-uppercase font-14 text-gradient">{bannerThreeContent.subtitle}</span>
                                        <h1 className="banner-content__title">{bannerThreeContent.title}
                                            <span className="position-relative d-inline">
                                            {bannerThreeContent.shapedTitle}
                                                <img src="assets/images/shapes/curve-shape.png" alt="" className="curve-shape"/> 
                                            </span> 
                                        </h1>
                                        <p className="banner-content__desc font-18 mb-4 mb-lg-3">{bannerThreeContent.desc}</p>
                                        <div className="contact-info d-flex align-items-center gap-2 mb-4">
                                            <span className="contact-info__icon text-gradient"><i className="fas fa-phone"></i></span>
                                            <div className="contact-info__content">
                                                <span className="contact-info__text fw-500">Need help?</span>
                                                <Link to={`tel:${topHeaderInfos[0].text}`} className="contact-info__address text-gradient">{topHeaderInfos[0].text}</Link>
                                            </div>
                                        </div>
                                    </div>            
                                </div>
                            </div>
                            <div className="col-lg-6 order-lg-0 order-1">
                                <div className="banner-thumb">
                                    <img src={bannerThreeContent.thumb} alt=""/>
                                </div>  
                            </div>
                            
                            <div className="col-12">
                                <TabFilter colClass="col-lg-3 col-sm-6 col-xs-6"/>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </section>
            {/* ============================ Banner Three End =============================    */}
        </>
    );
};

export default BannerThree;