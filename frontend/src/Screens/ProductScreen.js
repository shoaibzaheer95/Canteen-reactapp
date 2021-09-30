import { useState, useEffect } from 'react';
import {
  Row,
  Col,
  Image,
  ListGroup,
  FormControl,
  Button,
} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import Rating from '../Components/Rating';

import products from '../products';
const ProductScreen = ({ match, history }) => {
  const productId = match.params.id;
  const [product, setProduct] = useState(null);
  const [qty, setQty] = useState(1);
  useEffect(() => {
    const productFound = products.find((p) => p._id == productId);
    setProduct(productFound);
  }, [productId]);

  const addToCartHandler = () => {
    history.push(`/cart/${product._id}?qty=${qty}`);
  };

  return (
    <>
      <Row className='my-2'>
        <Col>
          <LinkContainer to='/'>
            <Button variant='primary'>Go Back</Button>
          </LinkContainer>
        </Col>
      </Row>
      {product && (
        <Row>
          <Col md={5}>
            <Image src={product.image} fluid alt={product.name} />
          </Col>
          <Col md={4}>
            <ListGroup variant='flush'>
              <ListGroup.Item as='h4'>{product.name}</ListGroup.Item>
              <ListGroup.Item>
                Category :{' '}
                <span className='text-uppercase'>{product.category}</span>
              </ListGroup.Item>
              <ListGroup.Item>
                Color : <span className='text-uppercase'>{product.color}</span>
              </ListGroup.Item>
              <ListGroup.Item>Fabric : {product.fabric}</ListGroup.Item>
              <ListGroup.Item as='h5'>
                Price : Rs {product.price}/-
              </ListGroup.Item>
              <ListGroup.Item>
                <Rating
                  rating={product.rating}
                >{` from ${product.numReviews} users`}</Rating>
              </ListGroup.Item>
              <ListGroup.Item>{product.description}</ListGroup.Item>
            </ListGroup>
          </Col>
          <Col md={3}>
            <ListGroup variant='flush'>
              <ListGroup.Item as='h4'>
                Subtotal ({qty}) <br />
                Rs {(product.price * qty).toFixed(2)}/-
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Stock</Col>
                  <Col>
                    {product.countInStock > 0 ? 'In Stock' : 'Out of Stock'}
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Quantity</Col>
                  <Col>
                    <FormControl
                      as='select'
                      disabled={product.countInStock <= 0}
                      value={qty}
                      onChange={(e) => setQty(e.target.value)}
                    >
                      {Array.from(Array(product.countInStock).keys()).map(
                        (option) =>
                          option < 5 && (
                            <option key={option} value={option + 1}>
                              {option + 1}
                            </option>
                          )
                      )}
                    </FormControl>
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <div className='d-grid'>
                  <Button
                    disabled={product.countInStock <= 0}
                    onClick={addToCartHandler}
                  >
                    Add to Cart
                  </Button>
                </div>
              </ListGroup.Item>
            </ListGroup>
          </Col>
        </Row>
      )}
    </>
  );
};

export default ProductScreen;
