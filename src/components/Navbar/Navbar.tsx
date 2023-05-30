import React, { FC } from 'react'
import { Button } from 'react-bootstrap'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Navbar from 'react-bootstrap/Navbar'
import { Link } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../hooks/redux'
import { logout, selectIsAuth } from '../../redux/slices/AuthSlice'

const Navibar: FC = () => {
	const isAuth = useAppSelector(selectIsAuth)
	const dispatch = useAppDispatch()

	const onClickLogout = () => {
		if (window.confirm('Вы уверены что хотите выйти?')) {
			dispatch(logout())
			window.localStorage.removeItem('token')
		}
	}

	return (
		<Navbar bg='dark' expand='lg' variant='dark'>
			<Container>
				<Navbar.Toggle aria-controls='basic-navbar-nav' />
				<Navbar.Collapse id='basic-navbar-nav'>
					<Nav>
						<Nav.Link as={Link} to='/'>
							Home
						</Nav.Link>
						<Nav.Link as={Link} to='/add-post'>
							Add post
						</Nav.Link>
						<NavDropdown title='Themes' id='basic-nav-dropdown'>
							<NavDropdown.Item href='#action/3.1'>Light</NavDropdown.Item>
							<NavDropdown.Item href='#action/3.2'>Dark</NavDropdown.Item>
							<NavDropdown.Item href='#action/3.3'>Random</NavDropdown.Item>
						</NavDropdown>
					</Nav>
				</Navbar.Collapse>
				{isAuth ? (
					<Nav>
						<Button variant='dark' className='mx-1' onClick={onClickLogout}>
							<Nav.Link as={Link} to='/'>
								Log out
							</Nav.Link>
						</Button>
					</Nav>
				) : (
					<Nav>
						<Button variant='dark' className='mx-1'>
							<Nav.Link as={Link} to='/login'>
								Log in
							</Nav.Link>
						</Button>
						<Button variant='dark' className='mx-1'>
							<Nav.Link as={Link} to='/register'>
								Sign up
							</Nav.Link>
						</Button>
					</Nav>
				)}
			</Container>
		</Navbar>
	)
}

export default Navibar
