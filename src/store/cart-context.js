import React from "react";

const CartContext = React.createContext({
    items: [],
    totalAmount: 0,
    price: 0,
    addItem: () => {},
    removeItem: () => {},
    clearCart: () => {}
});

export default CartContext;