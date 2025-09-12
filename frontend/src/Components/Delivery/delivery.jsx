import * as S from "./delivery.styles"
import uberEatsLogo from "../../Images/ubereats logo.svg"
import grubhubLogo from "../../Images/grubhub logo.png"

const Delivery = () => {
	return(
		<S.DeliverySection id="delivery">
			<S.DeliveryTitle>DELIVERY</S.DeliveryTitle>
			<S.DeliveryCardContainer>
				<S.DeliveryCard 
					href="https://www.ubereats.com/store/sushi-gallery/o3Ph-roTR1SnxAhvKAEIkA"
					target="_blank"
					$padding="0.75rem 1rem"
				>
					<S.DeliveryLogo $width="15rem" src={uberEatsLogo} />
					<S.DeliveryButton>Order Now</S.DeliveryButton>
				</S.DeliveryCard>

				<S.DeliveryCard 
					href="https://www.grubhub.com/restaurant/sushi-gallery-16436-norwalk-blvd-cerritos/2053881"
					target="_blank"
					$padding="2.5rem 2.75rem 0.75rem"
				>
					<S.DeliveryLogo $width="10rem" src={grubhubLogo} />
					<S.DeliveryButton $marginTop="1.8em">Order Now</S.DeliveryButton>
				</S.DeliveryCard>
			</S.DeliveryCardContainer>
		</S.DeliverySection>
	)
}

export default Delivery