import React, { useEffect, useState } from "react"

import * as S from "./navbar.styles"

const Navbar = () => {
	const [data, setData] = useState(null)
	const [loading, setLoading] = useState(true)

	return(
		<S.NavbarContainer>
			<S.NavbarLogo>K. SUSHI</S.NavbarLogo>
			<S.HamburgerContainer>
				<S.HamburgerLine></S.HamburgerLine>
				<S.HamburgerLine></S.HamburgerLine>
				<S.HamburgerLine></S.HamburgerLine>
			</S.HamburgerContainer>
		</S.NavbarContainer>
	)
}

export default Navbar