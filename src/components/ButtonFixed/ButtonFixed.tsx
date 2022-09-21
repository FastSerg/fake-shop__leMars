import React, { useState } from 'react'
import SupportAgentIcon from '@mui/icons-material/SupportAgent'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import './ButtomFixed.scss'

// const btnContent = [
//     { className: 'btn-support', text: 'SUPPORT', id: 1 },
//     { className: 'btn-buy', text: 'BUY NOW', id: 2 },
// ]

// type Props2 = { className: string; text: string; id: number }
// type fixedPropc = { [id: number]: boolean }

const ButtonFixed = () => {
    const [fixedState, setFixedState] = useState<boolean>(false)

    console.log()
    return (
        <>
            <button
                className={'btn-support'}
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
