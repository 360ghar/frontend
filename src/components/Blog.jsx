import React from 'react';
import SectionHeading from '../common/SectionHeading';
import { blogs } from '../data/HomeOneData/HomeOneData';
import BlogItem from './items/BlogItem';

const Blog = () => {
    return (
        <>
            {/* ==================== Blog Start Here ==================== */}
            <section className="blog padding-t-60 padding-b-120">
                <div className="container container-two">

                    <SectionHeading 
                        headingClass="section-heading style-left style-flex flx-between align-items-end gap-3"  
                        subtitle="Latest Product"
                        subtitleClass="" 
                        title="Prestige Property Management  property for you" 
                        renderDesc={false}
                        desc=""
                        renderButton={true}
                        buttonClass="btn-outline-main"
                        buttonText="View Moreee"
                        buttonLink='/blog'
                    />

                    <div className="row gy-4">
                        {
                            blogs.slice(0, 3).map((blog, index) => {
                                return (
                                    <div className="col-lg-4 col-sm-6" key={index}>
                                        <BlogItem blog={blog}/>
                                    </div>
                                )
                            })
                        }
                    </div>
                    
                </div>
            </section>
            {/* ==================== Blog End Here ==================== */}   
        </>
    );
};

export default Blog;