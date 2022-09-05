import React from 'react'
import './Footer.scss'
import { LogoFooter } from './LogoFooter'
import { Grid } from '@mui/material'
import FooterPost from './FooterPost'
import FooterBlogs from './FooterBlogs'
import FooterSocialIcon from './FooterSocialIcon'
import FooterBottom from './FooterBottom'

type Props = {}

const Footer = (props: Props) => {
    return (
        <div className="footer-site">
            <div className="footer-container">
                <div className="footer-top">
                    <Grid container spacing={2}>
                        <LogoFooter />
                        <FooterPost />
                        <FooterBlogs />
                        <FooterSocialIcon />
                    </Grid>
                </div>
            </div>
            <FooterBottom />
        </div>
    )
}

export default Footer
