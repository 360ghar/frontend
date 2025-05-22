import React from 'react';

import ListingBasicInformation from '../common/ListingBasicInformation';
import ListingPropertyGallery from '../common/ListingPropertyGallery';
import ListingPropertyInformation from './ListingPropertyInformation';
import ListingContactDetails from '../common/ListingContactDetails';

const AddListingForm = () => {
    return (
        <>
            <form action="#">
                <ListingBasicInformation/>
                <ListingPropertyGallery/>
                <ListingPropertyInformation/>
                <ListingContactDetails/>
                <button type="submit" className="btn btn-main w-100">Submit Property</button>
            </form>
        </>
    );
};

export default AddListingForm;