import { FC } from 'react'
import { NavLink } from 'react-bootstrap'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import { Link } from 'react-router-dom'
import { IPost } from '../../models/IPost'

const Post: FC<IPost> = ({
	id,
	title,
	text,
	viewsCount,
	likesCount,
	imageUrl,
}) => {
	return (
		<Card
			style={{
				width: '18rem',
				margin: '20px',
				boxShadow: ' 5px 5px 10px',
			}}
		>
			<Card.Img variant='top' src={`http://localhost:4444${imageUrl}`} />
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
