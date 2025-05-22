import React from 'react';
import { categoryLists } from '../data/OthersPageData/OthersPageData';
import { Link } from 'react-router-dom';

const SidebarCategoryList = () => {
    return (
        <>
            <ul className="category-list">
                {
                    categoryLists.map((categoryList, categoryListIndex) => {
                        return (
                            <li className="category-list__item" key={categoryListIndex}>
                                <Link to={categoryList.link} className="category-list__link flx-between">
                                    <span className="text">{categoryList.text}</span>
                                    <span className="number"> {categoryList.number} </span>
                                </Link>
                            </li>
                        )
                    })
                }
            </ul>   
        </>
    );
};

export default SidebarCategoryList;