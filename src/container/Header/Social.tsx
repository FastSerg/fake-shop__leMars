import React from 'react'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import FacebookIcon from '@mui/icons-material/Facebook'
import TwitterIcon from '@mui/icons-material/Twitter'

const arrSocial = [
    { id: 1, name: <FacebookIcon /> },
    { id: 2, name: <TwitterIcon /> },
    { id: 3, name: <LinkedInIcon /> },
]

type Props = { name?: any; id?: number }

export const Social = (props: Props) => {
    return (
        <div className="social">
            {arrSocial.map(({ id, name }: Props) => (
                <span key={id}>{name}</span>
            ))}
        </div>
    )
}
