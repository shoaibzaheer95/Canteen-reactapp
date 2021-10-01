import {React,useState} from 'react'
//import Modal from './Modal.js';
import CartModal from './CartModal'


const Cartbutton = () => {
  const [show, setShow] = useState();
	
  return (
  	<>
    <a href="#" className={`emptycart ${show ? 'show' : ''} `} onClick={() => setShow(!show)}>
          <img src="../images/emptycart.svg" alt="emptycart" />
      </a>

      </>
  )
}

export default Cartbutton
