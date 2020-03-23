import React from "react";
import ProductCard from "./ProductCard";
import ProductCardContainer from "./ProductCardContainer";

const ProductsList = props => {
  const { products, toggleIsFavorite, cartItems, addToCart, removeFromCart } = props;
  
  return (
    <>
      <ProductCardContainer>
        {products.map((item, i) => {
          if (item.displayable) {
            return <ProductCard key={i + 1} image={item.media.main.medium.url} item={item} toggleIsFavorite={toggleIsFavorite} cartItems={cartItems} addToCart={addToCart} removeFromCart={removeFromCart} />;
          }
          return null
        })}
      </ProductCardContainer>
    </>
  );
};

export default ProductsList;
