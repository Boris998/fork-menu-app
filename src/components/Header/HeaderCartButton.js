import cartIcon from "../../assets/icons/cart.svg";
import {Typography} from "@mui/material";
import * as React from "react";


const HeaderCartButton = (props) => {
    return (
        <>
            <Typography theme={props.theme} sx={{flexGrow: 1}} onClick={props.onShowCart}>
                <img src={cartIcon} style={{height: '80px'}} alt='header cart'/>
            </Typography>
        </>
    );
}

export default HeaderCartButton;
