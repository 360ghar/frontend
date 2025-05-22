import React from 'react';
import SidebarCategoryList from './SidebarCategoryList';
import SidebarRecentPost from './SidebarRecentPost';
import SidebarProperty from './SidebarProperty';
import { sidebarTags } from '../data/OthersPageData/OthersPageData';
import { Link } from 'react-router-dom';

const CommonSidebar = ({ renderProperties, renderSearch, renderTags }) => {
    return (
        <>
            <div className="common-sidebar-wrapper">
                {
                    renderSearch && (
                        <div className="common-sidebar p-0">
                            <form action="#" autoComplete="off">
                                <div className="search-box style-two w-100">
                                    <input type="text" className="common-input" placeholder="Type here..."/>
                                    <button type="submit" className="icon"><i className="fas fa-search"></i></button>
                                </div>
                            </form>
                        </div>
                    )
                }

                <div className="common-sidebar">
                    <h6 className="common-sidebar__title"> Category </h6>
                    <SidebarCategoryList/>
                </div>

                <div className="common-sidebar">
                    <h6 className="common-sidebar__title"> Recent Post </h6>
                    <SidebarRecentPost/>
                </div>

                {
                    renderProperties && (
                        <div className="common-sidebar">
                            <h6 className="common-sidebar__title"> Properties </h6>
                            <SidebarProperty/>
                        </div>  
                    )
                }

                {
                    renderTags && (
                        <div className="common-sidebar">
                            <h6 className="common-sidebar__title"> Tags </h6>
                            <ul className="tag-list">
                                {
                                    sidebarTags.map((sidebarTag, sidebarTagIndex) => {
                                        return (
                                            <li className="tag-list__item" key={sidebarTagIndex}>
                                                <Link to={sidebarTag.link} className="tag-list__link">{sidebarTag.text}</Link>
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                    )
                }
            </div>   
        </>
    );
};

export default CommonSidebar;