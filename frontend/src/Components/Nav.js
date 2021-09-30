import {React,useState} from 'react'
import SideMenu from './SideMenu';
const Nav = () => {
  const [isActive, setActive] = useState(false);

	const toggleClass = () => {
		setActive(!isActive);
	};
  return (
    <>
    <div className="bnd-row">
        <div className={isActive ? ' menu-bnd active': 'menu-bnd'} onClick={toggleClass}  ><a className="bndtarget" href="#"><img src="../images/MenuIcon.svg" alt="Menu"/></a></div>
        <div className="logo-bnd"><a href="#"><img src="../images/logo-white.svg" alt="Logo"/></a></div>
        <div className="Search">
            <img src="../images/searchicon.svg" alt="Search"/>
        </div>
       
        <div className="border-menu"></div>
    </div>
      <SideMenu  className={isActive ? ' active': ''} />
    </>
  )
};

export default Nav
