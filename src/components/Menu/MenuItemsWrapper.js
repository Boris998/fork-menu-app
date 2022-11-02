import {Grid} from "@mui/material";
import classes from './MenuItemsWrapper.module.css'
import menuItemsList from "../../service/MenuItems";
import MenuItem from "./MenuItem";

const MenuItemsWrapper = () => {

    const renderMenuItems = () => menuItemsList.map(meal =>
            <MenuItem
                key={meal.id}
                id={meal.id}
                name={meal.name}
                ingredients={meal.ingredients}
                price={meal.price}
                description={meal.description}
            />
        );

    return <Grid container className={classes.push}>
        {renderMenuItems()}
    </Grid>
}

export default MenuItemsWrapper;