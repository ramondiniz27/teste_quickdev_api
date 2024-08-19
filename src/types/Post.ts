import { User } from "./User"

export type Post =  {
    id: string
    user: User
    comment: string
    userId: string
    commentId: string
    title: string
    image?:string
}