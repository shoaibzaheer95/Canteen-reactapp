import {React} from 'react'
import {LinkContainer} from 'react-router-bootstrap'

const SideMenu = () => {
	

  return (
	<>
		<div  className="sidemenu-bar">
				<div className="top-close"  >
					<span className="sideclose">	
						<img src="../images/Closeicon.svg" alt="X" />
					</span>
				</div>
				<div className="middle-bar">
					<ul>
						<li><LinkContainer to="/"><a href="#">Home</a></LinkContainer></li>
						<li className="submenu">
							<a href="#">Collections</a>
							<ul>
								<li><a href="#">1</a></li>
								<li><a href="#">1</a></li>
								<li><a href="#">1</a></li>
								<li><a href="#">1</a></li>
							</ul>
						</li>
						<li><a href="#">Contact Us</a></li>
						<li><a href="#">Return & Refund</a></li>
					</ul>
				</div>
				<div className="footer-bar">
					<div className="title-bar">
						Follow us
					</div>
					<div className="social-bar">
						<a href="#"><img src="../images/Instagramside.svg" alt="instagaram"/></a>
						<a href="#"><img src="../images/Twitterside.svg" alt="Twitter"/></a>
						<a href="#"><img src="../images/FBside.svg" alt="Facebook"/></a>
						<a href="#"><img src="../images/Youtubeside.svg" alt="Youtube"/></a>
					</div>
				</div>
		</div>

	</>
  )
}

export default SideMenu
