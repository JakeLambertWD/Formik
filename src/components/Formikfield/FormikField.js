import React from 'react';
import TextField from '@material-ui/core/TextField';
import { Field, ErrorMessage } from 'formik';
import './FormikField.css';

const FormikField = ({ name, label, type = 'text' }) => {
	return (
		<div className='FormikField'>
			<Field
				as={TextField}
				name={name}
				label={label}
				type={type}
				fullWidth
				helperText={<ErrorMessage name={name} />}
			/>
			{/* <TextField label={label} fullWidth /> */}
		</div>
	);
};

export default FormikField;
