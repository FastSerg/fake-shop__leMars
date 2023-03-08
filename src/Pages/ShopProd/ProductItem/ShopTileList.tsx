import { Grid } from '@mui/material'
import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined'
import { addCart } from 'redux/productsCartReducer'
import { useAppDispatch, useAppSelector } from 'redux/hooks'
import { changeStateButtons } from 'redux/buttonsLikeState'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

type Props = {
    id: number
    img: string
    alt: string
    discount?: number
    nameProduct: string
    price: number
}

export const ShopTileList = ({
    id,
    img,
    alt,
    discount,
    nameProduct,
    price,
}: Props) => {
    const dispatch = useAppDispatch()
    const cartShowState = useAppSelector((state) => state.buttonsState)
    const isCart = useAppSelector((state) => state.cartProductsState)

    const MProtoMain = {
        hidden: {
            opacity: 0,
        },
        visible: (custom: number) => ({
            opacity: 1,
            transition: { duration: 0.4, delay: custom * 0.2 },
        }),
        out: { opacity: 0, x: -500 },
    }
    return (
        <Grid
            item
            md={4}
            key={id}
            component={motion.div}
            initial={'hidden'}
            whileInView="visible"
            viewport={{ amount: 0.1, once: true }}
            variants={MProtoMain}
            custom={id * 0.5}
        >
            <div className="products">
                <div
                    className="product-list"
                    onMouseEnter={() => dispatch(changeStateButtons(id))}
                    onMouseLeave={() => dispatch(changeStateButtons(id))}
                >
                    <img src={img} alt={alt} />
                    <>
                        <AddShoppingCartOutlinedIcon
                            onClick={() => dispatch(addCart(id))}
                            sx={
                                cartShowState[id]
                                    ? {
                                          fontSize: '38px',
                                          padding: '5px',
                                          border: '1px solid white',
                                          borderRadius: '20px',
                                          position: 'absolute',
                                          color: 'white',
                                          top: '50%',
                                          left: 'Calc(50% - 15px)',
                                          opacity: '2',
                                          cursor: 'pointer',
                                          zIndex: '11',
                                      }
                                    : {
                                          fontSize: '38px',
                                          padding: '10px',
                                          border: '1px solid white',
                                          borderRadius: '20px',
                                          position: 'absolute',
                                          color: 'white',
                                          top: '50%',
                                          left: 'Calc(50% - 15px)',
                                          opacity: '0',
                                          zIndex: '0',
                                          cursor: 'pointer',
                                      }
                            }
                        />
                        {isCart[id] && cartShowState[id] ? (
                            <Link to="/cart">
                                <span
                                    style={{
                                        padding: '5px',
                                        borderRadius: '20px',
                                        position: 'absolute',
                                        color: 'white',
                                        top: '70%',
                                        left: 'Calc(50% - 35px)',
                                        opacity: '2',
                                        cursor: 'pointer',
                                        zIndex: '11',
                                    }}
                                >
                                    View Cart
                                </span>
                            </Link>
                        ) : null}
                    </>

                    <div className="overlay-product"></div>
                    <div
                        className={
                            discount === undefined ? 'd-none' : 'discount'
                        }
                    >
                        <span className="discount-value">{discount}%</span>
                    </div>
                </div>
                <div className="product-info">
                    <h5>{nameProduct}</h5>
                    <span className="price">
                        {discount ? (
                            <span className="price-sale">
                                £{price + (price * discount) / 100}
                            </span>
                        ) : null}
                        £{price.toFixed(2)}
                    </span>
                </div>
            </div>
        </Grid>
    )
}
