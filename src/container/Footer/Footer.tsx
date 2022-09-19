import React from 'react'
import './Footer.scss'
import { LogoFooter } from './FooterMenu/LogoFooter'
import { Grid } from '@mui/material'
import FooterPost from './FooterMenu/FooterPost'
import FooterBlogs from './FooterMenu/FooterBlogs'
import FooterSocialIcon from './FooterMenu/FooterSocialIcon'
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
