import React from 'react'
import '../../container/Header/Header.scss'
import { NavbarMenu } from '../../container/Header/NavbarMenu/NavbarMenu'
import { Social } from '../../container/Header/Social'
import { Logo } from '../../container/Header/Logo'
import { NavLink } from 'react-router-dom'
import Header from 'container/Header/Header'

type Props = {
    active: { [id: number]: boolean }
    changeState: (id: number) => void
}

const ContactUs = ({ changeState, active }: Props) => {
    return (
        <>
            <header className="header">
                <div className="header-container">
                    <div className="navbar">
                        <NavLink to="/">
                            <Logo />
                        </NavLink>
                        <NavbarMenu active={active} changeState={changeState} />
                        <Social />
                    </div>
                </div>
            </header>
        </>
    )
}

export default ContactUs
