import { useState } from "react"
import Hamburger from "./Hamburger/hamburger"

import logo from "../../Images/ksushi.png"

import * as S from "./navbar.styles"


const Navbar = () => {
	const [showNav, setShowNav] = useState(false)
	return(
		<S.NavbarContainer>
			<S.NavbarLogo src={logo} />
			<S.NavLinkContainer>
				<S.NavLink href="#menu">MENU</S.NavLink>
				<S.NavLink href="#about">ABOUT US</S.NavLink>
				<S.NavLink href="#contact">CONTACT</S.NavLink>
			</S.NavLinkContainer>
			<Hamburger
				open={showNav}
				setShowNav={setShowNav}
			/>
			<S.SideNavContainer $open={showNav}>
				<S.SideNav $open={showNav}>
					<S.NavbarLogo src={logo} $sideNav></S.NavbarLogo>
					<Hamburger
						open={showNav}
						setShowNav={setShowNav}
					/>
					<S.NavLink href="#menu" $sideNav onClick={() => setShowNav(false)}>
						MENU
					</S.NavLink>
					<S.NavLink href="#about" $sideNav onClick={() => setShowNav(false)}>
						ABOUT US
					</S.NavLink>
					<S.NavLink href="#contact" $sideNav onClick={() => setShowNav(false)}>
						CONTACT
					</S.NavLink>
				</S.SideNav>
			<S.Overlay $open={showNav}></S.Overlay>
			</S.SideNavContainer>
		</S.NavbarContainer>
	)
}

export default Navbar