import { FC } from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

const RegistrationPage: FC = () => {
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
			<Form>
				<Form.Group controlId='formFile' className='mb-3'>
					<Form.Label>Выберите аватар</Form.Label>
					<Form.Control type='file' />
				</Form.Group>
				<Form.Group className='mb-3' controlId='formBasicEmail'>
					<Form.Label>Name</Form.Label>
					<Form.Control type='email' placeholder='Enter name' />
				</Form.Group>
				<Form.Group className='mb-3' controlId='formBasicEmail'>
					<Form.Label>Email address</Form.Label>
					<Form.Control type='email' placeholder='Enter email' />
				</Form.Group>
				<Form.Group className='mb-3' controlId='formBasicPassword'>
					<Form.Label>Password</Form.Label>
					<Form.Control type='password' placeholder='Password' />
				</Form.Group>
				<Button variant='primary' type='submit'>
					Register
				</Button>
			</Form>
		</div>
	)
}

export default RegistrationPage
