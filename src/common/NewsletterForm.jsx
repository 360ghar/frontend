import React from 'react';
import { useFormik } from "formik";
import * as yup from "yup";
import { ToastContainer, toast } from 'react-toastify';

const NewsletterForm = (props) => {

    const formik = useFormik({
        initialValues: {
          email: "",
        },
        // Validate by Yup
        validationSchema: yup.object({
            email: yup.string().email("Your Email is not valid! Provide valid email").required(),
        }),
    
        onSubmit: (values, { resetForm }) => {
          resetForm({ values: "" });
          toast.success("Congratulations! You Have Submitted Successfully.", {
            theme: "colored",
          });
        },
    });

    // Render Errors Code Start 
    const renderEmailError = formik.touched.email && formik.errors.email && (
        <span className="text-danger text-start d-block">{formik.errors.email}</span>
    );
    // Render Errors Code End
    
    return (
        <>
            <ToastContainer/>
            <form action="#" onSubmit={formik.handleSubmit} className={`newsletter-content__form  d-flex align-items-start gap-2 ${props.formClass}`}>
                <div className="w-100">
                    <div className="position-relative w-100">
                        <input 
                            type="email" 
                            placeholder="Your Email"
                            name='email'
                            id='email'
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.email}
                            className={`common-input common-input--withLeftIcon w-100 ${props.inputClass}  ${
                                formik.touched.email && formik.errors.email ? "is-invalid" : ""
                            }`}
                        />
                        <span className={`input-icon input-icon--left text-white font-20 line-height-1 ${props.iconClass}`}><i className="far fa-envelope"></i></span>
                    </div>
                    {renderEmailError}
                </div>
                <button type="submit" className="btn btn-main text-uppercase flex-shrink-0">
                    Subscribe <span className="text">Now</span> 
                </button>
            </form>   
        </>
    );
};

export default NewsletterForm;