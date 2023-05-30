import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { IPost } from '../../models/IPost'
import { fetchPosts } from './ActionCreators'

interface PostState {
	posts: IPost[]
	isLoading: boolean
	error: string
}

const initialState: PostState = {
	posts: [],
	isLoading: false,
	error: '',
}

export const postSlice = createSlice({
	name: 'post',
	initialState,
	reducers: {
		// postsFetching(state) {
		// 	console.log('fetching..')
		// 	state.isLoading = true
		// },
		// postsFetchingSuccess(state, action: PayloadAction<IPost[]>) {
		// 	state.isLoading = false
		// 	state.posts = action.payload
		// 	state.error = ''
		// },
		// postsFetchingError(state, action: PayloadAction<string>) {
		// 	state.isLoading = false
		// 	state.error = action.payload
		// },
	},
	extraReducers: {
		[fetchPosts.pending.type]: state => {
			state.posts = []
			state.isLoading = true
		},
		[fetchPosts.fulfilled.type]: (state, action: PayloadAction<IPost[]>) => {
			state.isLoading = false
			state.posts = action.payload
		},
		[fetchPosts.rejected.type]: (state, action: PayloadAction<string>) => {
			state.posts = []
			state.isLoading = false
			state.error = action.payload
		},
	},
})

export default postSlice.reducer
