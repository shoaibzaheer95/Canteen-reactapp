import {React,useState} from 'react'
//import Modal from './Modal.js';
//import CartModal from './CartModal'


const Cartbutton = () => {
  const [isActive, setActive] = useState(false);

	const toggleClass = () => {
		setActive(!isActive);
	};
  return (
    <a href="#" className={isActive? 'emptycart active': 'emptycart'} onClick={toggleClass}>
          <img src="../images/emptycart.svg" alt="emptycart" />
      </a> 
  )
}

export default Cartbutton
