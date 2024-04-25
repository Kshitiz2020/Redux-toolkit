import { useState, useEffect } from "react";
import Card from "react-bootstrap/Card"; // we need to import the react-bootstrap react component
import Button from "react-bootstrap/Button"; // we need to import the react-bootstrap react component

// importing reduxToolkit element
import { useDispatch } from "react-redux";
import { add } from "../store/CartSlice";

function Product() {
  const dispatch = useDispatch(); // dispatching the action

  const [products, getProducts] = useState([]);
  useEffect(() => {
    // api calling
    fetch("https://fakestoreapi.com/products")
      .then((data) => data.json())
      .then((result) => getProducts(result));
  }, []);

  const addToCart = (product) => {
    //dispatch an add action
    dispatch(add(product));
  };

  //MAPPING json data

  const cards = products.map((product) => (
    <div className="col-md-3" style={{ marginBottom: "10px" }}>
      <Card key={product.id} className="h-100">
        <div className="text-center">
          <Card.Img
            variant="top"
            src={product.image}
            style={{ width: "100px", height: "130px" }}
          />
        </div>
        <Card.Body>
          <Card.Title>{product.title}</Card.Title>
          <Card.Text>{product.price} €</Card.Text>
        </Card.Body>
        <Card.Footer style={{ background: "white" }}>
          <Button variant="primary" onClick={() => addToCart(product)}>
            Add to Cart
          </Button>
        </Card.Footer>
      </Card>
    </div>
  ));
  return (
    <div>
      <h1>Product Dashboard</h1>
      <div className="row">{cards}</div>
    </div>
  );
}
export default Product;
