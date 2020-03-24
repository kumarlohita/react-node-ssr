import React from "react";

import "../../App.css";
import { Button } from "antd";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      Welcome to the <strong>React</strong> application which was built on{" "}
      <strong>Server Side Rendered(SSR)</strong> concept using NodeJS & Express
      <Link to="/products">
        <Button type="primary">Click to view Products</Button>
      </Link>
    </>
  );
};

export default Home;
