import * as S from "./homepage.styles"

const Homepage = () => {
	return(
		<S.HomepageSection>
			<S.HomepageMenuLink href="#menu">
				VIEW MENU
				<S.DownArrow></S.DownArrow>
			</S.HomepageMenuLink>
			<S.HomepageInfoContainer>
						<S.HomepagePhone href="tel:+15629266556">+1 (562) 926-6556</S.HomepagePhone>
				<S.HomepageHours>Mon – Sat : 11:30AM – 2:30PM & 5:00PM - 9:00PM</S.HomepageHours>
				<S.HomepageAddress>16436 Norwalk Blvd Cerritos, CA 90703</S.HomepageAddress>
			</S.HomepageInfoContainer>
		</S.HomepageSection>
	)
}

export default Homepage