import React from "react";
import { LinkContainer } from 'react-router-bootstrap';
import CartModal from './CartModal'

const Footer = () => {

  return (
  <>
    <div className="bnd-footer">
      <div className="stickyhome-bar ">
        <div className="bnd-row">
          <div className="tapicon-row">
            <div className="tapicon">
              <a href="#" className="collection">
                <img src="../images/CollectionIcon.svg" alt="Collection" />
              </a>
            </div>
            <div className="tapicon active">
            <LinkContainer to='/'>
              <a href="#" className="homeoption">
                <img src="../images/home-icon.svg" alt="Home" />
              </a>
              </LinkContainer>
            </div>
            <div className="tapicon">
               <a href="#" className="emptycart" >
                <img src="../images/emptycart.svg" alt="emptycart" />
              </a> 
            </div>
          </div>
        </div>
      </div>


      </div>

      <CartModal/>
      
  </>

  );
};

export default Footer;

