import { FC, useRef, useState } from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { useForm } from 'react-hook-form'
import { Navigate, useNavigate } from 'react-router-dom'
import axios from '../../axios'
import { useAppDispatch, useAppSelector } from '../../hooks/redux'
import { fetchRegister } from '../../redux/slices/ActionCreators'
import { selectIsAuth } from '../../redux/slices/AuthSlice'

const AddPostPage: FC = () => {
	const navigate = useNavigate()
	const dispatch = useAppDispatch()
	const isAuth = useAppSelector(selectIsAuth)
	const [isLoading, setIsLoading] = useState<any>(false)
	const [value, setValue] = useState<any>('')
	const [title, setTitle] = useState<any>('')
	const [text, setText] = useState<any>('')
	const [imageUrl, setImageUrl] = useState<any>('')
	const inputFileRef = useRef<any>(null)

	const {
		register,
		handleSubmit,
		formState: { errors, isValid },
	} = useForm({
		defaultValues: {
			fullName: '',
			email: '',
			password: '',
		},
		mode: 'onChange',
	})

	const onChange = (value: any) => {
		setValue(value)
	}

	const handleChangeFile = async (event: any) => {
		try {
			const formData = new FormData()
			const file = event.target.files[0]
			formData.append('image', file)
			const { data } = await axios.post('/upload', formData)
			setImageUrl(data.url)
		} catch (error) {
			console.warn(error)
			alert('Ошибка при загрузке картинки')
		}
	}

	const onClickRemoveImage = () => {
		setImageUrl('')
	}

	if (!window.localStorage.getItem('token') && !isAuth) {
		return <Navigate to='/' />
	}

	const onSubmit = async () => {
		try {
			setIsLoading(true)
			const fields = {
				title,
				text,
				imageUrl,
			}
			const { data } = await axios.post('/posts', fields)
			const id = data._id
			navigate(`/posts/${id}`)
		} catch (err) {
			console.warn(err)
			alert('Ошибка при создании статьи')
		}
	}

	return (
		<div
			style={{
				margin: '50px auto',
				maxWidth: '500px',
				padding: '30px',
				background: 'lightgray',
				borderRadius: '10px',
			}}
		>
			<Form onSubmit={handleSubmit(onSubmit)}>
				{imageUrl ? (
					<>
						<Button variant='primary' onClick={onClickRemoveImage}>
							Удалить
						</Button>
						<img
							src={`${process.env.REACT_APP_API_URL}${imageUrl}`}
							style={{ width: '200px' }}
							alt={''}
						/>
					</>
				) : (
					<Form.Group controlId='formFile' className='mb-3'>
						<Form.Label>Выберите картинку</Form.Label>
						<Form.Control
							type='file'
							ref={inputFileRef}
							onChange={handleChangeFile}
						/>
					</Form.Group>
				)}
				<Form.Group className='mb-3' controlId='formBasicEmail'>
					<Form.Label>Title</Form.Label>
					<Form.Control
						type='title'
						placeholder='Enter title'
						value={title}
						onChange={e => setTitle(e.target.value)}
						// {...register('fullName', { required: 'Укажите навзание поста' })}
					/>
				</Form.Group>
				<Form.Group className='mb-3' controlId='exampleForm.ControlTextarea1'>
					<Form.Label>Example textarea</Form.Label>
					<Form.Control
						as='textarea'
						rows={3}
						placeholder='Enter text'
						value={text}
						onChange={e => setText(e.target.value)}
						// {...register('fullName', { required: 'Укажите текст поста' })}
					/>
				</Form.Group>
				<Button disabled={!isValid} variant='primary' onClick={onSubmit}>
					Создать пост
				</Button>
			</Form>
		</div>
	)
}

export default AddPostPage
