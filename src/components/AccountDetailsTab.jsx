import React from 'react';

const AccountDetailsTab = () => {
    return (
        <>
            <p className="account-alert">The accompanying tends to be utilized on the checkout page as a matter of course.</p>
            <form action="#">
                <div className="card common-card mb-4">
                    <div className="card-body">
                        <h6 className="loginRegister__title text-poppins">Personal Information</h6>

                        <div className="row gy-lg-4 gy-3">
                            <div className="col-sm-6 col-xs-6">
                                <label htmlFor="FirstNamee" className="form-label">First Name</label>
                                <input type="text" className="common-input" value="Rosalina" placeholder="First Name" id="FirstNamee"/>
                            </div>
                            <div className="col-sm-6 col-xs-6">
                                <label htmlFor="lastName" className="form-label">Last Name</label>
                                <input type="text" className="common-input" value="D. William" placeholder="Last Name" id="lastName"/>
                            </div>
                            <div className="col-sm-6 col-xs-6">
                                <label htmlFor="displayName" className="form-label">Display Name</label>
                                <input type="text" className="common-input" value="Rosalina D. William" placeholder="Display Name" id="displayName"/>
                            </div>
                            <div className="col-sm-6 col-xs-6">
                                <label htmlFor="DisplayEmail" className="form-label">Display Email</label>
                                <input type="email" className="common-input"  placeholder="Display Email" value="example@gmail.com" id="DisplayEmail"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card common-card">
                    <div className="card-body">
                        <h6 className="loginRegister__title text-poppins">Password Change </h6>

                        <div className="row gy-lg-4 gy-3">
                            <div className="col-12">
                                <label htmlFor="current-password" className="form-label">Current Password</label>
                                <div className="position-relative">
                                    <input type="password" className="common-input" placeholder="Password" id="current-password"/>
                                    <span className="password-show-hide fas fa-eye toggle-password la-eye-slash" id="#current-password"></span>
                                </div>
                            </div>
                            <div className="col-12">
                                <label htmlFor="new-password" className="form-label">New Password</label>
                                <div className="position-relative">
                                    <input type="password" className="common-input" placeholder="Password" id="new-password"/>
                                    <span className="password-show-hide fas fa-eye toggle-password la-eye-slash" id="#new-password"></span>
                                </div>
                            </div>
                            <div className="col-12">
                                <label htmlFor="confirm-password" className="form-label">Confirm Password</label>
                                <div className="position-relative">
                                    <input type="password" className="common-input" placeholder="Password" id="confirm-password"/>
                                    <span className="password-show-hide fas fa-eye toggle-password la-eye-slash" id="#confirm-password"></span>
                                </div>
                            </div>
                            <div className="col-12">
                                <button type="submit" className="btn btn-main w-100">Save Changes</button>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </>
    );
};

export default AccountDetailsTab;