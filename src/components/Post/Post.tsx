import { FC } from 'react'
import { NavLink } from 'react-bootstrap'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import { Link } from 'react-router-dom'
import { IPost } from '../../models/IPost'

const Post: FC<IPost> = ({ id, title, text, viewsCount, likesCount }) => {
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
				<Card.Title>{title}</Card.Title>
				<Card.Text>
					{text.length > 150 ? text.substring(0, 150) + '...' : text}
				</Card.Text>
				<Button variant='dark'>
					<NavLink as={Link} to={`/posts/${id}`}>
						Full post
					</NavLink>
				</Button>
			</Card.Body>
		</Card>
	)
}

export default Post
