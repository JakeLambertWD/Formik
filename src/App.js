import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

function App() {
	// Pass the useFormik() hook initial form values and a submit function that will be called when
	// form values change or fields are blurred, and a submit function that will
	// be called when the form is submitted
	const formik = useFormik({
		// Form state
		initialValues: {
			email: '',
			firstName: '',
			lastName: ''
		},
		validationSchema: Yup.object({
			firstName: Yup.string()
				.max(15, 'Must be 15 characters or less')
				.required('Required'),
			lastName: Yup.string()
				.max(20, 'Must be 20 characters or less')
				.required('Required'),
			email: Yup.string().email('Invalid email address').required('Required')
		}),
		onSubmit: values => {
			alert(JSON.stringify(values, null, 2));
		}
	});

	return (
		// Form
		<form onSubmit={formik.handleSubmit}>
			{/* First Name */}
			<label htmlFor='firstName'>First Name</label>
			<input
				id='firstName'
				name='firstName'
				type='text'
				onChange={formik.handleChange}
				// The onblur event occurs when an object loses its focus
				onBlur={formik.handleBlur}
				value={formik.values.firstName}
			/>
			{/* Now we're tracking touched, we can now change the error message render logic
			to only show a given fields error msg if it exists and if our user has visited that field */}
			{formik.touched.firstName && formik.errors.firstName ? (
				<div>{formik.errors.firstName}</div>
			) : null}

			{/* Last Name */}
			<label htmlFor='lastName'>Last name</label>
			<input
				id='lastName'
				type='text'
				// This helper function makes it faster to wire up inputs
				// Given some field-level info, it returns to you the exact group of onChange, onBlur, value, checked for a given field
				{...formik.getFieldProps('LastName')}
			/>
			{formik.touched.lastName && formik.errors.lastName ? (
				<div>{formik.errors.lastName}</div>
			) : null}

			{/* Email */}
			<label htmlFor='email'>Email Address</label>
			<input
				id='email'
				name='email'
				type='email'
				onChange={formik.handleChange}
				onBlur={formik.handleBlur}
				value={formik.values.email}
			/>
			{formik.touched.email && formik.errors.email ? (
				<div>{formik.errors.email}</div>
			) : null}

			{/* Button */}
			<button type='submit'>Submit</button>
		</form>
	);
}

export default App;
