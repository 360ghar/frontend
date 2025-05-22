import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useAuthStore } from '../../store';
import { useNavigate } from 'react-router-dom';

const RegisterSchema = Yup.object().shape({
  full_name: Yup.string()
    .min(2, 'Name is too short')
    .max(50, 'Name is too long')
    .required('Name is required'),
  email: Yup.string()
    .email('Invalid email')
    .required('Email is required'),
  phone: Yup.string()
    .matches(/^\+?[0-9]{10,15}$/, 'Phone number must be valid')
    .required('Phone number is required'),
  password: Yup.string()
    .min(6, 'Password must be at least 6 characters')
    .required('Password is required'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required('Confirm password is required'),
});

const RegisterForm = ({ redirectTo = '/' }) => {
  const { register, isLoading, error, clearError } = useAuthStore();
  const navigate = useNavigate();

  const handleSubmit = async (values, { setSubmitting }) => {
    clearError();
    
    const userData = {
      full_name: values.full_name,
      email: values.email,
      phone: values.phone,
      password: values.password,
    };
    
    const success = await register(userData);
    setSubmitting(false);
    
    if (success) {
      navigate(redirectTo);
    }
  };

  return (
    <div className="register-form">
      <Formik
        initialValues={{
          full_name: '',
          email: '',
          phone: '',
          password: '',
          confirmPassword: '',
        }}
        validationSchema={RegisterSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
            <div className="form-group mb-4">
              <label htmlFor="full_name">Full Name</label>
              <Field
                type="text"
                name="full_name"
                className="form-control"
                placeholder="Your Full Name"
              />
              <ErrorMessage name="full_name" component="div" className="text-danger" />
            </div>

            <div className="form-group mb-4">
              <label htmlFor="email">Email</label>
              <Field
                type="email"
                name="email"
                className="form-control"
                placeholder="Your Email"
              />
              <ErrorMessage name="email" component="div" className="text-danger" />
            </div>

            <div className="form-group mb-4">
              <label htmlFor="phone">Phone Number</label>
              <Field
                type="text"
                name="phone"
                className="form-control"
                placeholder="Your Phone Number"
              />
              <ErrorMessage name="phone" component="div" className="text-danger" />
            </div>

            <div className="form-group mb-4">
              <label htmlFor="password">Password</label>
              <Field
                type="password"
                name="password"
                className="form-control"
                placeholder="Your Password"
              />
              <ErrorMessage name="password" component="div" className="text-danger" />
            </div>

            <div className="form-group mb-4">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <Field
                type="password"
                name="confirmPassword"
                className="form-control"
                placeholder="Confirm Your Password"
              />
              <ErrorMessage name="confirmPassword" component="div" className="text-danger" />
            </div>

            {error && <div className="alert alert-danger">{error}</div>}

            <button
              type="submit"
              className="btn btn-primary w-100"
              disabled={isSubmitting || isLoading}
            >
              {isLoading ? 'Registering...' : 'Register'}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default RegisterForm; 