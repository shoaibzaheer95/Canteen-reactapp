import { useState, useEffect } from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import Rating from '../Components/Rating';

import products from '../products';
const ProductSingle = ({ match, history }) => {
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
	  <div className="bnd-mb-wrap">
			<div className="single-model">

				<div className="bnd-row">
					<div className="menu-bnd">
						<a className="bndtarget hide" href="#"><img src="../images/MenuIcon.svg" alt="Menu" /></a>
						
						<LinkContainer to='/'>
							<a className="bndback" href="/"><img src="../images/BackArrowicon.svg" alt="< Back" /></a>
						</LinkContainer>
						
					</div>
					
					<a className="basket" href="#"><img src="../images/Carticon2.svg" alt=" basket" /></a>
					<div className="Search">
						<img src="../images/searchgray.svg" alt="Search" />
					</div>
					
				</div>
				<div className="bnd-row">
						{product && (
							<div className="gallery-single">
								
								<div className="big-thumb">
									<img src={product.image} fluid alt={product.name} />
									<span className="openGallery"><img src="../images/ZoomIcon.svg" /></span>
								</div>
								<div className="small-thumb-line">
									<img src={product.image} fluid alt={product.name} />
								</div>
								
							</div>
						)}
				</div>
				<div className="cut-model model-single">
				
				<div className="bnd-row ">
				
				{product && (
				

					<div className="single-proDetails">
						<div className="Singledetail">
						
							<h4>{product.category}</h4>
							<h3>{product.name}</h3>
							<Rating
							rating={product.rating}
						>{` from ${product.numReviews} users`}</Rating>
						</div>
						<div className="Signleprice">
							<h3>{product.price}</h3>
							<h5>{product.countInStock > 0 ? 'In Stock' : 'Out of Stock'}</h5>
						</div>
					</div>
				)}
					<div className="Singleaccordian">
						
						<div className="accor-repeater showin">
							<h4 className="acc-opner">Outer layer <span className="angle"></span></h4>
							<div className="acc-body">
								<p>- Polyester compound 200gsm</p>
								<p>- Lightweight yet durable double knit fabric for 2 x the protection from droplets</p>
							</div>
						</div>
						

						
						<div className="accor-repeater">
							<h4 className="acc-opner">Inner layer <span className="angle"></span></h4>
							<div className="acc-body">
								<p>- Polyester compound 200gsm</p>
								<p>- Lightweight yet durable double knit fabric for 2 x the protection from droplets</p>
							</div>
						</div>
						


						
						<div className="accor-repeater">
							<h4 className="acc-opner">Ties <span className="angle"></span></h4>
							<div className="acc-body">
								<p>- Polyester compound 200gsm</p>
								<p>- Lightweight yet durable double knit fabric for 2 x the protection from droplets</p>
							</div>
						</div>
						
					</div>
				</div>


				</div>
			</div>
			
		</div>
		
	</>
  );
};

export default ProductSingle