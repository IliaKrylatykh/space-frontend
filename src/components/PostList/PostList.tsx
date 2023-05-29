import { FC, useEffect } from 'react'
import axios from '../../axios'
import Post from '../Post/Post'

const PostList: FC = () => {
	useEffect(() => {
		axios.get('/posts')
	}, [])
	return (
		<div
			style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}
		>
			{}
			<Post />
		</div>
	)
}

export default PostList
