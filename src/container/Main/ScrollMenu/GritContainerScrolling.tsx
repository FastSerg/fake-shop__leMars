import React from 'react'
import { Grid } from '@mui/material'
import './GridContainerScrolling.scss'
import ScrollForm from './ScrollForm'
import ScrollGalleryPost from './ScrollGalleryPost'
import ScrollSocialIcon from './ScrollSocialIcon'

type Props = {}

const GritContainerScrolling = (props: Props) => {
    return (
        <>
            <Grid
                container
                sx={{ marginLeft: '15px', position: 'sticky', top: '20px' }}
            >
                <ScrollForm />
                <ScrollGalleryPost />
                <ScrollSocialIcon />
            </Grid>
        </>
    )
}

export default GritContainerScrolling
