//import { LinkContainer } from 'react-router-bootstrap';
import Nav from './Nav';

const Header = () => {
  return (
      <header className="bnd-header-home">
        <Nav/>
        <div className="overlap-content">
          <h1>Canteen Shop</h1>
          <p>Cancer doesn’t care. YOU do. By buying from the Canteen shop, you’re supporting young people impacted by cancer.</p>
          <a href="#" className="cn-button">Buy a Bandanna</a>
        </div>
      </header>
 );
};

export default Header;
