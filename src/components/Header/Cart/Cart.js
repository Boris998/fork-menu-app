import * as React from "react";
import {useContext, useState} from "react";
import CartContext from "../../../store/cart-context";
import {Button, createTheme, Grid, responsiveFontSizes, Typography} from "@mui/material";
import CartItem from "./CartItem";
import cartIcon from "../../../assets/icons/cart.svg";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import Checkout from "./Checkout";

const Cart = () => {
    let theme = createTheme();
    theme = responsiveFontSizes(theme);
    const cartCtx = useContext(CartContext);

    const [openDialog, setOpenDialog] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isCheckout, setIsCheckout] = useState(false);
    const [didSubmit, setDidSubmit] = useState(false);

    const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
    const hasItems = cartCtx.items.length > 0;

    const handleOpenDialog = () => {
        setOpenDialog(true);
    };

    const handleCloseDialog = () => {
        setOpenDialog(false);
    };

    const cartAddItemHandler = item => {
        cartCtx.addItem({...item, amount: 1});
    }

    const cartRemoveItemHandler = id => {
        cartCtx.removeItem(id);
    }

    const orderHandler = () => {
        setIsCheckout(true);
    }

    const submitOrderHandler = async userData => {
        setIsSubmitting(true);
        await fetch('https://fork-menu-app-default-rtdb.europe-west1.firebasedatabase.app/orders.json', {
            method: 'POST',
            body: JSON.stringify({
                user: userData,
                orderedItems: cartCtx.items
            })
        });
        setIsSubmitting(false);
        setDidSubmit(true);
        cartCtx.clearCart();
    }

    const cartItems = <ul>{
        cartCtx.items.map(item =>
                <CartItem
                    key={item.id}
                    name={item.name}
                    description={item.description}
                    ingredients={item.ingredients}
                    amount={item.amount}
                    price={item.price}
                    onRemove={cartRemoveItemHandler.bind(null, item.id)}
                    onAdd={cartAddItemHandler.bind(null, item)}
                />
        )
    }
    </ul>;

    const modalActions =
        <DialogActions>
            {hasItems && <Button onClick={orderHandler}>Order</Button>}
            <Button onClick={handleCloseDialog}>Close</Button>
        </DialogActions>;

    const cartModalContent = <React.Fragment>
        {cartItems}
        <Grid item xs={12}>
            <span>Total amount</span>
            <span>{totalAmount}</span>
        </Grid>
        {!hasItems || (isCheckout && <Checkout onConfirm={submitOrderHandler}/>)}
        {isCheckout || modalActions}
    </React.Fragment>

    const isSubmittingModalContent = <p>Sending order data...</p>

    const didSubmitModalContent = <div>
        <Grid item xs={12}>
            <p>successful!!!</p>
            <Button onClick={handleCloseDialog}>Close</Button>
        </Grid>
    </div>

    return (
        <Grid item xs={12}>
            <Button onClick={handleOpenDialog}>
                <Typography theme={theme}
                            sx={{flexGrow: 1}}
                            style={{cursor: 'pointer'}}>
                    <img src={cartIcon} style={{height: '80px'}} alt='header cart'/>
                </Typography>
            </Button>
            <Dialog open={openDialog} onClose={handleCloseDialog} sx={{borderRadius: '25px'}}>
                <Typography variant={'h6'} sx={{background: 'radial-gradient(circle, rgba(49,77,77,0.5) 53%, rgba(35,55,91,0.7) 100%)', padding: '10px'}}>
                    {cartModalContent}
                    {isSubmitting && isSubmittingModalContent}
                    {(isSubmitting || didSubmit) && didSubmitModalContent}
                </Typography>
            </Dialog>
        </Grid>
    );
}

export default Cart;
