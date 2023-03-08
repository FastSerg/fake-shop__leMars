import React from 'react'
import './Container.scss'
import { Grid } from '@mui/material'
import GridItemCartTop from '../GridItemCartTop/GridItemCartTop'
import GritContainerScrolling from '../ScrollMenu/GritContainerScrolling'
import GridContainerMain from '../CardMainContent/GridContainerMain'
import { motion } from 'framer-motion'

type Props = {}

const Conteiner = (props: Props) => {
    return (
        <>
            <motion.div
                initial={'hidden'}
                whileInView={'visible'}
                className="container"
            >
                <Grid container spacing={1} sx={{ paddingTop: '70px' }}>
                    <Grid item md={9}>
                        <GridItemCartTop />
                        <GridContainerMain />
                    </Grid>
                    <Grid item md={3}>
                        <GritContainerScrolling />
                    </Grid>
                </Grid>
            </motion.div>
        </>
    )
}

export default Conteiner
