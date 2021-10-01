import {React} from 'react';

const CartModal = () => {
  return (
    <>
    
      <div className="modal-cart-wrapper checkoutM ">
            <div className="cart-cut"> 
                <div className="upper-cart">
                    <div className="bnd-row">
                        <div className="baralign"><div className="bar-x"></div></div> 
                        <h2>
                            <span className="hide model-title">My Cart</span> 
                            <span className="backto"><a href="#"><img src="../images/BackArrowicon.svg" alt="<<" /></a></span>
                        </h2>
                        <span className="close-cart" >	
                            <img src="../images/Closeicon.svg" alt="X" />
                        </span>

                    </div>
                </div>

                <div className="middle-cart">
                      
                        <div className="car-row">
                            <div className="image-cart">
                                <img src="../images/Image13.png" alt="" />
                            </div>
                            <div className="cart-content">
                                <h3>Face Mask – Flamingo</h3>
                                <h4 className="cart-price">$20.00</h4>
                            </div>
                            <div className="field">
                                <input type="text" value="1" disabled="disabled" />
                            </div>
                        </div>
                        
                    </div>
                    
                </div>

                <div className="footer-cart">
                    
                    <div className="total-cart">
                        <div className="total-am">
                            Total: $60
                        </div>
                        <div className="checkout-now">
                            <a href="#" className="checkout-bnd hide">Check Out</a>
                        </div>
                    </div>
                </div>
            </div>
    </>
  )
}

export default CartModal


