import React from 'react'
import './Container.scss'
import { Grid } from '@mui/material'
import GridItemCartTop from './GridItemCartTop'

type Props = {}

const Conteiner = (props: Props) => {
    return (
        <div className="container">
            <Grid container spacing={1} sx={{ paddingTop: '70px' }}>
                <Grid item md={9}>
                    <GridItemCartTop />
                </Grid>
                <Grid item md={3}>
                    <div>sfs</div>
                    <div>Conteiner</div>{' '}
                </Grid>
            </Grid>
        </div>
    )
}

export default Conteiner
