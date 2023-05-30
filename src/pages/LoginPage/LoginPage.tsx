import { FC } from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { useForm } from 'react-hook-form'
import { Navigate } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../hooks/redux'
import { fetchUserAuth } from '../../redux/slices/ActionCreators'
import { selectIsAuth } from '../../redux/slices/AuthSlice'

const LoginPage: FC = () => {
	const dispatch = useAppDispatch()
	const isAuth = useAppSelector(selectIsAuth)

	const {
		register,
		handleSubmit,
		formState: { errors, isValid },
	} = useForm({
		defaultValues: {
			email: '',
			password: '',
		},
		mode: 'onChange',
	})

	const onSubmit = async (values: any) => {
		const data = await dispatch(fetchUserAuth(values))
		if (!data.payload) {
			return alert('Не удалось авторизоваться!')
		}
		if ('token' in data.payload) {
			window.localStorage.setItem('token', data.payload.token)
		}
	}

	console.log(isAuth)

	if (isAuth) {
		return <Navigate to='/' />
	}

	return (
		<div
			style={{
				margin: '50px auto',
				maxWidth: '500px',
				padding: '30px',
				background: 'lightgray',
				borderRadius: '10px',
			}}
		>
			<Form onSubmit={handleSubmit(onSubmit)}>
				<Form.Group className='mb-3' controlId='formBasicEmail'>
					<Form.Label>Email address</Form.Label>
					<Form.Control
						type='email'
						placeholder='Enter email'
						{...register('email', { required: 'Укажите почту' })}
					/>
				</Form.Group>

				<Form.Group className='mb-3' controlId='formBasicPassword'>
					<Form.Label>Password</Form.Label>
					<Form.Control
						type='password'
						placeholder='Password'
						{...register('password', { required: 'Укажите пароль' })}
					/>
				</Form.Group>
				<Form.Group className='mb-3' controlId='formBasicCheckbox'>
					<Form.Check type='checkbox' label='Check me out' />
				</Form.Group>
				<Button variant='primary' type='submit'>
					Submit
				</Button>
			</Form>
		</div>
	)
}

export default LoginPage
