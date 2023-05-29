import React, { FC } from 'react'
import { Button } from 'react-bootstrap'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Navbar from 'react-bootstrap/Navbar'
import { Link } from 'react-router-dom'

const Navibar: FC = () => {
	// const isAuth: Boolean = false

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
			</Container>
		</Navbar>
	)
}

export default Navibar
