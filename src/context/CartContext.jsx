import { createContext, useState } from "react";

export const CartContext = createContext();

function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  // 🛒 ADD TO CART
  const addToCart = (product) => {
    setCartItems((prev) => [...prev, product]);
  };

  // ❌ REMOVE SINGLE ITEM
  const removeFromCart = (index) => {
    setCartItems((prev) => prev.filter((_, i) => i !== index));
  };

  // 🧹 CLEAR FULL CART
  const clearCart = () => {
    setCartItems([]);
  };

  // 💰 TOTAL PRICE CALCULATOR
  const getTotal = () => {
    return cartItems.reduce((acc, item) => acc + item.price, 0);
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        setCartItems, // important for Cart page
        addToCart,
        removeFromCart,
        clearCart,
        getTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider;  