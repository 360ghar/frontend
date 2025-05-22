import React, { useContext } from 'react';
import { PropertyFilterContext } from '../contextApi/PropertyFilterContext';

const PropertyFilterForm = () => {

    const {dataStatus, handleDataStatusChange, dataType, handleDataTypeChange, dataLocation, handleDataLocationChange} = useContext(PropertyFilterContext); 

    return (
        <>
            <form action="#">
                <div className="row gy-4">

                    <div className="col-lg-2 col-md-3 col-sm-6 col-xs-6">
                        <div className="select-has-icon">
                            <select className="form-select common-input common-input--withLeftIcon pill text-gray-800" onChange={handleDataStatusChange} value={dataStatus}>
                                <option value="Status" disabled defaultValue>Status</option>
                                <option value="All">All</option>
                                <option value="Sell">Sell</option>
                                <option value="Buy">Buy</option>
                                <option value="Rent">Rent</option>
                            </select>
                            <span className="input-icon input-icon--left text-gradient">
                                <img src="assets/images/icons/status.svg" alt=""/>
                            </span>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-3 col-sm-6 col-xs-6">
                        <div className="select-has-icon">
                            <select className="form-select common-input common-input--withLeftIcon pill text-gray-800" onChange={handleDataTypeChange} value={dataType}>
                                <option value="Type" disabled defaultValue>Type</option>
                                <option value="All">All</option>
                                <option value="Houses">Houses</option>
                                <option value="Apartments">Apartments</option>
                                <option value="Office">Office</option>
                                <option value="Villa">Villa</option>
                            </select>
                            <span className="input-icon input-icon--left text-gradient">
                                <img src="assets/images/icons/type.svg" alt=""/>
                            </span>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-3 col-sm-6 col-xs-6">
                        <div className="select-has-icon">
                            <select className="form-select common-input common-input--withLeftIcon pill text-gray-800" onChange={handleDataLocationChange} value={dataLocation}>
                                <option value="Location" disabled defaultValue>Location</option>
                                <option value="All">All Areas</option>
                                <option value="DLF Cyber City" data-location="DLF Cyber City">DLF Cyber City</option>
                                <option value="Sushant Lok" data-location="Sushant Lok">Sushant Lok</option>
                                <option value="Golf Course Road" data-location="Golf Course Road">Golf Course Road</option>
                                <option value="Sector 47" data-location="Sector 47">Sector 47</option>
                                <option value="Sohna Road" data-location="Sohna Road">Sohna Road</option>
                                <option value="Palam Vihar" data-location="Palam Vihar">Palam Vihar</option>
                            </select>
                            <span className="input-icon input-icon--left text-gradient">
                                <img src="assets/images/icons/location.svg" alt=""/>
                            </span>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-6 col-xs-6">
                        <div className="position-relative">
                            <input type="text" className="common-input common-input--withLeftIcon pill text-gray-800" placeholder="Advanced Filter"/>
                            <span className="input-icon input-icon--left text-gradient">
                                <img src="assets/images/icons/filter.svg" alt=""/>
                            </span>
                        </div>
                    </div>
                </div>
            </form>   
        </>
    );
};

export default PropertyFilterForm;