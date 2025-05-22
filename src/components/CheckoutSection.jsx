import React from 'react';
import CheckoutSidebar from '../common/CheckoutSidebar';
import CheckoutForm from '../common/CheckoutForm';

const CheckoutSection = () => {
    return (
        <section className="checkout padding-y-120">
            <div className="container container-two">
                <form action="#">
                    <div className="row gy-4">
                        <div className="col-lg-8 pe-lg-5">
                            <CheckoutForm/>
                        </div>
                        <div className="col-lg-4">
                            <CheckoutSidebar/>
                        </div>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default CheckoutSection;