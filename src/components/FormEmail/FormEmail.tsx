import React, { useState } from 'react'
import './FormEmail.scss'
import { IconButton } from '@mui/material'
import SendIcon from '@mui/icons-material/Send'
import axios from 'axios'

type Props = {}
type emailUserProps = {
    email: string
}
const FormEmail = (props: Props) => {
    const [formState, setFormState] = useState<boolean>(false)
    const [emailUser, setEmailUser] = useState<emailUserProps>({
        email: '',
    })

    const [error, setError] = useState<string>('')

    const isValidEmail = (email: string) => {
        return /^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i.test(email)
    }

    const handleEmailUser = (e: React.ChangeEvent<HTMLInputElement>) => {
        !isValidEmail(e.target.value)
            ? setError('Email is invalid')
            : setError('')

        setEmailUser((prevState: emailUserProps) => ({
            ...prevState,
            email: e.target.value,
        }))
    }

    const emailuserSend = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        axios
            .post(
                'https://my-json-server.typicode.com/kznkv-skillup/server/orders',
                { email: emailUser.email }
            )
            .then((res) => res.data)

        setFormState(true)
        setEmailUser({ email: '' })
    }

    return (
        <div onMouseLeave={() => setFormState(false)}>
            <form
                onSubmit={emailuserSend}
                className={
                    error === 'Email is invalid'
                        ? 'scroll-group error-active'
                        : 'scroll-group'
                }
            >
                <input
                    className="scroll-input"
                    name="email"
                    type="email"
                    placeholder="Your Email"
                    required
                    value={emailUser.email}
                    onChange={handleEmailUser}
                />
                {error && <span className="error-email">* {error}</span>}
                <IconButton
                    color="inherit"
                    sx={{
                        bgcolor: '#fff',
                        paddingRight: '20px',
                        borderRadius: '0',
                        width: '20%',
                    }}
                    type="submit"
                >
                    <SendIcon />
                </IconButton>
                <div
                    className={
                        formState ? 'modal-email modal-active' : 'modal-email'
                    }
                >
                    <span>you have successfully subscribed</span>
                </div>
            </form>
        </div>
    )
}

export default FormEmail
