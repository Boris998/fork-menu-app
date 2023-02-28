import {Button, createTheme, Grid, responsiveFontSizes, Typography} from "@mui/material";
import * as React from "react";

const CartItem = (props) => {

    let theme = createTheme();
    theme = responsiveFontSizes(theme);

    return <Grid item
                 xs={12}
                 container
                 sx={{flewGrow: 1}}
    >
        <Grid container item xs={12}>
            <Grid container item xs={7}>
                <Typography theme={theme} component={'span'} variant={'body2'}>
                    {props.name}
                </Typography>
            </Grid>
            <Grid container item xs={4}>
                <Typography theme={theme} component={'span'} variant={'body2'}>
                    ${props.price}
                </Typography>
            </Grid>
        </Grid>
        <Grid item xs={12} >
            <Typography theme={theme} component={'span'} variant={'body2'}>
                {props.ingredients}
            </Typography>
        </Grid>
        <Grid item xs={12} >
            <Typography theme={theme} component={'span'} variant={'body2'}>
                {props.description}
            </Typography>
        </Grid>
        <Grid item xs={12}>
            <span>{props.amount}</span>
            <Button onClick={props.onAdd}>+</Button>
            <Button onClick={props.onRemove}>-</Button>
        </Grid>
    </Grid>
}

export default CartItem;