import { useState } from 'react';
import Product from '../Components/Product';
import constProducts from '../products';
const HomeScreen = () => {
  const [products, setProducts] = useState(constProducts);

  return (
    <>
      <section className="bnd-new">
          <div className="bnd-row">
            <h3 className="pro-title new-title">New Products</h3>
          </div>
          <div className="bnd-row">

            <div className="collection-slider new-slider">
              <div className="collection-wrapper new">
                  {products.map((product) => (
                      <Product product={product} />
                  ))}

            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeScreen;
