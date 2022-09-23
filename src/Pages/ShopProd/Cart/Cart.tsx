import React from 'react'

type Props = {
    active: { [id: number]: boolean }
    changeState: (id: number) => void
    isActive?: boolean
}

const Cart = ({ active, changeState, isActive = false }: Props) => {
    return <>Cart</>
}

export default Cart
