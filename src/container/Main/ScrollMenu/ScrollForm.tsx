import React from 'react'
import { Typography } from '@mui/material'
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
