import {Box, createTheme, Grid, responsiveFontSizes, Typography} from "@mui/material";
import forkLogo from '.././../assets/icons/fork-with-swirled-pasta-svgrepo-com.svg'
import HeaderPicture from "./HeaderPicture";
import classes from "./HeaderPicture.module.css";
import Cart from "./Cart/Cart";

const Header = (props) => {

    let theme = createTheme();
    theme = responsiveFontSizes(theme);

    return (
        <Box sx={{flexGrow: 1}}>
            <Grid item xs={12} className={classes.header}>
                <Grid container className={classes.logo} item xs={6}>
                    <Typography
                        theme={theme}
                        variant="h6"
                        component="div"
                        sx={{flexGrow: 1}}
                    >
                        <h2>Fork</h2>
                        <img
                            alt='fork logo'
                            src={forkLogo}
                            style={{height: '125px', marginBottom: '-55px',}}
                        />
                    </Typography>
                </Grid>

                <Grid item xs={6}>
                    <Cart style={{cursor: 'pointer'}} onClick={props.onClick}/>
                </Grid>
                <Grid item xs={12}>
                    <HeaderPicture/>
                </Grid>
            </Grid>
        </Box>
    );
}

export default Header;
