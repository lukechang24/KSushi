import React, { useEffect, useState } from "react"
import logo from "../../Images/ksushi.png"

import * as S from "./navbar.styles"


const Navbar = () => {
	const [data, setData] = useState(null)
	const [loading, setLoading] = useState(true)

	return(
		<S.NavbarContainer>
			<S.NavbarLogo src={logo} />
			<S.NavLinkContainer>
				<S.NavLink href="#menu">MENU</S.NavLink>
				<S.NavLink href="#about">ABOUT US</S.NavLink>
				<S.NavLink href="#contact">CONTACT</S.NavLink>
			</S.NavLinkContainer>
			<S.HamburgerContainer>
				<S.HamburgerLine></S.HamburgerLine>
				<S.HamburgerLine></S.HamburgerLine>
				<S.HamburgerLine></S.HamburgerLine>
			</S.HamburgerContainer>
		</S.NavbarContainer>
	)
}

export default Navbar