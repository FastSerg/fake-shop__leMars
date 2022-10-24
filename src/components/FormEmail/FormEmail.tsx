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

    const handleEmailUser = (e: React.ChangeEvent<HTMLInputElement>) => {
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
            <form onSubmit={emailuserSend} className="scroll-group">
                <input
                    className="scroll-input"
                    name="email"
                    type="email"
                    placeholder="Your Email"
                    required
                    value={emailUser.email}
                    onChange={handleEmailUser}
                />
                <IconButton
                    color="inherit"
                    sx={{
                        bgcolor: '#fff',
                        paddingRight: '20px',
                        borderRadius: '0',
                        height: 'inherit',
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
