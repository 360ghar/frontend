import React from 'react';
import { addressContents, featureLists, propertyDetailsAmenities } from '../data/OthersPageData/OthersPageData';
import { Link, useLocation } from 'react-router-dom';

import houseThumb from '../../public/assets/images/thumbs/house.png';
import CommonSidebar from '../common/CommonSidebar';

const PropertyDetailsSection = () => {

    const location = useLocation(); 
    
    return (
        <>
        {/* ============================ Property Details Section Start =============== */}
        <section className="property-details padding-y-120">
            <div className="container container-two">
                <div className="row gy-4">
                    <div className="col-lg-8">

                        <div className="property-details__thumb">
                            <img src={location.state.thumb} alt="Image" className="cover-img"/>
                        </div>

                        <h3 className="property-details__title mt-lg-5 mb-4">{location.state.title}</h3>
                        <p className="property-details__desc mb-3">{location.state.desc.slice(0, 178)}</p>
                        <p className="property-details__desc">{location.state.desc.slice(179, 400)}</p>

                        <div className="property-details-wrapper">
                            <div className="property-details-item">
                                <h6 className="property-details-item__title">Preview</h6>
                                <div className="property-details-item__content">
                                    <div className="row gy-4 gy-lg-5">
                                        {
                                            propertyDetailsAmenities.map((amenity, amenityIndex) => {
                                                return (
                                                    <div className="col-sm-4 col-6" key={amenityIndex}>
                                                        <div className="amenities-content d-flex align-items-center">
                                                            <span className="amenities-content__icon">
                                                                <img src={amenity.icon} alt=""/>
                                                            </span>
                                                            <div className="amenities-content__inner">
                                                                <span className="amenities-content__text">{amenity.text}</span>
                                                                <h6 className="amenities-content__title mb-0 font-16">{amenity.title}</h6>
                                                            </div>
                                                        </div>
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>
                                </div>
                            </div>

                            <div className="property-details-item">
                                <h6 className="property-details-item__title">Features</h6>
                                <div className="property-details-item__content">
                                    <div className="row gy-2">
                                        <div className="col-sm-6">
                                            <ul className="check-list">
                                                {
                                                    featureLists.map((featureList, featureListIndex) => {
                                                        if(featureListIndex % 2 == 0) {
                                                            return (
                                                                <li className="check-list__item d-flex align-items-center" key={featureListIndex}>
                                                                    <span className="icon">{featureList.icon}</span>
                                                                    <span className="text">{featureList.text}</span>
                                                                </li>
                                                            )
                                                        }
                                                    })
                                                }
                                            </ul>
                                        </div>
                                        <div className="col-sm-6">
                                            <ul className="check-list">
                                                {
                                                    featureLists.map((featureList, featureListIndex) => {
                                                        if(featureListIndex % 2 !== 0) {
                                                            return (
                                                                <li className="check-list__item d-flex align-items-center" key={featureListIndex}>
                                                                    <span className="icon">{featureList.icon}</span>
                                                                    <span className="text">{featureList.text}</span>
                                                                </li>
                                                            )
                                                        }
                                                    })
                                                }
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="property-details-item">
                                <h6 className="property-details-item__title">Address</h6>
                                <div className="property-details-item__content">
                                    <div className="row gy-4">
                                        {
                                            addressContents.map((addressContent, addressContentIndex) => {
                                                return (
                                                    <div className="col-6" key={addressContentIndex}>
                                                        <div className="address-content d-flex gap-4 align-items-center">
                                                            <span className="address-content__text font-18">{addressContent.text}</span>
                                                            <h6 className="address-content__title font-15 mb-0">{addressContent.title}</h6>
                                                        </div>
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>
                                    <div className="address-map">
                                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1150112.1628856962!2d44.64619029447154!3d23.086651461779507!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43348a67e24b%3A0xff45e502e1ceb7e2!2sBurj%20Khalifa!5e0!3m2!1sen!2sbd!4v1707037970965!5m2!1sen!2sbd" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                                    </div>
                                </div>
                            </div> 
                            <div className="property-details-item">
                                <h6 className="property-details-item__title">House</h6>
                                <div className="property-details-item__content">
                                    <div className="house-content position-relative">
                                        <img src={houseThumb} alt="House Thumb"/>
                                        <Link to="https://www.youtube.com/watch?v=pPl3ZZdTP3g" className="popup-video-link video-popup__button style-two">
                                            <i className="fas fa-play text-gradient"></i>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <CommonSidebar renderSearch={false} renderProperties={true} renderTags={false}/>
                    </div>
                </div>
            </div>
        </section>
        {/* ============================ Property Details Section End =============== */}
        </>
    );
};

export default PropertyDetailsSection;