import React, { useState } from 'react'
import SupportAgentIcon from '@mui/icons-material/SupportAgent'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import './ButtomFixed.scss'

type Props = {}

const ButtonFixed = (props: Props) => {
    const [fixedState, setFixedState] = useState<boolean>(false)

    return (
        <>
            <button
                className="btn-support"
                onMouseEnter={() => setFixedState(true)}
                onMouseLeave={() => setFixedState(false)}
            >
                <SupportAgentIcon sx={{ fontSize: '35px' }} />{' '}
                {fixedState ? <span>SUPPORT</span> : null}
            </button>
            <button
                className="btn-buy"
                onMouseEnter={() => setFixedState(true)}
                onMouseLeave={() => setFixedState(false)}
            >
                <ShoppingCartIcon sx={{ fontSize: '35px' }} />
                {fixedState ? <span>BUY NOW</span> : null}
            </button>
        </>
    )
}

export default ButtonFixed
