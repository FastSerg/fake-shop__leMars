import React from 'react'
import { Grid } from '@mui/material'

type Props = {}

const FooterBottom = (props: Props) => {
    return (
        <div className="footer-bottom">
            <Grid item md={12} sx={{ textAlign: 'center' }}>
                <span>© 2022 All Rights Reserved.</span>
            </Grid>
        </div>
    )
}

export default FooterBottom
