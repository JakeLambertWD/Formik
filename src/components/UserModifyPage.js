import React from 'react';
import { Formik, Form, Field } from 'formik';
import { Typography, MenuItem, InputLabel } from '@material-ui/core';
import { Select, TextField } from 'formik-material-ui';
import * as Yup from 'yup';

function UsersModifyPage() {
	return (
		<div className='Login'>
			<div>
				<Typography component='h1' variant='h5'>
					Modify Users
				</Typography>
				<Formik
					initialValues={{
						staffType: '',
						email: '',
						password: ''
					}}
					validationSchema={Yup.object({
						staffType: Yup.string().required('required'),
						email: Yup.string()
							.email('Invalid email address')
							.required('required'),
						password: Yup.string().required('required')
					})}
					onSubmit={(values, { setSubmitting }) => {
						alert(JSON.stringify(values));
					}}
				>
					{({ isSubmitting, values }) => (
						<Form>
							<InputLabel shrink={true} htmlFor='staffType'>
								Staff Type
							</InputLabel>
							<Field
								component={Select}
								name='staffType'
								type='text'
								label='Staff Type'
							>
								<MenuItem value='editor'>Editor</MenuItem>
								<MenuItem value='qualityLead'>Quality Lead</MenuItem>
								<MenuItem value='sales'>Sales</MenuItem>
								<MenuItem value='superAdmin'>Super Admin</MenuItem>
								<MenuItem value='accounts'>Accounts</MenuItem>
							</Field>
							<br />
							<InputLabel shrink={true} htmlFor='email'>
								Email
							</InputLabel>
							<Field
								component={TextField}
								name='email'
								type='email'
								label='Email Address'
							/>
							<br />
							<InputLabel shrink={true} htmlFor='password'>
								Password
							</InputLabel>
							<Field
								component={TextField}
								name='password'
								type='password'
								label='Password'
							/>
							<br />
							<button type='submit'>Submit</button>
						</Form>
					)}
				</Formik>
			</div>
		</div>
	);
}

export default UsersModifyPage;
