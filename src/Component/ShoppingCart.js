import React from "react";
import { Offcanvas, Stack } from "react-bootstrap";
import { useShoppingCart } from "./ShoppingCartContext";
import CartItem from "./CartItem";
import formatCurrency from "./formatCurrency";
import storeItems from "../data/storeItems.json";

const ShoppingCart = ({ isOpen }) => {
  const { cartItem, closeCart } = useShoppingCart();
  return (
    <Offcanvas show={isOpen} onHide={closeCart} placement="end">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Cart</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Stack gap={3}>
          {cartItem.map((item) => (
            <CartItem key={item.id} {...item} />
          ))}
          <div className=" ms-auto ew-bold fs-5">
            Total{" "}
            {formatCurrency(
              cartItem.reduce((total, cartI) => {
                const item = storeItems.find((i) => i.id === cartI.id);
                return total + (item?.price || 0) * cartI.quantity;
              }, 0)
            )}
          </div>
        </Stack>
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default ShoppingCart;
