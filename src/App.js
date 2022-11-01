import './App.css';
import MenuItem from "./components/Menu/MenuItem";
import Header from "./components/Header/Header";
import {Box} from "@mui/material";

function App() {
    return (
        <Box className="App">
                <Header></Header>
                <MenuItem
                    name="Dry aged Filet Mignon"
                    ingredients='Dry aged Filet Mignon, fries, mushroom souse'
                    price='12'
                />

        </Box>
    );
}

export default App;
