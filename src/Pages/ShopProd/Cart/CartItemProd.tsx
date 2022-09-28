import React, { useState } from 'react'
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined'
import { useAppDispatch } from 'redux/hooks'
import { removeProductsCart } from 'redux/productsCartReducer'
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
    const [countState, setCountState] = useState<number>(count)

    const onIncrementClick = () => {
        setCountState((prevState: number) => prevState + 1)
    }

    const onDecrementClick = () => {
        setCountState((prevState: number) =>
            prevState > 0 ? prevState - 1 : 0
        )
    }
    console.log(countState)
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
                            onClick={() => onIncrementClick()}
                        />
                        <ArrowDropDownIcon
                            sx={{ fontSize: '15px', cursor: 'pointer' }}
                            onClick={() => onDecrementClick()}
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
