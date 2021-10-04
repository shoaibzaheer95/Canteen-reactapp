import { useState } from 'react';
import Product from '../Components/Product';
import constProducts from '../products';

const AllProduct = () => {
    const [products, setProducts] = useState(constProducts);
  return (
    <>
      <section className="bnd-all-product">
			<div className="bnd-row">
				<h3 className="pro-title">All Products</h3>
				<a href="#" className="bnd-viewall">view all</a>
			</div>
			<div className="bnd-row">
				<div className="pro-wrapper">
                {products.map((product) => (
                      <Product product={product}  />
                  ))}
                    <div className="load-col">
						<a href="#" className="load-pro">View All Products</a>
					</div>
                </div>
            </div>
        </section>
    </>
  )
}

export default AllProduct
