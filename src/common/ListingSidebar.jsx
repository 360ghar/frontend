import React from 'react';
import { addListings } from '../data/OthersPageData/OthersPageData';
import { Link } from 'react-router-dom';

const ListingSidebar = () => {
    return (
        <>
            <div className="listing-sidebar">
                <ul id="list-scroll" className="sidebar-list d-flex flex-column gap-2">
                    {
                        addListings.map((addListing, addListingIndex) => {
                            return (
                                <li className="sidebar-list__item" key={addListingIndex}>
                                    <Link to={addListing.link} className="sidebar-list__link">
                                        {addListing.text}
                                    </Link>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>   
        </>
    );
};

export default ListingSidebar;