import {React,useState} from 'react'
import SideMenu from './SideMenu';
const Nav = () => {
   const [show, setShow] = useState();
	
  return (
    <>
    <div className="bnd-row">
        <div className={`menu-bnd ${show ? 'show' : ''} `}  onClick={() => setShow(!show)}  ><a className="bndtarget" href="#"><img src="../images/MenuIcon.svg" alt="Menu"/></a></div>
        <div className="logo-bnd"><a href="#"><img src="../images/logo-white.svg" alt="Logo"/></a></div>
        <div className="Search">
            <img src="../images/searchicon.svg" alt="Search"/>
        </div>
       
        <div className="border-menu"></div>
    </div>
     
    <nav className={show ? "show" : "hide"} onClick={() => setShow(!show)}> <SideMenu /></nav>
    </>
  )
};

export default Nav
