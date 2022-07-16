import React, { useEffect, useState } from 'react'
import Grid from '@material-ui/core/Grid'
import Product from './Product'
import useStyles from '../styles/productListStyle'
import ProductService from '../services/product.service'

const ProductList = ({addToBucket}) => {
    const [products, setProducts] = useState([])
    const classes = useStyles()

    useEffect(() => {
        ProductService.getAllProducts().then(
            res => {
                setProducts(res.data)
            }).catch(
            e => {
                console.log(e)
            })
    }, [])
    return (
        <main className={classes.content}>
            <div className={classes.toolbar} />
            <Grid container justify="center" spacing={4}>
                {products.map(product => (
                    <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                        <Product product={product} addToBucket={addToBucket}/>
                    </Grid>
                ))}
            </Grid>
        </main>
    )
}

export default ProductList