import React, { useRef } from 'react';

import { ToastContainer, toast } from 'react-toastify';
import emailjs from '@emailjs/browser';

const ContactUsSection = () => {

    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
    //   Please se documentation for more information
  
      emailjs
        .sendForm(
            'service_5opdqb8', // YOUR_SERVICE_ID
            'template_tel2xio', // YOUR_TEMPLATE_ID
            form.current, {
            publicKey: 'TkEXMnREcdrQyndFz', // YOUR_PUBLIC_KEY
        })
        .then(
          () => {
            form.current.reset();
            toast.success("Congratulations! You Have Submitted Successfully.", {
                theme: "colored",
            });
            console.log('SUCCESS!');
          },
          (error) => {
            toast.error("Something went wrong! Your message didn't sent.", {
                theme: "colored",
            });
            console.log('FAILED...', error.text);
          },
        );
    };
    
    return (
        <>
            <ToastContainer/>
            <section className="contact-us-section padding-b-120">
                <div className="container container-two">
                    <div className="contact-form bg-white">  
                        <div className="section-heading">
                            <span className="section-heading__subtitle bg-gray-100"> 
                                <span className="text-gradient fw-semibold">Contact us</span> 
                            </span>
                            <h2 className="section-heading__title">Do you have any question? </h2>
                            <p className="section-heading__desc">For your car we will do everything  advice, repairs and maintenance. We are the some preferred choice by many car owners because</p>
                        </div>
                        <div className="contact-form__form">

                            <form ref={form} onSubmit={sendEmail} className="contact-form__form">
                                <div className="row gy-4">
                                    <div className="col-sm-6 col-xs-6">
                                        <input type="text" className="common-input" name='user_name' placeholder="Your Name"/>
                                    </div>
                                    <div className="col-sm-6 col-xs-6">
                                        <input type="email" className="common-input" name='user_email' placeholder="Your E-mail"/>
                                    </div>
                                    <div className="col-sm-6 col-xs-6">
                                        <input type="tel" className="common-input" name='user_phone' placeholder="Phone Number"/>
                                    </div>
                                    <div className="col-sm-6 col-xs-6">
                                        <input type="text" className="common-input" name='user_subject' placeholder="Subject"/>
                                    </div>
                                    <div className="col-12">
                                        <textarea className="common-input" name='message' placeholder="Your Message"></textarea>
                                    </div>
                                    <div className="col-12">
                                        <button type="submit" className="btn btn-main w-100">Submit Now</button>
                                    </div>
                                </div>
                            </form>


                        </div>  
                    </div>
                </div>  
            </section>   
        </>
    );
};

export default ContactUsSection;