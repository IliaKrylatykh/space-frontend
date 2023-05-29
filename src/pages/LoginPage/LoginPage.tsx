import { FC } from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

const LoginPage: FC = () => {
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
				<Form.Group className='mb-3' controlId='formBasicEmail'>
					<Form.Label>Email address</Form.Label>
					<Form.Control type='email' placeholder='Enter email' />
				</Form.Group>

				<Form.Group className='mb-3' controlId='formBasicPassword'>
					<Form.Label>Password</Form.Label>
					<Form.Control type='password' placeholder='Password' />
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
