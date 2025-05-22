import React from 'react';

const AccountChangePasswordTab = () => {
    return (
        <>
           <form action="#">
                <div className="card common-card">
                    <div className="card-body">
                        <h6 className="loginRegister__title text-poppins">Password Change </h6>

                        <div className="row gy-lg-4 gy-3">
                            <div className="col-12">
                                <label htmlFor="current-passwordd" className="form-label">Current Password</label>
                                <div className="position-relative">
                                    <input type="password" className="common-input" placeholder="Password" id="current-passwordd"/>
                                    <span className="password-show-hide fas fa-eye toggle-password la-eye-slash" id="#current-passwordd"></span>
                                </div>
                            </div>
                            <div className="col-12">
                                <label htmlFor="new-passwordd" className="form-label">New Password</label>
                                <div className="position-relative">
                                    <input type="password" className="common-input" placeholder="Password" id="new-passwordd"/>
                                    <span className="password-show-hide fas fa-eye toggle-password la-eye-slash" id="#new-passwordd"></span>
                                </div>
                            </div>
                            <div className="col-12">
                                <label htmlFor="confirm-passwordd" className="form-label">Confirm Password</label>
                                <div className="position-relative">
                                    <input type="password" className="common-input" placeholder="Password" id="confirm-passwordd"/>
                                    <span className="password-show-hide fas fa-eye toggle-password la-eye-slash" id="#confirm-passwordd"></span>
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

export default AccountChangePasswordTab;