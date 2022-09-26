import React from 'react'
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined'

type Props = {
    img: string
    alt: string
    nameProduct: string
    price: number
    count: number
}

const CartItemProd = ({ img, alt, nameProduct, price, count }: Props) => {
    return (
        <div className="cart-container">
            <div className="cart-image">
                <img src={img} alt={alt} />
            </div>
            <div className="scroll-products">{nameProduct}</div>
            <div className="price">{price}</div>
            <div className="quantity">{count}</div>
            <div className="">4444</div>
            <div className="">
                <DeleteForeverOutlinedIcon sx={{ cursor: 'pointer' }} />
            </div>
        </div>
    )
}

export default CartItemProd
