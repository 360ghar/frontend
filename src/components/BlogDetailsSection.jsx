import React, { useContext } from 'react';
import CommonSidebar from '../common/CommonSidebar';

import { Link } from 'react-router-dom';
import CommentForm from '../common/CommentForm';
import Comment from '../common/Comment';
import BlogKeyword from '../common/BlogKeyword';
import BlogShowcase from '../common/BlogShowcase';
import BlogTesti from '../common/BlogTesti';
import BlogNextPrev from '../common/BlogNextPrev';
import { BlogDataContext } from '../contextApi/BlogDataContext';


const BlogDetailsSection = () => {

    // Blog Data Context API
    const { blogData } = useContext(BlogDataContext); 

    // get Current Formatted Date
    const currentDate = new Date();
    const options = { day: '2-digit', month: 'long', year: 'numeric' };
    const formattedDate = currentDate.toLocaleDateString('en-US', options);


    return (
        <>
            <div className="blog-details-section padding-y-120">
                <div className="container container-two">
                    <div className="row gy-4">
                        <div className="col-lg-8">
                            <div className="blog-details">
                                <div className="blog-details__thumb">
                                    <img src={blogData.thumb} alt="" className='cover-img'/>
                                    <span className="blog-details__date">{formattedDate}</span>
                                </div>
                                <div className="blog-details__content">
                                    <ul className="blog-infos">
                                        <li className="blog-infos__item">
                                            {blogData.admin}
                                        </li>
                                        {
                                            blogData.meta.map((blogMetaItem, blogMetaItemIndex) => {
                                                return (
                                                    <li className="blog-infos__item" key={blogMetaItemIndex}>
                                                        <Link to="#" className="blog-infos__link"> 
                                                            <span className="icon">{blogMetaItem.icon}</span>
                                                            {blogMetaItem.text}
                                                        </Link>
                                                    </li>
                                                )
                                            })
                                        }
                                    </ul>
                                    <h5 className="blog-details__title">{blogData.title}</h5>
                                    <p className="blog-details__desc">{blogData.desc.slice(0, 162)}</p>
                                    <p className="blog-details__desc">{blogData.desc.slice(163, 400)}</p>
                                </div>

                                {/* Blog Testi Start */}
                                <BlogTesti/>
                                {/* Blog Testi End */}
                                
                                {/* Blog ShowCase Start */}
                                <BlogShowcase/>
                                {/* Blog ShowCase End */}

                                {/* Blog Next Prev Start */}
                                <BlogNextPrev/>
                                {/* Blog Next Prev End */}

                                {/* Blog Keyword Start */}
                                <BlogKeyword/>
                                {/* Blog Keyword End */}

                                {/* Comment Start */}
                                <Comment/>
                                {/* Comment End */}

                                {/* Form Start */}
                                <CommentForm/>
                                
                            </div>
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

export default BlogDetailsSection;