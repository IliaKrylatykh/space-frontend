import { FC } from 'react'
import { NavLink } from 'react-bootstrap'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import { Link } from 'react-router-dom'

const PostPage: FC = () => {
	const text: string =
		"Importance for Life: The sun plays a crucial role in sustaining life on Earth. It provides the energy necessary for photosynthesis in plants, which is the basis of the food chain. Sunlight also helps regulate Earth's climate and seasons. Furthermore, solar energy can be harnessed through technologies like solar panels to generate electricity."
	return (
		<div
			style={{
				width: '100%',
				background: 'lightgray',
				minHeight: '600px',
				backgroundImage:
					'url(https://images.unsplash.com/photo-1529788295308-1eace6f67388?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80)',
				backgroundRepeat: 'no-repeat',
				backgroundSize: '100%',
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
			}}
		>
			<Card
				style={{
					width: '70%',
					boxShadow: ' 5px 5px 10px',
				}}
			>
				<Card.Body>
					<Card.Title>Sun</Card.Title>
					<Card.Text>{text}</Card.Text>
					<Button variant='dark'>
						<NavLink as={Link} to='/'>
							Home
						</NavLink>
					</Button>
				</Card.Body>
			</Card>
		</div>
	)
}

export default PostPage
