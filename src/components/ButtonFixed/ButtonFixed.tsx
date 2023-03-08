import React, { useState } from 'react'
import SupportAgentIcon from '@mui/icons-material/SupportAgent'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import { motion, AnimatePresence } from 'framer-motion'
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
                    <AnimatePresence>
                        <motion.button
                            className={className}
                            onMouseEnter={() => change(id)}
                            onMouseLeave={() => change(id)}
                        >
                            {icon}
                            {fixedState[id] ? (
                                <motion.span
                                    initial={{ opacity: 0, width: 0 }}
                                    animate={{ opacity: 1, width: '100%' }}
                                    exit={{ opacity: 0, width: 0 }}
                                    transition={{ duration: 2 }}
                                >
                                    {text}
                                </motion.span>
                            ) : null}
                        </motion.button>
                    </AnimatePresence>
                </div>
            ))}
        </>
    )
}

export default ButtonFixed
