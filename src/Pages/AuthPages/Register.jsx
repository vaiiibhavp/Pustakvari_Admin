import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { AppStrings } from '../Helper/Constant';

const RegistrationForm = () => {
    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            contactNumber: '',
            address: '',
            password: '',
        },
        validationSchema: Yup.object({
            name: Yup.string().required('Required'),
            email: Yup.string().email('Invalid email address').required('Required'),
            contactNumber: Yup.string().required('Required'),
            address: Yup.string().required('Required'),
            password: Yup.string().required('Required'),
        }),
        onSubmit: (values) => {
            // You can handle registration submission here
            console.log('Form values:', values);
        },
    });

    return (
        <form onSubmit={formik.handleSubmit}>
            <div>
                <label htmlFor="name">Name:</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.name}
                />
                {formik.touched.name && formik.errors.name ? (
                    <div>{formik.errors.name}</div>
                ) : null}
            </div>

            <div>
                <label htmlFor="email">{AppStrings?.email}:</label>
                <input
                    type="text"
                    id="email"
                    name="email"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.email}
                />
                {formik.touched.email && formik.errors.email ? (
                    <div>{formik.errors.email}</div>
                ) : null}
            </div>

            <div>
                <label htmlFor="contactNumber">Contact Number:</label>
                <input
                    type="text"
                    id="contactNumber"
                    name="contactNumber"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.contactNumber}
                />
                {formik.touched.contactNumber && formik.errors.contactNumber ? (
                    <div>{formik.errors.contactNumber}</div>
                ) : null}
            </div>

            <div>
                <label htmlFor="address">Address:</label>
                <input
                    type="text"
                    id="address"
                    name="address"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.address}
                />
                {formik.touched.address && formik.errors.address ? (
                    <div>{formik.errors.address}</div>
                ) : null}
            </div>

            <div>
                <label htmlFor="password">Password:</label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.password}
                />
                {formik.touched.password && formik.errors.password ? (
                    <div>{formik.errors.password}</div>
                ) : null}
            </div>

            <button type="submit">Register</button>
        </form>
    );
};

export default RegistrationForm;
