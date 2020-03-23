import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Input, Select, Button, Badge } from "antd";
import { AiOutlineShoppingCart } from "react-icons/ai";

import logo from "../../logo.svg";
import Toggle from "../Toggle";

const { Search } = Input;
const { Option } = Select;

const Header = props => {
  const {
    toggleTheme,
    searchOnChange,
    searchString,
    priceFilter,
    filteredPrice,
    clearFilters,
    cartCount
  } = props;

  return (
    <>
      <Navbar
        className="fullWidth"
        collapseOnSelect
        expand="lg"
        bg="dark"
        variant="dark"
        // sticky="top"
        fixed="top"
      >
        <Link to="/">
          <Navbar.Brand>
            <img
              alt=""
              src={logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{" "}
            React - SSR application
          </Navbar.Brand>
        </Link>
        <Nav className="nav-padding">
          <Badge count={cartCount} className="cart-count-mobile">
            <AiOutlineShoppingCart className="header-cart" />
          </Badge>
        </Nav>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Link to="/products">
              <Nav className="nav-link">Products</Nav>
            </Link>
          </Nav>
          <Nav className="nav-padding">
            <Select value={priceFilter} onChange={filteredPrice}>
              <Option value="below">Below 2000</Option>
              <Option value="above">Above 2000</Option>
              <Option value="all">All</Option>
            </Select>
          </Nav>
          <Nav className="nav-padding">
            <Search
              placeholder="search.."
              onChange={e => searchOnChange(e.target.value)}
              onSearch={value => searchOnChange(value)}
              // style={{ width: 200 }}
              value={searchString}
            />
          </Nav>
          <Nav className="nav-padding">
            <p className="pointer" title="clear filters" onClick={clearFilters}>
              <Button danger>Clear filters</Button>
            </p>
          </Nav>
          <Nav className="nav-padding">
            <Badge count={cartCount} className="cart-count">
              <AiOutlineShoppingCart className="header-cart" />
            </Badge>
          </Nav>
          <Nav>
            <Nav.Link eventKey={2}>
              <Toggle
                onChange={toggleTheme}
                checkedValue={"dark"}
                uncheckedValue={"light"}
              />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default Header;
