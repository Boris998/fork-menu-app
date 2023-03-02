import {Button, createTheme, Grid, responsiveFontSizes, Typography} from "@mui/material";
import * as React from "react";

const CartItem = (props) => {

    let theme = createTheme();
    theme = responsiveFontSizes(theme);

    return <Grid item
                 xs={12}
                 container
                 sx={{flewGrow: 1, width: '100Vh', borderBottom: '3px solid rgba(35,55,91,0.6)', padding: '1vh'}}
    >
        <Grid container item xs={12} sx={{padding: '1vh'}}>
            <Grid align={'left'} item xs={8}>
                <Typography theme={theme} component={'h5'} variant={'h5'}>
                    {props.name}
                </Typography>
            </Grid>
            <Grid item xs={4} align={'right'}>
                <Typography theme={theme} component={'h5'} variant={'h5'}>
                    ${props.price}
                </Typography>
            </Grid>
        </Grid>
        <Grid item xs={12}>
            <span style={{background: "radial-gradient(circle, rgba(49,77,77,0.3) 23%, rgba(35,55,91,1) 99%)", padding: '5px 11px', borderRadius: '25px'}}>{props.amount}</span>
            <Button onClick={props.onAdd}>+</Button>
            <Button onClick={props.onRemove}>-</Button>
        </Grid>
    </Grid>
}

export default CartItem;