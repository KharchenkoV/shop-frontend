import React from 'react'
import { Container, Typography, Button, Grid, Table, TableContainer, TableBody, TableCell, TableHead, TableRow, Paper } from "@material-ui/core";

import useStyles from '../styles/bucketStyle'

const Bucket = ({ bucket, addToBucket, deleteFromBucket, deleteAllProductFromBucket, cleanBucket }) => {
    const classes = useStyles()
    const EmptyCart = () => (
        <Typography variant='subtitle1'>Ваш кошик пустий, щоб добавити щось перейдіть на сторінку з товарами!</Typography>
    )

    const FilledCart = () => (
        <>
            <Grid container spacing={3}>
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 700 }} aria-label="customized table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Товар</TableCell>
                                <TableCell align='right'>Ціна</TableCell>
                                <TableCell align='right'/>
                                <TableCell align='center'>Кількість</TableCell>
                                <TableCell/>
                                <TableCell >Дії</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {bucket.bucketDetails.map(item => (
                                <TableRow
                                    key={item.productId}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                    <TableCell component="th" scope="row">{item.title}</TableCell>
                                    <TableCell align='right'>{item.price}$</TableCell>
                                    <TableCell align='right'><Button type='button' onClick={() => deleteFromBucket(item.productId)}>-</Button></TableCell>
                                    <TableCell align='center'>{item.amount}</TableCell>
                                    <TableCell align='left'><Button type='button' onClick={() => addToBucket(item.productId)}>+</Button></TableCell>
                                    <TableCell><Button variant="contained" type="button" color="secondary" onClick={() => deleteAllProductFromBucket(item.productId)}>Видалити</Button></TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Grid>
            <div className={classes.cardDetails}>
                <Typography variant="h4">Загальна сума: {bucket.sum}</Typography>
                <div>
                    <Button className={classes.emptyButton} size="large" type="button" variant="contained" color="secondary" onClick={() => cleanBucket()}>Очистити кошик</Button>
                    <Button className={classes.checkout} size="large" type="button" variant="contained" color="primary">Купити</Button>
                </div>
            </div>

        </>
    )
    return (
        <Container>
            <div className={classes.toolbar} />
            <Typography className={classes.title} variant="h3" gutterBottom>Ваш кошик</Typography>
            {!bucket.amountProducts ? <EmptyCart /> : <FilledCart />}
        </Container>
    )
}

export default Bucket