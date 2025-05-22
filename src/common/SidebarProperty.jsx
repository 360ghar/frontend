import React from 'react';
import { sidebarProperties } from '../data/OthersPageData/OthersPageData';
import { Link } from 'react-router-dom';

const SidebarProperty = () => {
    return (
        <>
            <div className="row gy-4">
                {
                    sidebarProperties.map((sidebarProperty, sidebarPropertyIndex) => {
                        return (
                            <div className="col-lg-6 col-sm-4 col-6" key={sidebarPropertyIndex}>
                                <Link to={sidebarProperty.link} className="properties-item d-block w-100">
                                    <img src={sidebarProperty.image} alt="Property Image" className="cover-img"/>
                                    <span className="properties-item__text">{sidebarProperty.text}</span>
                                </Link>
                            </div>
                        )
                    })
                }
            </div>   
        </>
    );
};

export default SidebarProperty;