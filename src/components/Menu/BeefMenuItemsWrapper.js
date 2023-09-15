import {Grid} from "@mui/material";
import MenuItem from "./MenuItem";
import {useEffect, useState} from "react";

const BeefMenuItemsWrapper = () => {

    const [beef, setBeef] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [httpError, setHttpError] = useState(false);

    useEffect(()=>{
        const fetchMeals = async () => {
            const response = await fetch('https://fork-menu-app-default-rtdb.europe-west1.firebasedatabase.app/meals/beef.json');

            if (!response.ok){
                throw new Error('sth went wrong');
            }

            const responseData = await response.json();

            const loadedBeef = [];

            for (const keyID in responseData){
                loadedBeef.push({
                    id: keyID,
                    name: responseData[keyID].name,
                    description: responseData[keyID].description,
                    ingredients: responseData[keyID].ingredients,
                    price: responseData[keyID].price,
                    image: responseData[keyID].image,
                });
            }

            setBeef(loadedBeef);
            setIsLoading(false);
        }

        try {
            fetchMeals();
        }catch (e) {
            setIsLoading(false);
            setHttpError(e.message);
        }

    },[]);



    const renderMenuItems = () => beef.map(beefMeal =>
        <Grid item key={beefMeal.id} xl={6} lg={6} xs={12} >
            <MenuItem
                key={beefMeal.id}
                id={beefMeal.id}
                name={beefMeal.name}
                ingredients={beefMeal.ingredients}
                price={beefMeal.price}
                description={beefMeal.description}
                image={beefMeal.image}
            />
        </Grid>
    );

    if (isLoading) return <p>is loading</p>;
    if (httpError) return <p>http Error</p>;

    return <Grid container spacing={2}>
        {renderMenuItems()}
    </Grid>
}

export default BeefMenuItemsWrapper;