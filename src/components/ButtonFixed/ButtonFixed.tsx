import React, { useState } from 'react'
import SupportAgentIcon from '@mui/icons-material/SupportAgent'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import './ButtomFixed.scss'

const btnContent = [
    {
        className: 'btn-support',
        text: 'SUPPORT',
        icon: <SupportAgentIcon sx={{ fontSize: '35px' }} />,
        id: 1,
    },
    {
        className: 'btn-buy',
        text: 'BUY NOW',
        id: 2,
        icon: <ShoppingCartIcon sx={{ fontSize: '35px' }} />,
    },
]

type Props2 = { className: string; text: string; id: number; icon: any }
type fixedPropc = { [id: number]: boolean }

const ButtonFixed = () => {
    const [fixedState, setFixedState] = useState<fixedPropc>({})

    const change = (id: number) => {
        setFixedState((prevState: fixedPropc) => ({
            ...prevState,
            [id]: !prevState[id],
        }))
    }
    return (
        <>
            {btnContent.map(({ className, id, text, icon }: Props2) => (
                <div key={id}>
                    <button
                        className={className}
                        onMouseEnter={() => change(id)}
                        onMouseLeave={() => change(id)}
                    >
                        {icon} {fixedState[id] ? <span>{text}</span> : null}
                    </button>
                </div>
            ))}
        </>
    )
}

export default ButtonFixed
