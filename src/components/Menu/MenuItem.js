import {
    Box,
    Button,
    createTheme,
    Grid,
    responsiveFontSizes,
    Typography
} from "@mui/material";
import addToCart from '../../assets/icons/add-to-cart.png';
import classes from './MenuItem.module.css';


const MenuItem = (props) => {

    let theme = createTheme();
    theme = responsiveFontSizes(theme);

    return (<Box className={classes.push}>
            <Grid container>
                <Grid item
                      xs={12}
                      md={6}
                      lg={4}
                      container
                      border='groove lightblue 5px'
                      borderRadius='15px'
                      padding='5px'
                      sx={{flewGrow: 1}}
                >
                    <Grid container item xs={12} borderBottom='dotted lightblue 3px'>
                        <Grid item xs={9}
                        >
                            <Typography theme={theme} variant="h3">
                                {props.name}
                            </Typography>
                        </Grid>
                        <Grid item xs={3}>
                            <Typography theme={theme} variant="h3">
                                ${props.price}
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} borderBottom='dotted lightblue 3px'>
                        <Typography theme={theme} variant="h5">
                            {props.ingredients}
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <input type="number"
                               min={1}
                               max={10}
                               defaultValue={1}
                               style={{width: '3rem', fontSize: '2rem', height: '2rem', borderRadius:'5px'}}
                        />
                        <Button color='success' style={{fontSize: 24}}>
                            <span>Add to Cart
                                <img src={addToCart} style={{height: '20px'}} alt='add to cart'/>
                            </span>
                        </Button>
                    </Grid>
                </Grid>
            </Grid>
        </Box>

    );
};

export default MenuItem;