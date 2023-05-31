import { FC } from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { useForm } from 'react-hook-form'
import { Navigate } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../hooks/redux'
import { fetchRegister, fetchUserAuth } from '../../redux/slices/ActionCreators'
import { selectIsAuth } from '../../redux/slices/AuthSlice'

const RegistrationPage: FC = () => {
	const dispatch = useAppDispatch()
	const isAuth = useAppSelector(selectIsAuth)

	const {
		register,
		handleSubmit,
		formState: { errors, isValid },
	} = useForm({
		defaultValues: {
			fullName: '',
			email: '',
			password: '',
		},
		mode: 'onChange',
	})

	const onSubmit = async (values: any) => {
		const data = await dispatch(fetchRegister(values))
		if (!data.payload) {
			return alert('Не удалось зарегистрироваться!')
		}
		if ('token' in data.payload) {
			window.localStorage.setItem('token', data.payload.token)
		}
	}

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
				<Form.Group controlId='formFile' className='mb-3'>
					<Form.Label>Выберите аватар</Form.Label>
					<Form.Control type='file' />
				</Form.Group>
				<Form.Group className='mb-3' controlId='formBasicEmail'>
					<Form.Label>Name</Form.Label>
					<Form.Control
						type='fullName'
						placeholder='Enter name'
						{...register('fullName', { required: 'Укажите имя' })}
					/>
				</Form.Group>
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
				<Button disabled={!isValid} variant='primary' type='submit'>
					Register
				</Button>
			</Form>
		</div>
	)
}

export default RegistrationPage
