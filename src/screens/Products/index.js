import React, { useState, useEffect, useContext } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";

import { FETCH_PRODUCTS } from "../../actions";
import ProductsList from "./ProductsList";

import { AppContext } from "../../Layout";

const loadingIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

const Products = () => {
  const { searchString, priceFilter, cartItems, setCartItems } = useContext(AppContext);
  const [productsList, setProductsList] = useState([]);

  const fetchProducts = async () => {
    const products = await FETCH_PRODUCTS();
    console.log("products", products);
    setProductsList(products);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const toggleIsFavorite = productId => {
    const productsListClone = [];
    let productObj = {};
    productsList.forEach(item => {
      productObj = { ...item };
      if (item.id === productId) {
        productObj.isFavorite = !item.isFavorite;
      }
      productsListClone.push(productObj);
    });
    setProductsList(productsListClone);
  };

  const addToCart = (productId) => {
    const cartItemsClone = [...cartItems]
    cartItemsClone.push(productId)
    setCartItems(cartItemsClone)
  }
  const removeFromCart = (productId) => {
    const cartItemsClone = [...cartItems]
    const indexOfProduct = cartItemsClone.indexOf(productId)
    if (indexOfProduct > -1) {
      cartItemsClone.splice(indexOfProduct, 1)
    }
    setCartItems(cartItemsClone)
  }

  const getFilterByPrice = () => {
    const filteredProducts = [];
    let productsObj = {};
    productsList.forEach(item => {
      productsObj = { ...item };
      const itemName = item.name.toLowerCase();
      const designerName = item.designer.toLowerCase();
      if (priceFilter === "below") {
        if (Number(item.price.retailPrice) <= 2000) {
          filteredProducts.push(productsObj);
        }
      } else if (priceFilter === "above") {
        if (Number(item.price.retailPrice) >= 2000) {
          filteredProducts.push(productsObj);
        }
      }

      if (
        priceFilter === "all" &&
        (itemName.includes(searchString.toLowerCase()) ||
          designerName.includes(searchString.toLowerCase()))
      ) {
        filteredProducts.push(productsObj);
      }
      return null;
    });
    return filteredProducts;
  };

  const getFilterBySearch = jsonArray => {
    return jsonArray.filter(item => {
      const itemName = item.name.toLowerCase();
      const designerName = item.designer.toLowerCase();
      if (
        itemName.includes(searchString.toLowerCase()) ||
        designerName.includes(searchString.toLowerCase())
      ) {
        return true;
      }
      return null;
    });
  };

  const getFilteredProducts = () => {
    const filterByPrice = getFilterByPrice();
    const filterBySearch = getFilterBySearch(filterByPrice);

    return filterBySearch;
  };

  const filteredProducts = getFilteredProducts();

  return (
    <Container>
      <Row>
        {/* <Col sm={3}>
          <SideFilter searchOnChange={searchOnChange} />
        </Col> */}
        <Col sm={12}>
          {filteredProducts.length === 0 && <Spin indicator={loadingIcon} />}
          {filteredProducts.length > 0 && (
            <ProductsList
              products={filteredProducts}
              toggleIsFavorite={toggleIsFavorite}
              cartItems={cartItems}
              addToCart={addToCart}
              removeFromCart={removeFromCart}
            />
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default Products;
