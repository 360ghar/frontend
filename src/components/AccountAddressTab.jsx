import React from 'react';
import { accountAddress } from '../data/OthersPageData/OthersPageData';

const AccountAddressTab = () => {
    return (
        <>
            <p className="account-alert">The accompanying tends to will be utilized on the checkout page naturally.</p>
            <div className="row gy-4">
                {
                    accountAddress.map((addressItem, addressItemIndex) => {
                        return (
                            <div className="col-sm-6" key={addressItemIndex}>
                                <div className="card common-card">
                                    <div className="card-body">
                                        <h6 className="text-poppins mb-2">{addressItem.title}</h6>
                                        <span className="fw-semibold text-poppins font-14 mb-4">{addressItem.name}</span>
                                        {
                                            addressItem.accountAddressInfos && addressItem.accountAddressInfos.map((addressItem, addressItemIndex) => {
                                                return (
                                                    <div className="contact-info d-flex gap-3 align-items-center mb-2" key={addressItemIndex}>
                                                        <div className="contact-info__content">
                                                            <span className="contact-info__address">
                                                                <strong className="fw-500">{addressItem.title}</strong> 
                                                                {addressItem.text}
                                                            </span>
                                                        </div>
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </>
    );
};

export default AccountAddressTab;