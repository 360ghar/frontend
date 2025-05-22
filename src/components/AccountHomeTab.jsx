import React from 'react';

const AccountHomeTab = () => {
    return (
        <>
            <p className="account-alert">Hello <strong className="text-heading fw-500 text-poppins">UserName</strong> (not  <strong className="text-heading fw-500 text-poppins">UserName</strong>? Log out )
            </p>
            <p className="account-alert">From your account dashboard you can view your recent orders, manage your shipping and billing addresses, and edit your password and account details.</p>
        </>
    );
};

export default AccountHomeTab;