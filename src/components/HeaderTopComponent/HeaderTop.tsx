import React from 'react'
import { Button, Grid } from '@mui/material'
import { NavLink } from 'react-router-dom'
import { Social } from 'container/Header/Social'
import { Logo } from 'container/Header/Logo'

type Props = {
    setModalActive: (modalActive: boolean) => void
}

const HeaderTop = ({ setModalActive }: Props) => {
    return (
        <>
            <Grid container sx={{ alignItems: 'center' }}>
                <Grid item md={3}>
                    <Button
                        variant="contained"
                        sx={{
                            background: 'black',
                            borderRadius: '20px',
                        }}
                        onClick={() => setModalActive(true)}
                    >
                        Subscribe
                    </Button>
                </Grid>
                <Grid item md={6}>
                    <NavLink to="/">
                        <Logo />
                    </NavLink>
                </Grid>
                <Grid item md={3}>
                    <Social />
                </Grid>
            </Grid>
        </>
    )
}

export default HeaderTop
