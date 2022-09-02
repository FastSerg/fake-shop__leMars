import React from 'react'
import { Grid, Card, CardMedia } from '@mui/material'

type Props = {}

const GridContainerBottom = (props: Props) => {
    return (
        <>
            <Grid
                container
                spacing={1}
                sx={{
                    paddingTop: '70px',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <Grid item md={6}>
                    <Card sx={{ maxWidth: '100%' }}>
                        <CardMedia
                            component="img"
                            height="565px"
                            image="/img/girl_in_glass.png"
                            alt="girl_in_glass"
                        />
                    </Card>
                </Grid>
                <Grid item md={6}>
                    <form
                        className="dzSubscribe dezPlaceAni dz-subscription"
                        action="#"
                        method="post"
                    >
                        <h2>Subscribe to My Blog</h2>
                        <div className="form-style subscribe">
                            <div className="input-group">
                                <input
                                    name="dzEmail"
                                    type="email"
                                    className="form-control"
                                    placeholder="Your Email"
                                ></input>
                                <div className="input-group-append">
                                    <button
                                        name="submit"
                                        value="Submit"
                                        type="submit"
                                        className="btn"
                                    >
                                        <i className="la la-paper-plane"></i>
                                        <span className="d-none dz-loading">
                                            <i className="la la-refresh"></i>
                                        </span>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="dz-subscription-msg font-18 m-t10"></div>
                    </form>
                </Grid>
            </Grid>
        </>
    )
}

export default GridContainerBottom

{
    /* <form className="dzSubscribe dezPlaceAni dz-subscription" action="#" method="post">
					<h2>Subscribe to My Blog</h2>
					<div className="form-style subscribe">
						<div className="input-group">
							<input name="dzEmail" required="required" type="email" className="form-control" placeholder="Your Email">
							<div className="input-group-append">
								<button name="submit" value="Submit" type="submit" className="btn"><i className="la la-paper-plane"></i><span className="d-none dz-loading"><i className="la la-refresh"></i></span></button>
							</div>
						</div>
					</div>
					<div className="dz-subscription-msg font-18 m-t10"></div>
</form> */
}
