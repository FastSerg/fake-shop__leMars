import React, { useState } from 'react'
import { Button, Grid } from '@mui/material'
import { NavLink } from 'react-router-dom'
import { Social } from 'container/Header/Social'
import { Logo } from 'container/Header/Logo'
import { NavbarMenu } from 'container/Header/NavbarMenu/NavbarMenu'
import ModalWindow from 'Pages/Subscribe/ModalWindow'
import Subscribe from 'Pages/Subscribe/Subscribe'

type Props = {}

const HeaderTop = () => {
    const [modalActive, setModalActive] = useState<boolean>(false)

    return (
        <>
            <header className="header">
                <div className="header-container">
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
                    <div className="navbar-menu__bottom">
                        <NavbarMenu />
                    </div>{' '}
                </div>
                <Subscribe active={modalActive} setActive={setModalActive}>
                    <ModalWindow />
                </Subscribe>
            </header>
        </>
    )
}

export default HeaderTop
