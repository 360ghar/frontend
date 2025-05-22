import React, { useContext } from 'react';
import ListGridButtons from '../common/ListGridButtons';
import { PropertyFilterContext } from '../contextApi/PropertyFilterContext';

const PropertyFilterBottom = () => {
    
    const { selectedSort, handleSortChange } = useContext(PropertyFilterContext); 

    return (
        <>
         <div className="property-filter__bottom flx-between gap-2">
            <span className="property-filter__text font-18 text-gray-800">Showing 1-10 of 23</span>
            <div className="d-flex align-items-center gap-2">
                
                {/* List Grid Layout buttons */}
                <ListGridButtons/>
                
                <div className="d-flex align-items-center gap-2">
                    <span className="property-filter__text font-18 text-gray-800"> Sort by: </span>
                    <div className="select-has-icon data-sort">
                        <select className="form-select common-input pill text-gray-800 px-3 py-2"  onChange={handleSortChange} value={selectedSort}>
                            <option value="All">All</option>
                            <option value="Newest">Newest</option>
                            <option value="Best Seller">Best Seller</option>
                            <option value="Best Match">Best Match</option>
                            <option value="High Price">High Price</option>
                            <option value="Medium Price">Medium Price</option>
                            <option value="Low Price">Low Price</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>   
        </>
    );
};

export default PropertyFilterBottom;
