import {Box, createTheme, Grid, responsiveFontSizes, Typography} from "@mui/material";
import cartIcon from '../../assets/icons/cart.svg';
import forkLogo from '.././../assets/icons/fork-with-swirled-pasta-svgrepo-com.svg'
import HeaderPicture from "./HeaderPicture";
import classes from "./HeaderPicture.module.css";
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';

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
                        <h2 style={{}}>Fork</h2>
                        <img
                            src={forkLogo}
                            style={{height: '125px', marginBottom: '-55px',}}
                        />
                    </Typography>
                </Grid>
                <Grid container item xs={6}>
                    <Typography theme={theme} sx={{flexGrow: 1}}>
                        <img src={cartIcon} style={{height: '80px'}}/>
                    </Typography>
                </Grid>

                <Grid item xs={12}>
                    <HeaderPicture/>
                </Grid>
            </Grid>
        </Box>
    );
}

export default Header;
