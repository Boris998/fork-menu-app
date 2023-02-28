import {Grid} from "@mui/material";
import MenuItem from "./MenuItem";
import {useEffect, useState} from "react";

const PizzaMenuItemsWrapper = () => {
    const [pizzas, setPizzas] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [httpError, setHttpError] = useState(false);

    useEffect(()=>{
        const fetchMeals = async () => {
            const response = await fetch('https://fork-menu-app-default-rtdb.europe-west1.firebasedatabase.app/meals/pizzas.json');

            if (!response.ok){
                throw new Error('sth went wrong');
            }

            const responseData = await response.json();

            const loadedPizzas = [];

            for (const keyID in responseData){
                loadedPizzas.push({
                    id: keyID,
                    name: responseData[keyID].name,
                    description: responseData[keyID].description,
                    ingredients: responseData[keyID].ingredients,
                    price: responseData[keyID].price,
                    image: responseData[keyID].image,
                });
            }

            setPizzas(loadedPizzas);
            setIsLoading(false);
        }

        try {
            fetchMeals();
        }catch (e) {
            setIsLoading(false);
            setHttpError(e.message);
        }

    },[]);



    const renderMenuItems = () => pizzas.map(pizza =>
        <MenuItem
            key={pizza.id}
            id={pizza.id}
            name={pizza.name}
            ingredients={pizza.ingredients}
            price={pizza.price}
            description={pizza.description}
            image={pizza.image}
        />
    );

    if (isLoading) return <p>is loading</p>;
    if (httpError) return <p>http Error</p>;

    return <Grid container sx={{width: '75%', margin: '0 auto'}}>
        {renderMenuItems()}
    </Grid>
}

export default PizzaMenuItemsWrapper;