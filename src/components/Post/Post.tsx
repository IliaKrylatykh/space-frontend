import { FC } from 'react'
import { NavLink } from 'react-bootstrap'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import { Link } from 'react-router-dom'

const Post: FC = () => {
	const text: string =
		"Importance for Life: The sun plays a crucial role in sustaining life on Earth. It provides the energy necessary for photosynthesis in plants, which is the basis of the food chain. Sunlight also helps regulate Earth's climate and seasons. Furthermore, solar energy can be harnessed through technologies like solar panels to generate electricity."

	return (
		<Card
			style={{
				width: '18rem',
				margin: '20px',
				boxShadow: ' 5px 5px 10px',
			}}
		>
			<Card.Img
				variant='top'
				src='https://images.unsplash.com/photo-1529788295308-1eace6f67388?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80'
			/>
			<Card.Body>
				<Card.Title>Sun</Card.Title>
				<Card.Text>
					{text.length > 150 ? text.substring(0, 150) + '...' : text}
				</Card.Text>
				<Button variant='dark'>
					<NavLink as={Link} to='/posts/:id'>
						Full post
					</NavLink>
				</Button>
			</Card.Body>
		</Card>
	)
}

export default Post