import React from 'react';
import Pagination from '../common/Pagination';
import { propertyTables } from '../data/OthersPageData/OthersPageData';
import { Link } from 'react-router-dom';

const AccountMyPropertyTab = () => {
    return (
        <>
            <div className="overflow-auto">
                <div className="card common-card min-w-maxContent">
                    <div className="card-body">
                        <table className="table style-two">
                            <thead>
                                <tr>
                                <th>My Properties</th>
                                <th>Date Added</th>
                                <th>Actions</th>
                                <th>Delete</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    propertyTables.map((propertyTable, propertyTableIndex) => {
                                        return (
                                            <tr key={propertyTableIndex}>
                                                <td>
                                                    <div className="d-flex align-items-center gap-3">
                                                        <div className="cart-item__thumb">
                                                            <img src={propertyTable.thumb} alt=""/>
                                                        </div>
                                                        <div className="cart-item__content">
                                                            <h6 className="cart-item__title fw-500 font-18"> <Link to="/property" className="link">3 Rooms Manhattan</Link></h6>
                                                        <p className="property-item__location d-flex gap-2 font-14"> 
                                                            <span className="icon text-gradient"> {propertyTable.locationIcon}</span> 
                                                            {propertyTable.location}
                                                         </p>
                                                            <span className="cart-item__price">Price: <span className="fw-500 text-heading">{propertyTable.price}</span></span>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td> <span className="date">{new Date().toLocaleDateString()}</span> </td>
                                                <td>
                                                    <button type="button" className="rounded-btn edit-btn  text-info bg-info m-auto bg-opacity-10 flex-shrink-0">
                                                        {propertyTable.editIcon}
                                                    </button>
                                                </td>
                                                <td>
                                                    <button type="button" className="rounded-btn delete-btn  text-danger bg-danger bg-opacity-10 flex-shrink-0">
                                                        {propertyTable.deleteIcon}
                                                    </button>
                                                </td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <Pagination/>
        </>
    );
};

export default AccountMyPropertyTab;