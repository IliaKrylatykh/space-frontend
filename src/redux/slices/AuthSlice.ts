import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { IUser } from '../../models/IUser'
import { fetchAuthMe, fetchRegister, fetchUserAuth } from './ActionCreators'

interface UserState {
	data: IUser[] | null
	isLoading: boolean
	error: string
}

const initialState: UserState = {
	data: null,
	isLoading: false,
	error: '',
}

const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		logout: state => {
			state.data = null
		},
	},
	extraReducers: {
		[fetchUserAuth.pending.type]: state => {
			state.isLoading = true
			state.data = null
		},
		[fetchUserAuth.fulfilled.type]: (state, action: PayloadAction<IUser[]>) => {
			state.isLoading = false
			state.data = action.payload
		},
		[fetchUserAuth.rejected.type]: (state, action: PayloadAction<string>) => {
			state.data = null
			state.isLoading = false
			state.error = action.payload
		},
		[fetchAuthMe.pending.type]: state => {
			state.isLoading = true
			state.data = null
		},
		[fetchAuthMe.fulfilled.type]: (state, action: PayloadAction<IUser[]>) => {
			state.isLoading = false
			state.data = action.payload
		},
		[fetchAuthMe.rejected.type]: (state, action: PayloadAction<string>) => {
			state.data = null
			state.isLoading = false
			state.error = action.payload
		},
		[fetchRegister.pending.type]: state => {
			state.isLoading = true
			state.data = null
		},
		[fetchRegister.fulfilled.type]: (state, action: PayloadAction<IUser[]>) => {
			state.isLoading = false
			state.data = action.payload
		},
		[fetchRegister.rejected.type]: (state, action: PayloadAction<string>) => {
			state.data = null
			state.isLoading = false
			state.error = action.payload
		},
	},
})

export const selectIsAuth = (state: any) => Boolean(state.authReducer.data)
export default authSlice.reducer
export const { logout } = authSlice.actions
