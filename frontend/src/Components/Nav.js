import {React} from 'react'
import SideMenu from './SideMenu'
import $ from 'jquery';

const Nav = () => {
	
 $(".bndtarget").click(function(){
      $("#SideMenu").addClass('show')
      $("#SideMenu").removeClass('hide')
      //console.log('work')
  });
  $(".sideclose").click(function(){
      $("#SideMenu").removeClass('show')
      $("#SideMenu").addClass('hide')
  });
   $(".emptycart").click(function(){
     //console.log('work')
     $(".checkoutM").removeClass('hide')

  });

  $(".close-cart").click(function(){
     //console.log('work')
     $(".checkoutM").addClass('hide')

  });

  return (
    <>
    <div className="bnd-row">
        <div className="menu-bnd"><a className="bndtarget" href="#" ><img src="../images/MenuIcon.svg" alt="Menu"/></a></div>
        <div className="logo-bnd"><a href="#"><img src="../images/logo-white.svg" alt="Logo"/></a></div>
        <div className="Search">
            <img src="../images/searchicon.svg" alt="Search"/>
        </div>
       
        <div className="border-menu"></div>
    </div>
     
    <nav className="hide" id="SideMenu"> <SideMenu /></nav>
    </>
  )
};

export default Nav
