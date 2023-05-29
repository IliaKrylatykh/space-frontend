import { FC } from 'react'
import PostList from '../../components/PostList/PostList'

const HomePage: FC = () => {
	return (
		<div
			style={{
				width: '100%',
				background: 'lightgray',
				minHeight: '1000px',
				backgroundImage:
					'url(https://images.unsplash.com/photo-1534996858221-380b92700493?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1931&q=80)',
				backgroundRepeat: 'no-repeat',
			}}
		>
			<PostList />
		</div>
	)
}

export default HomePage
