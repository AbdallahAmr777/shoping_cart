import { createContext, useContext, useEffect, useState } from "react";
import ShoppingCart from "./ShoppingCart";
const shoppingCartContext = createContext({});

const initialCartItems = localStorage.getItem("shopping-cart")
  ? JSON.parse(localStorage.getItem("shopping-cart"))
  : [];
const ShoppingCartProvider = ({ children }) => {
  const [isOpen, setOpen] = useState(false);
  const [cartItem, setCartItem] = useState(initialCartItems);

  useEffect(() => {
    localStorage.setItem("shopping-cart", JSON.stringify(cartItem));
  }, [cartItem]);
  const openCart = () => {
    setOpen(true);
  };
  const closeCart = () => {
    setOpen(false);
  };
  const cartQuantity = cartItem.reduce(
    (quantity, item) => item.quantity + quantity,
    0
  );
  const getItemsQuantity = (id) => {
    return cartItem.find((item) => item.id === id)?.quantity || 0;
  };
  const increaseCartQuantity = (id) => {
    setCartItem((currItem) => {
      if (currItem.find((item) => item.id === id) == null) {
        return [...currItem, { id, quantity: 1 }];
      } else {
        return currItem.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
      }
    });
  };
  const decreaseCartQuantity = (id) => {
    setCartItem((currItem) => {
      if (currItem.find((item) => item.id === id) == null) {
        return currItem.filter((item) => item.id !== id);
      } else {
        return currItem.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return item;
          }
        });
      }
    });
  };
  const removeItemCart = (id) => {
    setCartItem((currItem) => currItem.filter((item) => item.id !== id));
  };

  return (
    <shoppingCartContext.Provider
      value={{
        cartItem,
        getItemsQuantity,
        increaseCartQuantity,
        removeItemCart,
        decreaseCartQuantity,
        closeCart,
        openCart,
        cartQuantity,
      }}
    >
      {children}
      <ShoppingCart isOpen={isOpen} />
    </shoppingCartContext.Provider>
  );
};

export default ShoppingCartProvider;

export const useShoppingCart = () => {
  return useContext(shoppingCartContext);
};
