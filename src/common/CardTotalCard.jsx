import React from 'react';
import { cartItems } from '../data/OthersPageData/OthersPageData';
import { useNavigate } from 'react-router-dom';

const CardTotalCard = ({quantities, btnText }) => {

    let totalAmount = 0;

    cartItems.forEach((cartItem, cartItemIndex) => {
        // Calculate the subtotal for the current item
        const subtotal = quantities[cartItemIndex] * parseFloat(cartItem.price);
        
        // Add the subtotal to the totalAmount
        totalAmount += subtotal;
    });
    
    // Format the totalAmount to two decimal places
    totalAmount = totalAmount.toFixed(2);

    const navigate = useNavigate(); 
    
    const handleCheckout = () => {
        navigate('/checkout')
    }

    return (
        <>
             <div className="card common-card">
                <div className="card-body">
                    <h6 className="title mb-4">Cart Totals</h6>
                    <ul className="billing-list">
                        
                        {
                            cartItems.map((cartItem, cartItemIndex) => {
                                return (
                                    <li className={`billing-list__item flx-between`} key={cartItemIndex}>
                                        <span className={`text text-poppins font-15`}>{cartItem.title}</span>
                                        <span className={`amount fw-semibold text-heading text-poppins`}>
                                            ${(quantities[cartItemIndex] * parseFloat(cartItem.price)).toFixed(2)}
                                        </span>
                                    </li>
                                )
                            })
                        }

                        <li className="billing-list__item flx-between">
                            <span className="text text-poppins fw-semibold text-heading">Order Total</span>
                            <span className="amount fw-semibold text-heading text-poppins"> { totalAmount} </span>
                        </li>
                    </ul>
                    <button type="submit" className="btn btn-main w-100 mt-4" onClick={handleCheckout}>
                        {btnText} 
                    </button>
                </div>
            </div>      
        </>
    );
};

export default CardTotalCard;