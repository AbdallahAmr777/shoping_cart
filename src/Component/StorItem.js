import React from "react";
import { Button, Card } from "react-bootstrap";
import formatCurrency from "./formatCurrency";
import { useShoppingCart } from "./ShoppingCartContext";

const StorItem = ({ price, id, image, category }) => {
  const {
    getItemsQuantity,
    increaseCartQuantity,
    removeItemCart,
    decreaseCartQuantity
  } = useShoppingCart();
  const quantity = getItemsQuantity(id);
  return (
    <Card className="h-100">
      <Card.Img src={image} style={{ height: "500px" }} />
      <Card.Body>
        <Card.Title className="d-flex justify-content-between align-items-baseline">
          <span className="fs-2">{category}</span>
          <span className="text-muted me-2">{formatCurrency(price)}</span>
        </Card.Title>
        <div className="mt-auto">
          {quantity === 0 ? (
            <Button onClick={() => increaseCartQuantity(id)} className="w-100">
              Add To Card
            </Button>
          ) : (
            <div
              className="d-flex align-items-center flex-column"
              style={{ gap: ".5rem" }}
            >
              <div
                className="d-flex justify-content-around "
                style={{ gap: ".5rem" }}
              >
                <Button onClick={() => decreaseCartQuantity(id)}>-</Button>
                <h4> {quantity}In Cart</h4>
                <Button onClick={() => increaseCartQuantity(id)}>+</Button>
              </div>
              <Button variant="danger" onClick={() => removeItemCart(id)}>
                Remove
              </Button>
            </div>
          )}
        </div>
      </Card.Body>
    </Card>
  );
};

export default StorItem;
