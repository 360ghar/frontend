import React, { createContext, useState } from 'react';

export const PropertyFilterContext = createContext(); 

const PropertyFilterProvider = ({ children }) => {

    // Filter By Status Code Here
    const [dataStatus, setDataStatus] = useState("All");

    const handleDataStatusChange = (event) => {
        setDataStatus(event.target.value)
    }

    // Filter By Type Code Here
    const [dataType, setDataType] = useState("All");

    const handleDataTypeChange = (event) => {
        setDataType(event.target.value)
    }
    
    // Filter By Type Code Here
    const [dataLocation, setDataLocation] = useState("All");

    const handleDataLocationChange = (event) => {
        setDataLocation(event.target.value)
    }
    
    // Filter By Sorting Code Here
    const [selectedSort, setSelectedSort] = useState("All");

    const handleSortChange = (event) => {
        setSelectedSort(event.target.value);
    }
    
    return (
        <PropertyFilterContext.Provider value={{ 
            selectedSort, setSelectedSort, handleSortChange,
            dataStatus, setDataStatus, handleDataStatusChange, 
            dataType, setDataType, handleDataTypeChange,
            dataLocation, setDataLocation, handleDataLocationChange,
        }}>
            { children }
        </PropertyFilterContext.Provider>
    );
};

export default PropertyFilterProvider;