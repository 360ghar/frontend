import React from 'react';
import Pagination from '../common/Pagination';
import { blogs } from '../data/HomeOneData/HomeOneData';
import CommonSidebar from '../common/CommonSidebar';
import BlogClassicItem from './items/BlogClassicItem';

const BlogClassicSection = () => {
    return (
        <>
            <div className="blog-classic padding-y-120">
                <div className="container container-two">
                    <div className="row gy-4">
                        <div className="col-lg-8">
                            {
                                blogs.map((blogItem, blogItemIndex) => {
                                    return (
                                        <BlogClassicItem blogItem={blogItem} key={blogItemIndex}/>
                                    )
                                })
                            }
                            <Pagination/>
                        </div>
                        <div className="col-lg-4">
                            <CommonSidebar renderSearch={true} renderProperties={false} renderTags={true}/>
                        </div>  
                    </div>
                </div>
            </div>   
        </>
    );
};

export default BlogClassicSection;