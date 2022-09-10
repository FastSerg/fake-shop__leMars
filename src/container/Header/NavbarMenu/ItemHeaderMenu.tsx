import React from 'react'
// import {
//     Grid,
//     CardActionArea,
//     CardMedia,
//     Card,
//     CardContent,
//     Typography,
// } from '@mui/material'

// const categoryList: CategoryProps[] = [
//     { name: 'All', id: 1 },
//     { name: 'BEAUTY', id: 2 },
//     { name: 'FASHION', id: 3 },
//     { name: 'LIFESTYLE', id: 4 },
//     { name: 'TRAVEL', id: 5 },
// ]
// type CategoryProps = { name: string; id: number }

// type Props = {}

// const ItemHeaderMenu = (props: Props) => {
//     return (
//         <div className="lage-menu__item ">
//                         <Grid
//                             container
//                             spacing={1}
//                             sx={{ textAlign: 'center' }}
//                         >
//                             <Grid item md={4}>
//                                 <Card sx={{ maxWidth: '100%' }}>
//                                     <CardActionArea>
//                                         <CardMedia
//                                             component="img"
//                                             height="100%"
//                                             image="/img/wooman_legs.jpg"
//                                             alt="man_with_bag"
//                                         />
//                                         <CardContent>
//                                             <Typography
//                                                 sx={{
//                                                     fontSize: '12px',
//                                                     lineHeight: '24px',
//                                                     marginBottom: '10px',
//                                                     fontWeight: '600',
//                                                     color: 'red',
//                                                     textAlign: 'center',
//                                                     letterSpacing: '5px',
//                                                 }}
//                                                 variant="h6"
//                                                 component="div"
//                                             >
//                                                 FASHION
//                                             </Typography>
//                                             <Typography
//                                                 variant="inherit"
//                                                 color="#2b2d2e"
//                                                 sx={{
//                                                     fontSize: '20px',

//                                                     marginBottom: '10px',
//                                                     fontWeight: '600',
//                                                     textAlign: 'center',
//                                                 }}
//                                             >
//                                                 Ready for the Summer
//                                             </Typography>
//                                         </CardContent>
//                                     </CardActionArea>
//                                 </Card>
//                             </Grid>
//                             <Grid item md={4}>
//                                 <Card sx={{ maxWidth: '100%' }}>
//                                     <CardActionArea>
//                                         <CardMedia
//                                             component="img"
//                                             height="100%"
//                                             image="/img/sity_palm.jpg"
//                                             alt="man_with_bag"
//                                         />
//                                         <CardContent>
//                                             <Typography
//                                                 sx={{
//                                                     fontSize: '12px',
//                                                     lineHeight: '24px',
//                                                     marginBottom: '10px',
//                                                     fontWeight: '600',
//                                                     color: 'red',
//                                                     textAlign: 'center',
//                                                     letterSpacing: '5px',
//                                                 }}
//                                                 variant="h6"
//                                                 component="div"
//                                             >
//                                                 LIFESTYLE
//                                             </Typography>
//                                             <Typography
//                                                 variant="inherit"
//                                                 color="#2b2d2e"
//                                                 sx={{
//                                                     fontSize: '20px',

//                                                     marginBottom: '10px',
//                                                     fontWeight: '600',
//                                                     textAlign: 'center',
//                                                 }}
//                                             >
//                                                 Sonoma Valley Lancome
//                                             </Typography>
//                                         </CardContent>
//                                     </CardActionArea>
//                                 </Card>
//                             </Grid>
//                             <Grid item md={4}>
//                                 <Card sx={{ maxWidth: '100%' }}>
//                                     <CardActionArea>
//                                         <CardMedia
//                                             component="img"
//                                             height="100%"
//                                             image="/img/man_see.jpg"
//                                             alt="man_with_bag"
//                                         />
//                                         <CardContent>
//                                             <Typography
//                                                 sx={{
//                                                     fontSize: '12px',
//                                                     lineHeight: '24px',
//                                                     marginBottom: '10px',
//                                                     fontWeight: '600',
//                                                     color: 'red',
//                                                     textAlign: 'center',
//                                                     letterSpacing: '5px',
//                                                 }}
//                                                 variant="h6"
//                                                 component="div"
//                                             >
//                                                 BEAUTY
//                                             </Typography>
//                                             <Typography
//                                                 variant="inherit"
//                                                 color="#2b2d2e"
//                                                 sx={{
//                                                     fontSize: '20px',

//                                                     marginBottom: '10px',
//                                                     fontWeight: '600',
//                                                     textAlign: 'center',
//                                                 }}
//                                             >
//                                                 New Year Creativity
//                                             </Typography>
//                                         </CardContent>
//                                     </CardActionArea>
//                                 </Card>
//                             </Grid>
//                         </Grid>
//                     </div>
// }

// export default ItemHeaderMenu
