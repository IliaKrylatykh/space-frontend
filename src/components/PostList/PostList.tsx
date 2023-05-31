import { FC, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useAppSelector } from '../../hooks/redux'
import { IUser } from '../../models/IUser'
import { fetchPosts } from '../../redux/slices/ActionCreators'
import { AppDispatch } from '../../redux/store'
import Post from '../Post/Post'

const PostList: FC = () => {
	const dispatch = useDispatch<AppDispatch>()
	const posts = useAppSelector(state => state.postReducer)
	const userData = useAppSelector(state => state.authReducer.data)

	const isPostsLoading = posts.isLoading

	useEffect(() => {
		dispatch(fetchPosts())
	}, [])
	return (
		<div
			style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}
		>
			{(isPostsLoading ? [...Array(6)] : posts.posts).map((post, index) =>
				isPostsLoading ? (
					<div key={index}>Post skeleton will be here</div>
				) : (
					<Post
						key={post._id}
						id={post._id}
						title={post.title}
						text={post.text.slice(0, 400) + '...'}
						viewsCount={post.viewsCount}
						likesCount={post.likesCount}
						createdAt={post.updatedAt}
						user={post.user}
						imageUrl={post.imageUrl}
						isEditable={false}
					/>
				)
			)}
		</div>
	)
}

export default PostList
