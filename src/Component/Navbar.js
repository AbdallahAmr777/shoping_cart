import React from "react";
import { NavLink } from "react-router-dom";
import { Nav, Navbar as NavbarBs, Container, Button } from "react-bootstrap";
import { useShoppingCart } from "./ShoppingCartContext";

const Navbar = () => {
  const {openCart,cartQuantity}=useShoppingCart();
  return (
    <NavbarBs sticky="top" className="bg-light shadow-sm md-3">
      <Container>
        <Nav className="me-auto">
          {/* <Nav.Link to="/" as={NavLink}>
            <h5> Home</h5>
          </Nav.Link>
          <Nav.Link to="/about" as={NavLink}>
            <h5> About</h5>
          </Nav.Link> */}
          <Nav.Link to="/store" as={NavLink}>
            <h5> Store</h5>
          </Nav.Link>
        </Nav>
        <Button onClick={()=>openCart()}
          variant="outline-primary"
          className="rounded-circle"
          style={{ width: "3rem", height: "3rem", position: "relative" }}
        >
          <i class="fa-sharp fa-solid fa-cart-shopping"></i>
          <div
            className="rounded-circle bg-danger d-flex align-items-center justify-content-center"
            style={{
              width: "1.5rem",
              height: "1.5rem",
              position: "absolute",
              color: "white",
              bottom: 0,
              right: 0,
              transform: "translate(25%,25%)",
            }}
          >
            {cartQuantity}
          </div>
        </Button>
      </Container>
    </NavbarBs>
  );
};

export default Navbar;
