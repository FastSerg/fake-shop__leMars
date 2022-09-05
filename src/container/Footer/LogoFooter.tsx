import React from 'react'
import { Grid } from '@mui/material'

type Props = {}

export const LogoFooter = (props: Props) => {
    return (
        <Grid item md={2}>
            <div className="logo">
                <img src="/img/logo-white.png" alt="Le Mars" />
            </div>
        </Grid>
    )
}
