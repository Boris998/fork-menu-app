import MenuItem from "../components/Menu/MenuItem";
import {Grid} from "@mui/material";

const mealsArr = [
    {
        id: '1',
        name: 'Burger',
        ingredients: 'Burger bun, 100% beef paddy, caramelized onions, cheese, bacon, secret burger souse, baked potatoes',
        price: 14.99,
    },
    {
        id: '2',
        name: 'Beef Wellington',
        ingredients: 'pastry, filet mignon, mushrooms, Dijon mustard, olive oil, butter, bacon, eggs',
        price: 44.99,
    },
    {
        id: '3',
        name: 'Filet Mignon',
        ingredients: '200g filet mignon, mushroom souse, fries',
        price: 79.99,
    },
    {
        id: '4',
        name: 'T-Bone',
        ingredients: '~1200g T-bone, mushroom souse, fries',
        price: 124.99,
    },
];


const menuItems = () => {

    const menuList = mealsArr.map(meal=>
        <MenuItem
            key={meal.id}
            id={meal.id}
            name={meal.name}
            ingredients={meal.ingredients}
            price={meal.price}
        />
    );

    return (
        <Grid container item xs={12}>
            {menuList}
        </Grid>
    );
}

export default menuItems;
