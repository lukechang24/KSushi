import React from "react"

import * as S from "./homepage.styles"

const Homepage = () => {
	return(
		<S.HomepageContainer>
			<S.ViewMenuLink href="#menu">VIEW MENU <S.DownArrow></S.DownArrow></S.ViewMenuLink>
		</S.HomepageContainer>
	)
}

export default Homepage