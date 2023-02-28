import './App.css';
import Header from "./components/Header/Header";
import CartProvider from "./store/CartProvider";
import * as React from "react";
import SimpleAccordion from "./components/UI/SimpleAccordion";

const App = () => {

    return (
        <CartProvider >
            <Header/>
            <SimpleAccordion/>
        </CartProvider>
    );
}

export default App;
