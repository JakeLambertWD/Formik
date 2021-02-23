import React from 'react';
import './FormikSelect.css';
import { Field, ErrorMessage } from 'formik';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const MaterialUISelectField = ({
	label,
	children,
	errorString,
	value,
	name,
	onChange,
	onBlur
}) => {
	return (
		<FormControl fullWidth>
			<InputLabel>{label}</InputLabel>
			<Select name={name} onChange={onChange} onBlur={onBlur} value={value}>
				{children}
			</Select>
			<FormHelperText>{errorString}</FormHelperText>
		</FormControl>
	);
};

const FormikSelect = ({ label, items, name }) => {
	return (
		<div className='FormikSelect'>
			<Field
				name={name}
				as={MaterialUISelectField}
				label={label}
				errorString={<ErrorMessage name={name} />}
			>
				{items.map(item => (
					<MenuItem key={item.value} value={item.value}>
						{item.label}
					</MenuItem>
				))}
			</Field>

			{/* <MaterialUISelectField label={label} errorString='ERRROOORRRR'>
				{items.map(item => (
					<MenuItem key={item.value} value={item.value}>
						{item.label}
					</MenuItem>
				))}
			</MaterialUISelectField> */}
		</div>
	);
};

export default FormikSelect;
