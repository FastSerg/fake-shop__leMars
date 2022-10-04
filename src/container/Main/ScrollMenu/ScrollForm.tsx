import React from 'react'
import { Typography, IconButton } from '@mui/material'
import SendIcon from '@mui/icons-material/Send'
import FormEmail from 'components/FormEmail/FormEmail'

type Props = {}

const ScrollForm = (props: Props) => {
    return (
        <>
            <div className="fon-scroll">
                <Typography
                    sx={{
                        fontSize: '24px',
                        lineHeight: '34px',
                        fontWeight: '600',
                        display: 'block',
                        padding: '10px 0',
                    }}
                >
                    Join
                </Typography>
                <FormEmail />
            </div>
        </>
    )
}

export default ScrollForm
