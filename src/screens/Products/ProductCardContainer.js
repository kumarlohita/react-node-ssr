import React from "react";
import { Container, Row } from "react-bootstrap";

const ProductCardContainer = props => {
  return (
    <Container fluid>
      <Row className="product-card-container">{props.children}</Row>
    </Container>
  );
};

export default ProductCardContainer;
