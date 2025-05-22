import React, { useEffect, useState } from 'react';
import { starRatings } from '../data/CommonData/CommonData';

const StarRating = () => {

    const [unabledIndex, setUnabledIndex] = useState(2); 

    useEffect(() => {
        const randomIndex = Math.floor(Math.random() * 5) + 1;
        setUnabledIndex(randomIndex);
        // console.log(Math.random());
    }, []);

    return (
        <ul className="star-rating flx-align justify-content-end">
            {
                starRatings.map((star, index) => {
                    return (
                        <li className={`star-rating__item ${index >= unabledIndex ? "unabled": "" } `} key={index}>
                            {star.icon}
                        </li>
                    )
                })
            }

        </ul>   
    );
};

export default StarRating;

    