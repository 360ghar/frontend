import React from 'react';

const SearchBox = () => {
    return (
        <>
            <div className="search-box mt-5">
                <form action="#">
                    <input type="text" className="common-input common-input--light" placeholder="Search..."/>
                    <button type="submit" className="icon"> <i className="fas fa-search"></i> </button>
                </form>
            </div>   
        </>
    );
};

export default SearchBox;