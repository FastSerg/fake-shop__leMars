import React from 'react'
import { motion } from 'framer-motion'

type Props = {}

export const Logo = (props: Props) => {
    return (
        <motion.div
            className="logo"
            whileHover={{
                scale: 1.1,
            }}
            transition={{ duration: 0.7 }}
        >
            <img src="/img/logo.png" alt="Le Mars" />
        </motion.div>
    )
}
