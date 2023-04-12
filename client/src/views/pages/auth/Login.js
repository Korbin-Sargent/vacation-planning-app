import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from 'utils/mutations';
import Auth from 'utils/auth';

const Login = (props) => {
	const [formState, setFormState] = useState({ username: '', password: '' });
	const [login, { error, data }] = useMutation(LOGIN_USER);

	// update state based on form input changes
	const handleChange = (event) => {
		const { name, value } = event.target;

		setFormState({
			...formState,
			[name]: value
		});
	};

	// submit form
	const handleFormSubmit = async (event) => {
		event.preventDefault();
		try {
			const { data } = await login({
				variables: { ...formState }
			});
			Auth.login(data.login.token);
			Auth.storeUsername(formState.username);
			window.location.replace('/dashboard');
		} catch (e) {
			console.error(e);
		}

		// clear form values
		setFormState({
			username: '',
			password: ''
		});
	};

	return (
		<div>
			{data ? (
				<p>
					Success! You may now head <Link to='/'>back to the homepage.</Link>
				</p>
			) : (
				<form onSubmit={handleFormSubmit}>
					<input
						placeholder='Username'
						name='username'
						type='text'
						value={formState.username}
						onChange={handleChange}
					/>
					<input
						placeholder='******'
						name='password'
						type='password'
						value={formState.password}
						onChange={handleChange}
					/>
					<Button className='login-btn' variant='dark' onClick={handleFormSubmit}>
						Login
					</Button>
				</form>
			)}

			{error && <div className='my-3 p-3 bg-danger text-white'>{error.message}</div>}
		</div>
	);
};

export default Login;
