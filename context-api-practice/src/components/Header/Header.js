import React, { useContext } from "react";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { CategoryContext } from "../../App";

const Header = () => {
  const [category, setCategory] = useContext(CategoryContext);
  return (
    <div>
      <h1>This is Header: {category}</h1>
      <Button variant="success" onClick={() => setCategory('Laptop')}>
        Laptop
      </Button>
      <Button variant="primary" onClick={() => setCategory('Mobile')}>
        Mobile
      </Button>
      <Button variant="warning" onClick={() => setCategory('Camera')}>
        Camera
      </Button>
    </div>
  );
};

export default Header;
