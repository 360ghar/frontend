import React from 'react';
import SectionHeading from '../common/SectionHeading';
import PropertyItem from './items/PropertyItem';
import { properties } from '../data/HomeOneData/HomeOneData';
import Button from '../common/Button';

const Property = () => {
    return (
        <>
            {/* ============================ property Start ==================== */}
            <section className="property padding-y-120">
                <div className="container container-two">

                    <SectionHeading 
                        headingClass="style-left style-dark flx-between align-items-end gap-3"  
                        subtitle="Latest property"
                        subtitleClass="" 
                        title="Prestige Property Management property for you" 
                        renderDesc={false}
                        desc=""
                        renderButton={true}
                        buttonLink="/property"
                        buttonClass="btn-main"
                        buttonText="View More"
                    />

                    <div className="row gy-4 property-item-wrapper">
                        {
                            properties.slice(0, 6).map((property, index) => {
                                return (
                                    <div className="col-lg-4 col-sm-6" key={index}>
                                        <PropertyItem 
                                            itemClass=""
                                            btnClass=""
                                            property={property}
                                            badgeText="Sales"
                                            badgeClass="property-item__badge"
                                            iconsClass=""
                                            btnRenderBottom={false}
                                            btnRenderRight={true}
                                        />
                                    </div> 
                                )
                            })
                        }
                    </div>

                    <div className="text-center property__btn">
                        <Button 
                            btnLink="/property" 
                            btnClass="btn-main" 
                            btnText="Sell All Listing " 
                            spanClass="icon-right" 
                            iconClass="fas fa-arrow-right" 
                        />
                    </div>
                </div>
            </section>
            {/* ============================ property End ==================== */}   
        </>
    );
};

export default Property;