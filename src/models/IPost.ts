export interface IPost {
	id: string
	title: string
	text: string
	viewsCount: number
	likesCount: number
	createdAt: string
	user: string
	imageUrl: string
	isEditable?: boolean
}
