import React, { useState, createContext } from "react";
import { Container, Row } from "react-bootstrap";

import Header from "./components/Header";

export const AppContext = createContext();

const Layout = props => {
  const [isLightTheme, setTheme] = useState(true);
  const [searchString, setSearchString] = useState("");
  const [priceFilter, setPriceFilter] = useState("all");
  const [cartItems, setCartItems] = useState([]);

  const toggleTheme = () => {
    setTheme(prevBool => !prevBool);
  };
  const searchOnChange = value => {
    setSearchString(value);
  };
  const filteredPrice = key => {
    setPriceFilter(key);
  };
  const clearFilters = () => {
    setSearchString("");
    setPriceFilter("all");
  };

  const contextValue = {
    searchString,
    priceFilter,
    cartItems,
    setCartItems
  };

  const cartCount = cartItems.length;

  return (
    <Container fluid>
      <Row className={`header ${isLightTheme ? "light-theme" : "dark-theme"}`}>
        <Header
          toggleTheme={toggleTheme}
          searchOnChange={searchOnChange}
          searchString={searchString}
          filteredPrice={filteredPrice}
          priceFilter={priceFilter}
          clearFilters={clearFilters}
          cartCount={cartCount}
        />
      </Row>
      <AppContext.Provider value={contextValue}>
        <Row className="App">
          <div
            className={`app-body fullWidth ${
              isLightTheme ? "light-theme" : "dark-theme"
            }`}
          >
            {props.children}
          </div>
        </Row>
      </AppContext.Provider>
    </Container>
  );
};

export default Layout;
