import {
    Button,
    createTheme,
    Grid,
    responsiveFontSizes,
    Typography
} from "@mui/material";
import addToCart from '../../assets/icons/add-to-cart.png';


const MenuItem = (props) => {

    let theme = createTheme();
    theme = responsiveFontSizes(theme);

    return (<Grid
            item
            xs={12}
            sm={6}
            md={4}
            xl={3}
            container
            border='groove lightblue 5px'
            borderRadius='15px'
            padding='5px'
            sx={{flewGrow: 1}}
        >
            <Grid container item xs={12} borderBottom='dotted lightblue 3px'>
                <Grid item xs={7}
                >
                    <Typography theme={theme} variant="h4">
                        {props.name}
                    </Typography>
                </Grid>
                <Grid item xs={5}>
                    <Typography theme={theme} variant="h4">
                        ${props.price}
                    </Typography>
                </Grid>
            </Grid>
            <Grid item xs={12} borderBottom='dotted lightblue 3px'>
                <Typography theme={theme} variant="h6">
                    {props.ingredients}
                </Typography>
            </Grid>
            <Grid item xs={12}>
                <input type="number"
                       min={1}
                       max={10}
                       defaultValue={1}
                       style={{width: '3rem', fontSize: '2rem', height: '2rem', borderRadius: '5px'}}
                />
                <Button color='success' style={{fontSize: 24}}>
                            <span>Add to Cart
                                <img src={addToCart} style={{height: '20px'}} alt='add to cart'/>
                            </span>
                </Button>
            </Grid>
        </Grid>
    );
};

export default MenuItem;