import React from "react";
import { Row, Col } from "react-bootstrap";
import { Card, Button } from "antd";
import {
  AiTwotoneHeart,
  AiOutlineHeart,
  AiFillStar,
  AiOutlineShoppingCart
} from "react-icons/ai";
import { Rating } from "semantic-ui-react";

import "../../assets/css/productCard.css";

// const { Meta } = Card;
const staticImage =
  "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png";

const ProductCard = props => {
  const { item, toggleIsFavorite, cartItems, addToCart, removeFromCart } = props;
  // const productImage = !props.image ? staticImage : props.image

  const getAvailableStatus = () => {
    const sellableDate = new Date(item.sellableDate).toDateString();
    const currentDate = new Date().toDateString();
    if (sellableDate > currentDate) {
      return (
        <>
          <p className="small-green-text">Sold on</p>&nbsp;
          <p className="available-date">
            {new Date(item.sellableDate).toDateString()}
          </p>
        </>
      );
    } else {
      return (
        <>
          <p className="small-red-text">Sold out</p>&nbsp;
          <p className="available-date">
            {new Date(item.sellableDate).toDateString()}
          </p>
        </>
      );
    }
  };

  const getNewArrivalStatus = () => {
    if (item.productFlags.isNewArrival) {
      return (
        <>
          <p className="padding-left">
            <AiFillStar color="yellow" />
          </p>
          &nbsp;
          <p className="new-arrival">New Arrival</p>
        </>
      );
    }
  };

  const getAddToCardButton = () => {
    const sellableDate = new Date(item.sellableDate).toDateString();
    const currentDate = new Date().toDateString();

    if (cartItems.includes(item.id)) {
      return (
        <div className="padding-left">
          <Button
            type="secondary"
            icon={<AiOutlineShoppingCart />}
            danger
            // loading={this.state.iconLoading}
            onClick={() => removeFromCart(item.id)}
          >
            &nbsp;Remove from cart
          </Button>
        </div>
      );
    }

    if (sellableDate > currentDate) {
      return (
        <div className="padding-left">
          <Button
            type="primary"
            icon={<AiOutlineShoppingCart />}
            danger
            // loading={this.state.iconLoading}
            onClick={() => addToCart(item.id)}
          >
            &nbsp;Add to cart
          </Button>
        </div>
      );
    } else {
      return (
        <div className="padding-left">
          <Button
            type="primary"
            icon={<AiOutlineShoppingCart />}
            danger
            disabled
            // loading={this.state.iconLoading}
            // onClick={this.enterIconLoading}
          >
            &nbsp;Add to cart
          </Button>
        </div>
      );
    }
  };

  const getInStockStatus = () => {
    if (item.onlyXItemsLeftStockLevel > 0) {
      return (
        <>
          <p className="small-green-text">In stock</p>&nbsp;
          <p className="available-date">
            Only {item.onlyXItemsLeftStockLevel} Items{" "}
          </p>
        </>
      );
    } else {
      return (
        <>
          <p className="small-red-text">Out of stock</p>
        </>
      );
    }
  };

  return (
    <Card
      hoverable
      style={{ width: 240 }}
      cover={<img alt="example" src={staticImage} />}
    >
      <>
        {/* <Meta title={item.name} description="www.instagram.com" /> */}
        <Row>
          <Col sm={10} className="text-left">
            <b>{item.name}</b>
          </Col>
          <Col sm={2}>
            <div onClick={() => toggleIsFavorite(item.id)}>
              {item.isFavorite ? (
                <AiTwotoneHeart color="red" />
              ) : (
                <AiOutlineHeart />
              )}
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <p className="designedBy">Designed by {item.designer}</p>
          </Col>
        </Row>
        <Row>
          <Col className="text-left">
            <Rating maxRating={5} defaultRating={3.5} icon="star" size="mini" />
            {/* <div class="ui rating" data-rating="1" data-max-rating="5"></div> */}
          </Col>
        </Row>
        <Row>
          <Col className="text-left">
            <p className="price">
              {item.price.currencyCode}&nbsp;
              {item.price.retailPrice}
            </p>
          </Col>
        </Row>
        <Row>
          <Col>
            <Row>{getAvailableStatus()}</Row>
            <Row>{getNewArrivalStatus()}</Row>
          </Col>
        </Row>
        <Row>{getInStockStatus()}</Row>
        <Row>{getAddToCardButton()}</Row>
      </>
    </Card>
  );
};

export default ProductCard;
