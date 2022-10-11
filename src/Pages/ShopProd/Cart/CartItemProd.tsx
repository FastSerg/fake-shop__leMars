import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined'
import { useAppDispatch, useAppSelector } from 'redux/hooks'
import {
    changeProductQuantity,
    removeProductsCart,
} from 'redux/productsCartReducer'
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'

type Props = {
    img: string
    alt: string
    nameProduct: string
    price: number
    count: number
    id: number
}

const CartItemProd = ({ img, alt, nameProduct, price, count, id }: Props) => {
    const dispatch = useAppDispatch()
    const countState = useAppSelector((state) => state.cartProductsState[id])

    return (
        <>
            <div className="cart-container">
                <div className="cart-image">
                    <img src={img} alt={alt} />
                </div>
                <div className="scroll-products">{nameProduct}</div>
                <div className="price">£ {price}</div>
                <div className="quantity">
                    <span>{countState}</span>
                    <div className="flex-button">
                        <ArrowDropUpIcon
                            sx={{ fontSize: '15px', cursor: 'pointer' }}
                            onClick={() =>
                                dispatch(
                                    changeProductQuantity({
                                        id: id,
                                        count: count + 1,
                                    })
                                )
                            }
                        />
                        <ArrowDropDownIcon
                            sx={{ fontSize: '15px', cursor: 'pointer' }}
                            onClick={() =>
                                dispatch(
                                    changeProductQuantity({
                                        id: id,
                                        count: count > 0 ? count - 1 : 0,
                                    })
                                )
                            }
                        />
                    </div>
                </div>

                <div className="">£ {countState * price}</div>
                <div className="">
                    <DeleteForeverOutlinedIcon
                        onClick={() => dispatch(removeProductsCart(id))}
                        sx={{ cursor: 'pointer' }}
                    />
                </div>
            </div>
        </>
    )
}

export default CartItemProd
