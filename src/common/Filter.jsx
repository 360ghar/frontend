import React, { useContext } from 'react';
import { useFormik } from "formik";
import * as yup from "yup";
import { ToastContainer, toast } from 'react-toastify';

import { useNavigate } from 'react-router-dom';
import { PropertyFilterContext } from '../contextApi/PropertyFilterContext';


const Filter = (props) => {

    const {dataType, handleDataTypeChange, dataLocation, handleDataLocationChange} = useContext(PropertyFilterContext); 

    const navigate = useNavigate();

    // Input Field Validation Start 
    const formik = useFormik({
        initialValues: {
          searchKeyword: "",
        },
        // Validate by Yup
        validationSchema: yup.object({
            searchKeyword: yup.string().min(3, "Too Short! Must be at least 3 characters long").required(),
        }),
    
        onSubmit: (values, { resetForm }) => {
            // alert(JSON.stringify(values, null, 2));
            resetForm({ values: "" });
            toast.success("Congratulations! You Have Searched Successfully.", {
                theme: "colored",
            });

            // Navigate To Property Page
            navigate("/property-sidebar");
        },
    });

    const renderNameError = formik.touched.searchKeyword && formik.errors.searchKeyword && (
        <span className="text-danger">{formik.errors.searchKeyword}</span>
    );
    // Input Field Validation End
    
    return (
        <>  
        <ToastContainer/>
            <div className="filter">
                <form action="#" onSubmit={formik.handleSubmit}>
                    <div className="row gy-sm-4 gy-3">
                        <div className={props.colClass}>
                            <input 
                                type="text" 
                                placeholder="Enter Keyword"
                                name='searchKeyword'
                                id='name'
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.name}
                                className={`common-input ${
                                    formik.touched.name && formik.errors.name ? "is-invalid" : ""
                                }`}
                            />
                            {renderNameError}
                        </div>
                        <div className={props.colClass}>
                            <div className="select-has-icon icon-black">

                                <select className="select common-input" value={dataType} onChange={handleDataTypeChange}>
                                    <option value="Type" disabled defaultValue>Type</option>
                                    <option value="All">All</option>
                                    <option value="Houses">Houses</option>
                                    <option value="Apartments">Apartments</option>
                                    <option value="Office">Office</option>
                                    <option value="Villa">Villa</option>
                                </select>
                            </div>
                        </div>
                        <div className={props.colClass}>
                            <div className="select-has-icon icon-black">
                                <select className="select common-input" value={dataLocation} onChange={handleDataLocationChange}>
                                    <option value="Location" disabled defaultValue>Location</option>
                                    <option value="All"> Country</option>
                                    <option value="Bangladesh" data-location="Bangladesh">Bangladesh</option>
                                    <option value="Japan" data-location="Japan">Japan</option>
                                    <option value="Korea" data-location="Korea">Korea</option>
                                    <option value="Singapore" data-location="Singapore">Singapore</option>
                                    <option value="Germany" data-location="Germany">Germany</option>
                                    <option value="Thailand" data-location="Thailand">Thailand</option>
                                </select>
                            </div>
                        </div>
                        <div className={props.colClass}>
                            <button type="submit" className="btn btn-main w-100"> 
                                {props.buttonText}
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </>
    );
};

export default Filter;


