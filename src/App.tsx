import 'bootstrap/dist/css/bootstrap.min.css'
import { Route, Routes } from 'react-router-dom'
import Navibar from './components/Navbar/Navbar'
import AddPostPage from './pages/AddPostPage/AddPostPage'
import HomePage from './pages/HomePage/HomePage'
import LoginPage from './pages/LoginPage/LoginPage'
import PostPage from './pages/PostPage/PostPage'
import RegistrationPage from './pages/RegistrationPage/RegistrationPage'

function App() {
	return (
		<div className='App'>
			<Navibar />
			<Routes>
				<Route path='/' element={<HomePage />} />
				<Route path='/posts/:id' element={<PostPage />} />
				<Route path='/add-post' element={<AddPostPage />} />
				<Route path='/login' element={<LoginPage />} />
				<Route path='/register' element={<RegistrationPage />} />
			</Routes>
		</div>
	)
}

export default App
