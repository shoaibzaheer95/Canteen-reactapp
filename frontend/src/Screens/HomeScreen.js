import { useState } from 'react';
import Product from '../Components/Product';
import constProducts from '../products';
const HomeScreen = () => {
  const [products, setProducts] = useState(constProducts);

  return (
    <>
      <section class="bnd-new">
          <div class="bnd-row">
            <h3 class="pro-title new-title">New Products</h3>
          </div>
          <div class="bnd-row">

            <div class="collection-slider new-slider">
              <div class="collection-wrapper new">
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
