import React from 'react';

const SubscribeBox = () => {
    return (
        <>
            <form action="#" className="mt-4 subscribe-box">
                <div className="input-group">
                    <input type="text" className="form-control common-input common-input--md text-white" placeholder="Your mail address"/>
                    <button type="submit" className="px-4 input-group-text bg--gradient border-0 text-white"><i className="fas fa-paper-plane"></i></button>
                </div>
            </form>   
        </>
    );
};

export default SubscribeBox;