import React, { useContext, useState } from 'react';
import { bedBaths, priceRanges, propertyTypes, reasons, searchAmenities } from '../data/OthersPageData/OthersPageData';
import CustomRangeSlider from './CustomRangeSlider';
import { PropertyFilterContext } from '../contextApi/PropertyFilterContext';

const SearchSidebar = () => {

    const{handleDataStatusChange, handleDataTypeChange, handleSortChange} = useContext(PropertyFilterContext); 
    
    return (
        <>
        {/* ============================== Search Sidebar Start ========================    */}
        <div className="search-sidebar">
            <form action="#" method="post" autoComplete="off">
                
                <div className="search-sidebar__item">
                    <h6 className="search-sidebar__title mb-4">Property Type</h6>
                    {
                        propertyTypes.map((propertyType, propertyTypeIndex) => {
                            return (
                                <div className="common-check" key={propertyTypeIndex}>
                                    <input className="form-check-input" type="checkbox" id={propertyType.text} value={propertyType.value}  onChange={handleDataTypeChange}/>
                                    <label className="form-check-label" htmlFor={propertyType.text}>
                                        {propertyType.text}
                                    </label>
                                </div>
                            )
                        })
                    }
                </div>
                
                <div className="search-sidebar__item">
                    <h6 className="search-sidebar__title mb-4">Status</h6>
                    {
                        reasons.map((reason, reasonIndex) => {
                            return (
                                <div className="common-radio" key={reasonIndex}>
                                    <input className="form-check-input" type="radio" name="room" id={reason.text} value={reason.value} onChange={handleDataStatusChange}/>
                                    <label className="form-check-label" htmlFor={reason.text}>
                                        {reason.text}
                                    </label>
                                </div>
                            )
                        })
                    }
                </div>
                
                <div className="search-sidebar__item">
                    <h6 className="search-sidebar__title mb-4">Price Range</h6>
                    {
                        priceRanges.map((priceRange, priceRangeIndex) => {
                            return (
                                <div className="common-check" key={priceRangeIndex}>
                                    <input className="form-check-input" type="checkbox" id={priceRange.text} value={priceRange.value} onChange={handleSortChange}/>
                                    <label className="form-check-label" htmlFor={priceRange.text}>
                                        {priceRange.text}
                                    </label>
                                </div>
                            )
                        })
                    }
                </div>
                <div className="search-sidebar__item">
                    <h6 className="search-sidebar__title mb-4">Amenities</h6>
                    {
                        searchAmenities.map((searchAmenity, searchAmenityIndex) => {
                            return (
                                <div className="common-check" key={searchAmenityIndex}>
                                    <input className="form-check-input" type="checkbox" id={searchAmenity.text}/>
                                    <label className="form-check-label" htmlFor={searchAmenity.text}>
                                        {searchAmenity.text}
                                    </label>
                                </div>
                            )
                        })
                    }
                </div>

                <div className="search-sidebar__item position-relative">
                    <h6 className="search-sidebar__title mb-4">Filter By Price</h6>
                    <label className="custom--range__text mb-2 text-text-capitalize">Your range:</label>

                    <CustomRangeSlider
                        min={0}
                        max={1000}
                        onChange={({ min, max }) => {}}
                    />

                </div>

                <div className="search-sidebar__item">
                    <h6 className="search-sidebar__title mb-4">Bed/Bath</h6>
                    {
                        bedBaths.map((bedBath, bedBathIndex) => {
                            return (
                                <div className="common-radio" key={bedBathIndex}>
                                    <input className="form-check-input" type="radio" name="room" id={bedBath.text}/>
                                    <label className="form-check-label" htmlFor={bedBath.text}>
                                        {bedBath.text}
                                    </label>
                                </div>
                            )
                        })
                    }
                </div>
            </form>
        </div>
        {/* ============================== Search Sidebar End ========================    */}
        </>
    );
};

export default SearchSidebar;