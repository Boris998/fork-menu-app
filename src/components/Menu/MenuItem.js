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
                  justifyContent='space-between'
                  display='flex'
                  alignItems='stretch'
                  item
                  xs={12}
                  xl={6}
                  sx={{
                      flewGrow: 1,
                      background: `url(${props.image}) no-repeat center center`,
                      width: '100%',
                      height: '50vh',
                      backgroundSize: 'cover',
                      borderRadius: '20px',
                      color: 'white',
                      padding: '2vh',
                      opacity: '0.9',
                  }}
            >
                <Grid container item xs={12}>
                    <Grid item xs={6} align='left'>
                        <Typography theme={theme} component={'h6'} variant={'h6'}>
                            {props.name}
                        </Typography>
                    </Grid>
                    <Grid item xs={6} align={'right'}>
                        <Typography theme={theme} component={'h4'} variant={'h4'}>
                            ${props.price}
                        </Typography>
                    </Grid>
                </Grid>
                <Grid item xs={12} sx={{padding: '10%'}}>
                    <Typography theme={theme} component={'h6'} variant={'h6'}>
                        {props.ingredients}
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                        <Typography theme={theme} component={'span'} variant={'body2'}>
                            <MenuItemForm onAddToCart={addToCartHandler}/>
                        </Typography>
                </Grid>
            </Grid>
    );
};

export default MenuItem;
