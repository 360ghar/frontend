import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { blogs } from '../data/HomeOneData/HomeOneData';
import { BlogDataContext } from '../contextApi/BlogDataContext';

const SidebarRecentPost = () => {

    return (
        <>
            {
                blogs.slice(0, 3).map((blogItem, blogItemIndex) => {

                    const {title, thumb} = blogItem; 
                    
                    // Title Convert To Slug
                    const convertToSlug = (text) => {
                        return text.toLowerCase().replace(/\s+/g, '-');
                    };
                    const blogURL = `/blog/${encodeURIComponent(convertToSlug(title))}`;

                    const { setBlogData} = useContext(BlogDataContext); 

                    const handleBlogClick = () => {
                        setBlogData({ thumb, meta, title, admin, desc });
                    };
                    
                    return (
                        <div className="latest-blog" key={blogItemIndex}>
                            <div className="latest-blog__thumb">
                                <Link to={blogURL} onClick={()=>handleBlogClick()}> 
                                    <img src={thumb} className="cover-img" alt=""/>
                                </Link>
                            </div>
                            <div className="latest-blog__content">
                                <span className="latest-blog__category font-12 flx-align gap-1">
                                    <span className="icon text-gradient"><i className="fas fa-folder-open"></i></span>
                                Category</span>
                                <h6 className="latest-blog__title">
                                    <Link to={blogURL} onClick={()=>handleBlogClick()}>{title}</Link>
                                </h6>
                            </div>
                        </div>
                    )
                })
            }
        </>
    );
};

export default SidebarRecentPost;