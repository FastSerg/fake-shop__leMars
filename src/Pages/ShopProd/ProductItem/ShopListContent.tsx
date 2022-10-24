import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined'
import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined'
import { useAppDispatch, useAppSelector } from 'redux/hooks'
import { addCart } from 'redux/productsCartReducer'
import { changeStateButtons } from 'redux/buttonsLikeState'

type Props = {
    id: number
    img: string
    alt: string
    discount?: number
    nameProduct: string
    price: number
}

const ShopListContent = ({
    id,
    img,
    alt,
    discount,
    nameProduct,
    price,
}: Props) => {
    const dispatch = useAppDispatch()
    const isLike = useAppSelector((state) => state.buttonsState)
    const isCartContent = useAppSelector((state) => state.cartProductsState)

    return (
        <div className="products-grid" key={id}>
            <div className="product-list">
                <img src={img} alt={alt} />
                <div className={discount === undefined ? 'd-none' : 'discount'}>
                    <span className="discount-value">{discount}%</span>
                </div>
            </div>
            <div className="grid-info">
                <h5>{nameProduct}</h5>
                <span className="price">
                    {discount ? (
                        <span className="price-sale">
                            £{price + (price * discount) / 100}
                        </span>
                    ) : null}
                    £{price.toFixed(2)}
                </span>
                <p className="grid-text">
                    Nulla facilisi. Donec sodales diam enim, a dignissim nunc
                    facilisis nec. Pellentes tellus lorem. Phasellus ultrices
                    consectetur magna, ut gravida arcu pulvinar sit amet.
                    Vivamus ultrices porttitor mauris, at mattis neque elementum
                    vel. Suspendisse magna sapien, dignissim vel tortor ut,
                    hendrerit pellentesque velit. Mauris porttitor maximus gilla
                    massa imperdiet in.
                </p>
                <div className="grid-icons">
                    <AddShoppingCartOutlinedIcon
                        onClick={() => dispatch(addCart(id))}
                        sx={
                            isCartContent[id]
                                ? {
                                      fontSize: '38px',
                                      padding: '5px',
                                      border: '1px solid black',
                                      borderRadius: '20px',
                                      cursor: 'pointer',
                                      bgcolor: 'rgba(0, 255, 200, 0.3)',
                                      transform: 'scale(1.1)',
                                  }
                                : {
                                      fontSize: '38px',
                                      padding: '7px',
                                      border: '1px solid black',
                                      borderRadius: '20px',
                                      cursor: 'pointer',
                                  }
                        }
                    />
                    <FavoriteOutlinedIcon
                        onClick={() => dispatch(changeStateButtons(id))}
                        sx={
                            isLike[id]
                                ? {
                                      fontSize: '38px',
                                      cursor: 'pointer',
                                      color: 'rgba(255, 0, 0, 0.8)',
                                      borderRadius: '20px',
                                      transform: 'scale(1.2)',
                                  }
                                : {
                                      fontSize: '38px',
                                      cursor: 'pointer',
                                      borderRadius: '20px',
                                  }
                        }
                    />
                </div>
            </div>
        </div>
    )
}

export default ShopListContent
