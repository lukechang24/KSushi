import { useState } from "react"
import Hamburger from "./Hamburger/hamburger"

import logo from "../../Images/ksushi.png"

import * as S from "./navbar.styles"


const Navbar = () => {
	const [showNav, setShowNav] = useState(false)
	return(
		<S.NavbarSection>
			<S.NavbarLogoContainer>
				<S.NavbarLogo src={logo} />
				<S.NavbarSlogan>Family-owned and operated since 2005</S.NavbarSlogan>
			</S.NavbarLogoContainer>
			<S.NavLinkContainer>
				<S.NavLink href="#menu">MENU</S.NavLink>
				<S.NavLink href="#delivery">DELIVERY</S.NavLink>
				<S.NavLink href="#about">OUR STORY</S.NavLink>
				<S.NavLink href="#contact">CONTACT</S.NavLink>
			</S.NavLinkContainer>
			<Hamburger
				open={showNav}
				setShowNav={setShowNav}
			/>
			<S.SideNavSection $open={showNav}>
				<S.SideNavContainer $open={showNav}>
					<S.SideNavLinkContainer>
						<Hamburger
							open={showNav}
							setShowNav={setShowNav}
						/>
						<S.NavbarLogo src={logo} $sideNav></S.NavbarLogo>
						<S.NavLink href="#menu" $sideNav onClick={() => setShowNav(false)}>
							MENU
						</S.NavLink>
						<S.NavLink href="#delivery" $sideNav onClick={() => setShowNav(false)}>
							DELIVERY
						</S.NavLink>
						<S.NavLink href="#about" $sideNav onClick={() => setShowNav(false)}>
							OUR STORY
						</S.NavLink>
						<S.NavLink href="#contact" $sideNav onClick={() => setShowNav(false)}>
							CONTACT
						</S.NavLink>
					</S.SideNavLinkContainer>
					<S.SideNavInfoContainer>
						<S.SideNavPhone href="tel:+15629266556">+1 (562) 926-6556</S.SideNavPhone>
						<S.SideNavHours>Mon – Sat : 11:30AM – 2:30PM & 5:00PM - 9:00PM</S.SideNavHours>
						<S.SideNavAddress>16436 Norwalk Blvd Cerritos, CA 90703</S.SideNavAddress>
					</S.SideNavInfoContainer>
				</S.SideNavContainer>
			<S.Overlay $open={showNav}></S.Overlay>
			</S.SideNavSection>
		</S.NavbarSection>
	)
}

export default Navbar