import React from 'react';

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { propertyTwoTabs } from '../data/HomeThreeData/HomeThreeData';
import SectionHeading from '../common/SectionHeading';
import PropertyItem from './items/PropertyItem';
import { properties } from '../data/HomeOneData/HomeOneData';

const PropertyTwo = () => {
    return (
        <>
            <section className="property-two bg-gray-100 padding-t-60 padding-b-120">
            <div className="container container-two">

                <SectionHeading
                    headingClass="style-center"  
                    subtitle="Latest Properties"
                    subtitleClass="bg-white" 
                    title="Real estate Investing in made it lot easy" 
                    renderDesc={false}
                    desc="Real estate is a lucrative industry that involves the buying selling and renting of properties. It encompasses residential commercial and industrial properties Real estate agents play a crucial role in facilitating real estate"
                    renderButton={false}
                    buttonClass="btn-main"
                    buttonText="View More"
                />

                <Tabs>
                    <TabList className={'common-tab nav nav-pills justify-content-center mb-40'}>
                        {
                            propertyTwoTabs.map((propertyTwoTab, propertyTwoTabIndex) => {
                                return (
                                    <Tab className={'nav-link bg-transparent'} key={propertyTwoTabIndex}>
                                        {propertyTwoTab.text}
                                    </Tab>
                                )
                            })
                        }
                    </TabList>

                    <TabPanel>
                        <div className="row gy-4 property-item-wrapper">
                            {
                                properties.slice(0, 6).map((property, index) => {
                                    return (
                                        <div className="col-lg-4 col-sm-6" key={index}>
                                            <PropertyItem 
                                                itemClass="property-item style-two style-shaped"
                                                btnClass="text-gradient fw-semibold"
                                                property={property}
                                                badgeText="Sales"
                                                badgeClass="property-item__badge"
                                                iconsClass="text-gradient"
                                                btnRenderBottom={true}
                                                btnRenderRight={false}
                                            />
                                        </div> 
                                    )
                                })
                            }
                        </div>
                    </TabPanel>

                    <TabPanel>
                        <div className="row gy-4 property-item-wrapper">
                            {
                                properties.slice(7, 13).map((property, index) => {
                                    return (
                                        <div className="col-lg-4 col-sm-6" key={index}>
                                            <PropertyItem 
                                                itemClass="property-item style-two style-shaped"
                                                btnClass="text-gradient fw-semibold"
                                                property={property}
                                                badgeText="Sales"
                                                badgeClass="property-item__badge"
                                                iconsClass="text-gradient"
                                                btnRenderBottom={true}
                                                btnRenderRight={false}
                                            />
                                        </div> 
                                    )
                                })
                            }
                        </div>
                    </TabPanel>
                    
                    <TabPanel>
                        <div className="row gy-4 property-item-wrapper">
                            {
                                properties.slice(0, 6).map((property, index) => {
                                    return (
                                        <div className="col-lg-4 col-sm-6" key={index}>
                                            <PropertyItem 
                                                itemClass="property-item style-two style-shaped"
                                                btnClass="text-gradient fw-semibold"
                                                property={property}
                                                badgeText="Sales"
                                                badgeClass="property-item__badge"
                                                iconsClass="text-gradient"
                                                btnRenderBottom={true}
                                                btnRenderRight={false}
                                            />
                                        </div> 
                                    )
                                })
                            }
                        </div>
                    </TabPanel>

                    <TabPanel>
                        <div className="row gy-4 property-item-wrapper">
                            {
                                properties.slice(7, 13).map((property, index) => {
                                    return (
                                        <div className="col-lg-4 col-sm-6" key={index}>
                                            <PropertyItem 
                                                itemClass="property-item style-two style-shaped"
                                                btnClass="text-gradient fw-semibold"
                                                property={property}
                                                badgeText="Sales"
                                                badgeClass="property-item__badge"
                                                iconsClass="text-gradient"
                                                btnRenderBottom={true}
                                                btnRenderRight={false}
                                            />
                                        </div> 
                                    )
                                })
                            }
                        </div>
                    </TabPanel>

                    <TabPanel>
                        <div className="row gy-4 property-item-wrapper">
                            {
                                properties.slice(0, 6).map((property, index) => {
                                    return (
                                        <div className="col-lg-4 col-sm-6" key={index}>
                                            <PropertyItem 
                                                itemClass="property-item style-two style-shaped"
                                                btnClass="text-gradient fw-semibold"
                                                property={property}
                                                badgeText="Sales"
                                                badgeClass="property-item__badge"
                                                iconsClass="text-gradient"
                                                btnRenderBottom={true}
                                                btnRenderRight={false}
                                            />
                                        </div> 
                                    )
                                })
                            }
                        </div>
                    </TabPanel>
                </Tabs>   
            </div>
        </section>
        </>
    );
};

export default PropertyTwo;