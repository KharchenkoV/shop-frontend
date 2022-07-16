import React, { useState } from 'react'
import { Grid, Paper, Avatar, TextField, Button } from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import useStyles from '../styles/loginStyle'
import AuthService from '../services/auth.service'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const classes = useStyles()
    const navigate = useNavigate()
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const handleLogin = (e) => {
        e.preventDefault()
        AuthService.login(username, password).then(
            () => {
                navigate('/')
                window.location.reload()
            },
        ).catch(
            e => {
                console.log(e)
            }
        )
    }
    return (
        <Grid>
            <Paper elevation={10} className={classes.paper}>
                <Grid align='center'>
                    <Avatar className={classes.avatar}><LockOutlinedIcon /></Avatar>
                    <h2>Вхід</h2>
                </Grid>
                <TextField
                    label='Логін'
                    placeholder='Введіть логін'
                    value={username}
                    onChange={e => setUsername(e.target.value)}
                    variant='outlined'
                    fullWidth required />
                <TextField
                    label='Пароль'
                    placeholder='Введіть пароль'
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    variant='outlined'
                    fullWidth required />
                <Button
                    type='submit'
                    color='primary'
                    variant='contained'
                    className={classes.btn}
                    onClick={handleLogin}
                    fullWidth>Ввійти</Button>
            </Paper>
        </Grid>
    )
}

export default Login