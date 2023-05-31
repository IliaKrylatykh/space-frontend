import { FC, useEffect, useState } from 'react'
import { NavLink } from 'react-bootstrap'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import { Link, useParams } from 'react-router-dom'
import axios from '../../axios'
import { IPost } from '../../models/IPost'

const PostPage: FC = () => {
	const [data, setData] = useState<IPost>()
	const [isLoading, setIsLoading] = useState(true)
	const { id } = useParams()

	useEffect(() => {
		axios
			.get(`/posts/${id}`)
			.then(res => {
				setData(res.data)
				setIsLoading(false)
			})
			.catch(err => {
				console.warn(err)
				alert('Ошибка при загрузки статьи')
				setIsLoading(false)
			})
	}, [])

	if (isLoading) {
		return <div>loading</div>
	}

	return (
		<div
			style={{
				width: '100%',
				background: 'lightgray',
				minHeight: '600px',
				backgroundImage: `${process.env.REACT_APP_API_URL}${data?.imageUrl})`,
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
					<div
						style={{
							display: 'flex',
							justifyContent: 'space-between',
							alignItems: 'center',
						}}
					>
						<Card.Title>{data!.title}</Card.Title>
						<Button variant='dark'>Редактировать</Button>
						<Button variant='dark'>Удалить пост</Button>
					</div>
					<Card.Text>{data!.text}</Card.Text>
					<Card.Text>{data!.createdAt}</Card.Text>
					<Card.Text>{data!.user}</Card.Text>
					<Card.Text>{data!.viewsCount}</Card.Text>
					<Card.Text>{data!.likesCount}</Card.Text>
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
