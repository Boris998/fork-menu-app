import {Grid} from "@mui/material";
import MenuItem from "./MenuItem";
import {useEffect, useState} from "react";

const SaladMenuItemsWrapper = () => {

    const [salads, setSalads] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [httpError, setHttpError] = useState(false);

    useEffect(() => {
        const fetchMeals = async () => {
            const response = await fetch('https://fork-menu-app-default-rtdb.europe-west1.firebasedatabase.app/meals/salads.json');

            if (!response.ok) {
                throw new Error('sth went wrong');
            }

            const responseData = await response.json();

            const loadedSalads = [];

            for (const keyID in responseData) {
                loadedSalads.push({
                    id: keyID,
                    name: responseData[keyID].name,
                    description: responseData[keyID].description,
                    ingredients: responseData[keyID].ingredients,
                    image: responseData[keyID].image,
                    price: responseData[keyID].price,
                });
            }

            setSalads(loadedSalads);
            setIsLoading(false);
        }

        try {
            fetchMeals();
        } catch (e) {
            setIsLoading(false);
            setHttpError(e.message);
        }

    }, []);


    const renderMenuItems = () => salads.map(salad =>
        <Grid item xl={6} lg={6} xs={12}>
            <MenuItem
                key={salad.id}
                id={salad.id}
                name={salad.name}
                ingredients={salad.ingredients}
                price={salad.price}
                description={salad.description}
                image={salad.image}
            />
        </Grid>
    );

    if (isLoading) return <p>is loading</p>;
    if (httpError) return <p>http Error</p>;


    return <Grid container spacing={2}>
        {renderMenuItems()}
    </Grid>
}

export default SaladMenuItemsWrapper;