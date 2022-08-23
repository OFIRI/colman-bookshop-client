import { Button, ButtonBase, Container, Divider, Grid, Typography } from "@mui/material"
import { useContext } from "react"
import { ShoppingContextStore } from "../../contexts/ShoppingContext/ShoppingContext"
import './ViewCart.css';

const ViewCart = () => {
    const { shoppingCart, buyItems } = useContext(ShoppingContextStore);

    const price = Object.keys(shoppingCart).reduce((prev, curr) => prev + (shoppingCart[curr].quantity * shoppingCart[curr].book.price) , 0);

    return <Container style={{marginTop: "2vh"}}>
        <Typography className="cart-title" variant="h4">Your cart:</Typography>
        { shoppingCart && Object.keys(shoppingCart).map((itemId) => (<>
        <Grid container wrap="nowrap" justifyContent="space-between" alignItems="center" style={{margin: "1vh 0"}}>
            <Grid item><Typography variant="h6">{shoppingCart[itemId].book.title}</Typography><Typography variant="span" style={{color: '#ccc'}}>{`(Quantity: ${shoppingCart[itemId].quantity})`}</Typography></Grid>
            <Grid item><Typography variant="h6">{shoppingCart[itemId].book.price}$</Typography></Grid>
        </Grid>
        <Divider />
        </>
        ))}
        <Grid container wrap="nowrap" justifyContent="space-between" alignItems="center">
            <Grid item style={{margin: "1vh 0"}}>
                <Typography variant="h6" className="final-price">
                    Final price:
                </Typography>
            </Grid>
            <Grid item style={{margin: "1vh 0"}}>
                <Typography variant="h6" className="final-price">
                    {price}$
                </Typography>
            </Grid>
        </Grid>
        <Grid container wrap="nowrap" justifyContent="end" alignItems="center">
            <Grid item style={{margin: "1vh 0"}}>
                <Button variant="contained" onClick={() => buyItems(price)}>Purchase</Button>
            </Grid>
        </Grid>
    </Container>
}

export default ViewCart;