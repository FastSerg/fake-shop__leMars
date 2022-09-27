import React from 'react'
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined'
import { useAppDispatch } from 'redux/hooks'
import { removeProductsCart } from 'redux/productsCartReducer'

type Props = {
    img: string
    alt: string
    nameProduct: string
    price: number
    // count: number
    id: number
}

const CartItemProd = ({ img, alt, nameProduct, price, id }: Props) => {
    const dispatch = useAppDispatch()
    return (
        <div className="cart-container">
            <div className="cart-image">
                <img src={img} alt={alt} />
            </div>
            <div className="scroll-products">{nameProduct}</div>
            <div className="price">{price}</div>
            <div className="quantity">{1}</div>
            <div className="">{price * 2}</div>
            <div className="">
                <DeleteForeverOutlinedIcon
                    onClick={() => dispatch(removeProductsCart(id))}
                    sx={{ cursor: 'pointer' }}
                />
            </div>
        </div>
    )
}

export default CartItemProd
