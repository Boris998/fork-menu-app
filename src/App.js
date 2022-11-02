import './App.css';
import Header from "./components/Header/Header";
import {Box} from "@mui/material";
import MenuItemsWrapper from "./components/Menu/MenuItemsWrapper";

function App() {
    return (
        <Box className="App">
                <Header></Header>
            <MenuItemsWrapper/>
        </Box>
    );
}

export default App;
