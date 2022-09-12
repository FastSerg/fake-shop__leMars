import React, { useState } from 'react'
import Form from './Form'
import Avatar from '@mui/material/Avatar'
import './CommentsForm.scss'
import { Grid } from '@mui/material'

export type CommentsProps = {
    name: string
    text: string
    img?: string
    email?: any
}

const arrComments: CommentsProps[] = [
    {
        name: 'Mercer Owen',
        img: '/img/commentsProfile.jpg',
        text: `Proin gravida nibh vel velit auctor aliquet.
            Aenean sollicitudin, lorem quisma bibendum
            auctor nisi elit consequat ipsum, nec sagittis
            sem amet nibh vulputate cursus itaet mauris.`,
    },
]

type Props = {}

const CommentsForm = (props: Props) => {
    const [comments, setComment] = useState<CommentsProps[]>(arrComments)

    const [newComment, setNewComment] = useState<CommentsProps>({
        name: '',
        text: '',
        email: '',
    })

    const heandlerChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewComment((prevState: CommentsProps) => ({
            ...prevState,
            name: e.target.value,
        }))
    }

    const heandlerChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewComment((prevState: CommentsProps) => ({
            ...prevState,
            email: e.target.value,
        }))
    }

    const heandlerChangeText = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setNewComment((prevState: CommentsProps) => ({
            ...prevState,
            text: e.target.value,
        }))
    }

    const onSend = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setComment((prevState: CommentsProps[]) => {
            return [...prevState, newComment]
        })
        setNewComment({ name: '', text: '', email: '' })
    }

    return (
        <>
            <Grid
                item
                md={12}
                container
                sx={{
                    marginTop: '40px',
                }}
            >
                <div className="comments">
                    {comments.map((comment: CommentsProps, i: number) => (
                        <div className="coments-container" key={i}>
                            <div className="coments-profileImg">
                                <Avatar
                                    alt="Remy Sharp"
                                    src={
                                        comment.img
                                            ? comment.img
                                            : '/img/no_name.jpg'
                                    }
                                    sx={{ width: '100px', height: '100px' }}
                                />
                            </div>

                            <div className="comments-content">
                                <div className="coments-author">
                                    <div>{comment.name}</div>
                                </div>
                                <div className="coments-text">
                                    <p>{comment.text}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <Form
                    newComment={newComment}
                    onSend={onSend}
                    heandlerChangeName={heandlerChangeName}
                    heandlerChangeText={heandlerChangeText}
                    heandlerChangeEmail={heandlerChangeEmail}
                />{' '}
            </Grid>
        </>
    )
}

export default CommentsForm
