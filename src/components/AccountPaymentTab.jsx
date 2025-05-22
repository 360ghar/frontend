import React, { useState } from 'react';
import CheckoutForm from '../common/CheckoutForm';
import CheckoutPaymentCard from '../common/CheckoutPaymentCard';
import CardTotalCard from '../common/CardTotalCard';
import { cartItems } from '../data/OthersPageData/OthersPageData';

const AccountPaymentTab = () => {

    const [quantities, setQuantities] = useState(cartItems.map(() => 1));
    
    return (
        <>
           <div className="row gy-4">
                <div className="col-lg-12">
                    <CheckoutForm/>
                </div>
                <div className="col-lg-6">
                    <CheckoutPaymentCard/>
                </div>
                <div className="col-lg-6">
                    <CardTotalCard btnText="Pay Now" quantities={quantities}/>
                </div>
            </div> 
        </>
    );
};

export default AccountPaymentTab;