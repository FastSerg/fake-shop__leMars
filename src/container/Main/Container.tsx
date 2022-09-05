import React from 'react'
import './Container.scss'
import { Grid } from '@mui/material'
import GridItemCartTop from './GridItemCartTop'
import GridContainerMain from './GridContainerMain'
import GritContainerScrolling from './ScrollMenu/GritContainerScrolling'
import GridContainerBottom from './GridContainerBottom'

type Props = {}

const Conteiner = (props: Props) => {
    return (
        <>
            <div className="container">
                <Grid container spacing={1} sx={{ paddingTop: '70px' }}>
                    <Grid item md={9}>
                        <GridItemCartTop />
                        <GridContainerMain />
                    </Grid>
                    <Grid item md={3}>
                        <GritContainerScrolling />
                    </Grid>
                </Grid>
            </div>
            <div className="container bottom">
                <GridContainerBottom />
            </div>
        </>
    )
}

export default Conteiner
