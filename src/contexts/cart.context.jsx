import { createContext, useEffect, useState } from 'react';
const addCartItem = (cartItems, productToAdd) => {
  // if CartItems contains productToAdd add quantity
  const existingCartItem = cartItems.find(
    cartItem => cartItem.id === productToAdd.id
  );
  if (existingCartItem) {
    return cartItems.map(cartItem =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...cartItems, { ...productToAdd, quantity: 1 }];
};
const removeCartItem = (cartItems, productToRemove) => {
  return cartItems.filter(cartItem => cartItem.id !== productToRemove.id);
};
const substractCartItem = (cartItems, productToSubscract) => {
  return cartItems
    .map(cartItem =>
      cartItem.id === productToSubscract.id
        ? { ...cartItem, quantity: cartItem.quantity - 1 }
        : cartItem
    )
    .filter(cartItem => cartItem.quantity > 0);
};

export const CartContext = createContext({
  cartOpen: false,
  setCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  substractItemFromCart: () => {},
  removeItemFromCart: () => {},
  cartCount: 0,
  checkoutTotal: 0,
});
export const CartProvider = ({ children }) => {
  const [cartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);

  const addItemToCart = productToAdd => {
    setCartItems(addCartItem(cartItems, productToAdd));
  };
  const substractItemFromCart = productToSubscract => {
    setCartItems(substractCartItem(cartItems, productToSubscract));
  };
  const removeItemFromCart = productToRemove => {
    setCartItems(removeCartItem(cartItems, productToRemove));
  };
  const checkoutTotal = cartItems.reduce(
    (total, currItem) => total + currItem.price * currItem.quantity,
    0
  );
  useEffect(() => {
    setCartCount(
      cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0)
    );
  }, [cartItems]);

  const value = {
    cartOpen,
    setCartOpen,
    cartItems,
    addItemToCart,
    substractItemFromCart,
    removeItemFromCart,
    cartCount,
    checkoutTotal,
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
