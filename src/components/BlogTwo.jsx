import React from 'react';
import BlogItemTwo from './items/BlogItemTwo';
import { blogs } from '../data/HomeOneData/HomeOneData';
import SectionHeading from '../common/SectionHeading';

const BlogTwo = () => {
    return (
        <>
            {/* =========================== Blog Two Section Start =========================== */}
            <section className="blog padding-y-120">
                <div className="container container-two">

                    <SectionHeading
                        headingClass="section-heading style-left style-flex flx-between align-items-end gap-3"  
                        subtitle="Latest blog and news"
                        subtitleClass="" 
                        title="Investing in estate made lot easy" 
                        renderDesc={false}
                        desc=""
                        renderButton={true}
                        buttonClass="btn btn-outline-main btn-outline-main-dark"
                        buttonText="Explore More"
                        buttonLink='/blog'
                    />

                    <div className="row gy-4">
                        {
                            blogs.slice(0,3).map((blog, index) => {
                                return (
                                    <div className="col-lg-4 col-sm-6" key={index}>
                                        <BlogItemTwo blog={blog}/>
                                    </div>
                                )
                            })
                        }

                    </div>
                </div>
            </section>
            {/* =========================== Blog Two Section End =========================== */}
        </>
    );
};

export default BlogTwo;