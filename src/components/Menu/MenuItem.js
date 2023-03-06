import {createTheme, Grid, responsiveFontSizes, Typography} from "@mui/material";
import * as React from 'react';
import {useContext} from 'react';
import MenuItemForm from "./MenuItemForm";
import CartContext from '../../store/cart-context';

const MenuItem = (props) => {
    let theme = createTheme();
    theme = responsiveFontSizes(theme);
    const cartCtx = useContext(CartContext);

    const addToCartHandler = amount => {
        cartCtx.addItem({
            id: props.id,
            name: props.name,
            description: props.description,
            price: props.price,
            image: props.image,
            amount: amount
        });
    }

    return (
        <Grid
            container
            justifyContent="space-between"
            sx={{
                background: `url(${props.image}) no-repeat center center`,
                height: '50vh',
                backgroundSize: 'cover',
                borderRadius: '20px',
                color: 'white',
                opacity: '0.9',
                padding: '20px',
            }}
        >
            <Grid container xs={12}>
                <Grid item xs={9} md={10} align='left' >
                    <Typography theme={theme} component={'h4'} variant={'h4'}>
                        {props.name}
                    </Typography>
                </Grid>
                <Grid item xs={3} md={2} align={'right'} sx={{width: '100%'}}>
                    <Typography theme={theme} component={'h4'} variant={'h4'}>
                        ${props.price}
                    </Typography>
                </Grid>
            </Grid>
            <Grid item xs={12} sx={{fontSize: {xs: '16px',  sm: '20px'}, paddingTop: {sm: '100px'}}}>
                    {props.ingredients}
            </Grid>
            <Grid item xs={12} sx={{paddingTop: {sm: '50px'}}}>
                <Typography theme={theme} component={'span'} variant={'body2'}>
                    <MenuItemForm onAddToCart={addToCartHandler}/>
                </Typography>
            </Grid>
        </Grid>
    );
};

export default MenuItem;
