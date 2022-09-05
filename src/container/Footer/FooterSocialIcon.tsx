import React from 'react'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import FacebookIcon from '@mui/icons-material/Facebook'
import TwitterIcon from '@mui/icons-material/Twitter'
import { Grid } from '@mui/material'

type Props = {}

const FooterSocialIcon = (props: Props) => {
    return (
        <Grid item md={2}>
            <Grid item md={12}>
                <h6 className="widget-title">SOCIAL ICON</h6>
            </Grid>
            <Grid
                item
                md={12}
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    gap: '20px',
                }}
            >
                <FacebookIcon sx={{ fontSize: '2rem' }} />
                <TwitterIcon sx={{ fontSize: '2rem' }} />
                <LinkedInIcon sx={{ fontSize: '2rem' }} />
            </Grid>
        </Grid>
    )
}

export default FooterSocialIcon
