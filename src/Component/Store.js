import React from "react";
import { Row, Col } from "react-bootstrap";
import storeItems from "../data/storeItems.json";
import StorItem from "./StorItem";
const Store = () => {
  return (
    <>
      <h1 className="m-3 ">Store</h1>
      <Row lg={3} md={2} sm={1} className="g-3">
        {storeItems.map((item) => (
          <Col key={item.id}>
            <StorItem {...item} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Store;
