import React from "react";
import { Row } from "react-bootstrap";
import { Input } from "antd";

const { Search } = Input;

const SideFilter = props => {
  const { searchOnChange } = props
  return (
    <>
    <Row>
      Filter products
    </Row>
      <Row>
        <Search
          placeholder="search products.."
          onChange={e => searchOnChange(e.target.value)}
          onSearch={value => searchOnChange(value)}
          style={{ width: 200 }}
        />
      </Row>
    </>
  );
};

export default SideFilter;
