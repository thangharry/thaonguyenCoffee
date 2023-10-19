// import React, { createContext, useState } from "react";
// import { PRODUCT } from "../../pages/Product";
// export const ShopContext = createContext(null);
// const getDefaultCart = () => {
//     let cart = {};
//     for (let i = 1; i < PRODUCT.length + 1; i++) {
//         cart[i] = 0;
//     }
//     return cart;
// };
// export const Shop_context = (props) => {
//     const [cartItems, setCartItem] = useState(getDefaultCart());

//     const addTocart = (itemID) => {
//         setCartItem((prev) => ({ ...prev, [itemID]: prev[itemID] + 1 }));
//     };

//     const removeTocart = (itemID) => {
//         setCartItem((prev) => ({ ...prev, [itemID]: prev[itemID] - 1 }));
//     };
//     const contextValue = { cartItems, addTocart, removeTocart };
//     return (
//         <ShopContext.Provider value={contextValue}>
//             {props.children}
//         </ShopContext.Provider>
//     );
// };

// export default Shop_context;

import React, { createContext, useContext, useState } from "react";

// Tạo Context
const CartContext = createContext();

// Tạo Provider
export function CartProvider({ children }) {
    const [cart, setCart] = useState([]);

    const addtocart = (product) => {
        setCart((currentCart) => [...currentCart, product]);
    };

    return (
        <CartContext.Provider value={{ cart, addtocart }}>
            {children}
        </CartContext.Provider>
    );
}

// Tạo custom hook để sử dụng context
export function useCart() {
    return useContext(CartContext);
}
