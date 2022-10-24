import React, { useState } from 'react'
import {
    Card,
    CardContent,
    Grid,
    TextField,
    Typography,
    Button,
} from '@mui/material'
import axios from 'axios'

type Props = {}
type setUserSubscribeProps = {
    name: string
    email: string
}
const ModalWindow = (props: Props) => {
    const [formState, setFormState] = useState<boolean>(false)

    const [userSubscribe, setUserSubscribe] = useState<setUserSubscribeProps>({
        name: '',
        email: '',
    })

    const handleNamelUser = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUserSubscribe((prevState: setUserSubscribeProps) => ({
            ...prevState,
            name: e.target.value,
        }))
    }

    const handleEmailUser = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUserSubscribe((prevState: setUserSubscribeProps) => ({
            ...prevState,
            email: e.target.value,
        }))
    }

    const SendSubscribe = (e: React.FocusEvent<HTMLFormElement>) => {
        e.preventDefault()
        axios
            .post(
                'https://my-json-server.typicode.com/kznkv-skillup/server/orders',
                { name: userSubscribe.name, email: userSubscribe.email }
            )
            .then((res) => res.data)
            .then(({ name, email }) => setUserSubscribe({ name, email }))
        setFormState(true)
        setUserSubscribe({ name: '', email: '' })
    }

    return (
        <>
            <Card>
                <CardContent>
                    <Typography
                        sx={{
                            fontSize: '28px',
                            fontWeight: '600',
                            letterSpacing: '2.5px',
                            textAlign: 'center',
                            marginBottom: '25px',
                        }}
                    >
                        Join Us To Day
                    </Typography>
                    <Typography
                        gutterBottom
                        color="textSecondary"
                        variant="body2"
                        component="p"
                    >
                        Receive Only The Best Posts Via Email
                    </Typography>
                    {formState ? (
                        <div className="message-subscribe">
                            <span>you have successfully subscribed</span>
                        </div>
                    ) : (
                        <form onSubmit={SendSubscribe}>
                            <Grid container spacing={2}>
                                <Grid item md={12}>
                                    <TextField
                                        label="Name"
                                        placeholder="Your Name"
                                        variant="outlined"
                                        fullWidth
                                        required
                                        value={userSubscribe.name}
                                        onChange={handleNamelUser}
                                    />
                                </Grid>
                                <Grid item md={12}>
                                    <TextField
                                        label="Email"
                                        type="email"
                                        placeholder="Your Email Address"
                                        variant="outlined"
                                        required
                                        fullWidth
                                        value={userSubscribe.email}
                                        onChange={handleEmailUser}
                                        sx={{
                                            borderRadius: '20px',
                                        }}
                                    />
                                </Grid>

                                <Grid item md={12} sx={{ marginTop: '10px' }}>
                                    <Button
                                        type="submit"
                                        variant="contained"
                                        fullWidth
                                        sx={{
                                            background: 'black',
                                            padding: ' 14px 30px',
                                        }}
                                    >
                                        SUBSCRIBE
                                    </Button>
                                </Grid>
                            </Grid>
                        </form>
                    )}
                </CardContent>
            </Card>
        </>
    )
}

export default ModalWindow
