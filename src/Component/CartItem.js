import React from "react";
import { Stack, Button } from "react-bootstrap";
import { useShoppingCart } from "./ShoppingCartContext";
import storeItem from "../data/storeItems.json";
import formatCurrency from "./formatCurrency";

const CartItem = ({ id, quantity }) => {
  const { removeItemCart } = useShoppingCart();
  const item = storeItem.find((i) => i.id === id);
  if (item == null) return null;
  return (
    <Stack direction="horizontal" gap={2} className="d-flex align-items-center " >
      <img
        src={item.image}
        alt="cart-img"
        style={{ width: "125px", height: "75", objectFit: "cover" }}
      />
      <div className="me-auto" style={{ fontSize: "1.1rem" }}>
        {item.category}{" "}
        {quantity > 1 && (
          <span className="text-muted" style={{ fontSize: ".7rem" }}>
            x{quantity}
          </span>
        )}
        <div className="text-muted" style={{ fontSize: "1rem" }}>
          {formatCurrency(item.price)}
        </div>
      </div>
      <div>{formatCurrency(item.price * quantity)}</div>
      <Button
        variant="outline-danger"
        size="sm"
        onClick={() => removeItemCart(item.id)}
      >
        &times;
      </Button>
    </Stack>
  );
};

export default CartItem;
