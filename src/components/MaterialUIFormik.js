import React from 'react';
import FormikField from './Formikfield/FormikField';
import FormikSelect from './FormikSelect/FormikSelect';
import { Formik, Form } from 'formik';
import Button from '@material-ui/core/Button';
import * as Yup from 'yup';

function MaterialUIFormik() {
	const positionItems = [
		{
			label: 'Editor',
			value: 'editor'
		},
		{
			label: 'Quality Lead',
			value: 'qualityLead'
		},
		{
			label: 'Sales',
			value: 'sales'
		},
		{
			label: 'Super Admin',
			value: 'superAdmin'
		},
		{
			label: 'Accounts',
			value: 'accounts'
		}
	];

	const initialValues = {
		email: '',
		password: '',
		staffTypes: ''
	};

	const handlerSubmit = values => {
		alert(JSON.stringify(values));
	};

	const SignupSchema = Yup.object().shape({
		email: Yup.string().email('Invalid email address').required('Required'),
		password: Yup.string().required('Required'),
		staffTypes: Yup.string().required('Required')
	});

	return (
		<div>
			<h1>Signup</h1>
			<Formik
				initialValues={initialValues}
				onSubmit={handlerSubmit}
				validationSchema={SignupSchema}
			>
				{/* Dirty means has the form fields been touched */}
				{/* isValid means has the inputs fulfilled the validationSchema */}
				{({ dirty, isValid, handlerReset }) => {
					return (
						<Form>
							<FormikField label='Email' name='email' />
							<FormikField label='Password' name='password' type='password' />
							{/* prettier-ignore */}
							<FormikSelect label='Staff Types' name='staffTypes' items={positionItems} />
							{/* prettier-ignore */}
							<Button onClick={handlerReset} variant='contained' color='primary' disabled={!dirty || !isValid} type='submit'>
								Search
							</Button>
						</Form>
					);
				}}
			</Formik>
		</div>
	);
}

export default MaterialUIFormik;
