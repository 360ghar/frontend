import React, { createContext, useState } from 'react';

export const BlogDataContext = createContext(); 

const BlogDataProvider = ({ children }) => {
   
    const [blogData, setBlogData] = useState(null);

    // Get Current Month
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"];
    const currentMonth = new Date().getMonth();
    const currentMonthName = monthNames[currentMonth];
    
    
    return (
        <BlogDataContext.Provider value={{ blogData, setBlogData, currentMonthName}}>
            { children }
        </BlogDataContext.Provider>
    );
};

export default BlogDataProvider;