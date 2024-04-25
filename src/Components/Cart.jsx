import { useDispatch, useSelector } from "react-redux";
import Card from "react-bootstrap/Card"; // we need to import the react-bootstrap react component
import Button from "react-bootstrap/Button"; // we need to import the react-bootstrap react component

import { remove } from "../store/CartSlice"; // remove method

function Cart() {
  const productCart = useSelector((state) => state.cart); // here all those selected products are placed.

  const dispatch = useDispatch();

  const removeToCart = (id) => {
    //dispatch a remove action
    dispatch(remove(id));
  };

  const cards = productCart.map((product) => (
    <div className="col-md-12" style={{ marginBottom: "10px" }}>
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
          <Button variant="danger" onClick={() => removeToCart(product.id)}>
            Remove Item
          </Button>
        </Card.Footer>
      </Card>
    </div>
  ));
  return <div className="row">{cards}</div>;
}
export default Cart;
