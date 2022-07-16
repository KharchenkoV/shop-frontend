import React, { useEffect, useState } from 'react'
import { AppBar, Toolbar, IconButton, Badge, Button, Typography } from '@material-ui/core'
import { ShoppingCart } from '@material-ui/icons'
import {Link} from 'react-router-dom'

import logo from '../assets/commerce.png'
import useStyles from '../styles/navbarStyle'
import AuthService from '../services/auth.service'


const Navbar = ({amountProducts}) => {
    const classes = useStyles()
    const [currentUser, setCurrentUser] = useState(undefined)
    useEffect(() => {
        const user = AuthService.getCurrentUser()
        if (user) {
            setCurrentUser(user)
        }
    }, [])

    const logout = () => {
        AuthService.logout()
        window.location.reload()
    }
    return (
        <AppBar position="fixed" className={classes.appBar} color="inherit">
            <Toolbar>
                <Typography component={Link} to='/' variant="h6" className={classes.title} color="inherit">
                    <img src={logo} alt="Commerce.js" height="25px" className={classes.image} />
                    E-Commerce
                </Typography>

                <div className={classes.grow} />
                {currentUser ? (<>
                    <div className={classes.menu}>
                        <Button variant="outlined" color="inherit" className={classes.menuItem} onClick={logout}>
                            Вийти
                        </Button>
                    </div>

                    <div className={classes.button}>
                        <IconButton component={Link} to='/bucket' aria-label="Show cart items" color="inherit">
                            <Badge badgeContent={amountProducts} color="secondary">
                                <ShoppingCart />
                            </Badge>
                        </IconButton>
                    </div>
                </>
                ) : (
                    <div className={classes.menu}>
                        <Button variant="outlined"  color="inherit" href='/login' className={classes.menuItem}>
                            Вхід
                        </Button>
                        <Button variant="outlined"  color="inherit" href='/register' className={classes.menuItem}>
                            Реєстрація
                        </Button>
                    </div>
                )
                }
            </Toolbar>
        </AppBar>
    )
}

export default Navbar