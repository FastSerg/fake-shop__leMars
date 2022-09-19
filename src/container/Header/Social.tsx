import React from 'react'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import FacebookIcon from '@mui/icons-material/Facebook'
import TwitterIcon from '@mui/icons-material/Twitter'
// import { NavLink } from 'react-router-dom'

const arrSocial = [
    { id: 1, name: <FacebookIcon />, src: 'https://www.facebook.com/' },
    { id: 2, name: <TwitterIcon />, src: 'https://twitter.com/' },
    { id: 3, name: <LinkedInIcon />, src: 'https://www.linkedin.com/' },
]

type Props = { name?: any; id?: number; src?: string }

export const Social = (props: Props) => {
    return (
        <div className="social">
            {arrSocial.map(({ id, name, src }: Props) => (
                <div key={id}>
                    <a href={src} target="_blank">
                        {name}
                    </a>{' '}
                </div>
            ))}
        </div>
    )
}
