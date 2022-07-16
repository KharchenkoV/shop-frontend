import React, { useState } from 'react'
import { Grid, Paper, Avatar, TextField, Button } from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import useStyles from '../styles/loginStyle'
import AuthService from '../services/auth.service'
import { useNavigate } from 'react-router-dom'


const Register = () => {
  const classes = useStyles()
  const navigate = useNavigate()
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleRegister = (e) => {
    e.preventDefault()
    AuthService.register(username, email, password).then(
      () => {
        navigate('/login')
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
          <h2>Реєстрація</h2>
        </Grid>
        <TextField
          label='Логін'
          placeholder='Введіть логін'
          value={username}
          onChange={e => setUsername(e.target.value)}
          variant='outlined'
          fullWidth required />
          <TextField
          label='Пошта'
          placeholder='Введіть електрону пошту'
          value={email}
          onChange={e => setEmail(e.target.value)}
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
          onClick={handleRegister}
          fullWidth>Зареєструвати</Button>
      </Paper>
    </Grid>
  )
};
export default Register;