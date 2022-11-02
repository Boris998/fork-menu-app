import MenuItems from "../../service/MenuItems";
import {Box} from "@mui/material";
import classes from './MenuItemsWrapper.module.css'

const MenuItemsWrapper = () => {
    return <Box className={classes.push}>
            <MenuItems/>
    </Box>
}

export default MenuItemsWrapper;