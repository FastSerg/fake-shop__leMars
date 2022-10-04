import React from 'react'
import './FormEmail.scss'
import { IconButton } from '@mui/material'
import SendIcon from '@mui/icons-material/Send'

type Props = {}

const FormEmail = (props: Props) => {
    return (
        <>
            <form className="scroll-group">
                <input
                    className="scroll-input"
                    name="email"
                    type="email"
                    placeholder="Your Email"
                    required
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
            </form>
        </>
    )
}

export default FormEmail
