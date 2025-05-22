import React, { useState } from 'react';
import { cartItems } from '../data/OthersPageData/OthersPageData';
import CardTotalCard from './CardTotalCard';
import CheckoutPaymentCard from './CheckoutPaymentCard';

const CheckoutSidebar = () => {

    const [quantities] = useState(cartItems.map(() => 1));

    return (
        <>
            <CheckoutPaymentCard/>
            <CardTotalCard btnText="Pay Now" quantities={quantities}/>
        </>
    );
};

export default CheckoutSidebar;