import { LinkContainer } from 'react-router-bootstrap';
import Rating from './Rating';
const Product = ({ product }) => {
  return (
      
    <div className="pro-col">
      <div className="new-pro">
      <LinkContainer to={`product/${product._id}`}>
        <div className="box-new">
          <img src={product.image}
          alt={product.name} />
        </div>
        </LinkContainer>
        <div className="box-new-data">
          <h3 className="box-title">{product.name}</h3>
          <h4 className="box-price">$ {product.price}</h4>
          <Rating
              rating={product.rating}
            >{` from ${product.numReviews} users`}</Rating>
                <a to="{product._id}" className="box-button"><img src="../images/carticon.svg" alt="" /> Add to cart</a>
        </div>
      </div>
    </div>

  );
};

export default Product;
