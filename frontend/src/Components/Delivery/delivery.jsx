import * as S from "./delivery.styles"
import uberEatsLogo from "../../Images/ubereats logo.svg"
import grubhubLogo from "../../Images/grubhub logo.png"

const Delivery = () => {
	return(
		<S.DeliverySection id="delivery">
			<S.DeliveryTitle>DELIVERY</S.DeliveryTitle>
			<S.DeliveryContainer>
				<S.DeliveryCard 
					href="https://www.ubereats.com/store/sushi-gallery/o3Ph-roTR1SnxAhvKAEIkA"
					target="_blank"
				>
					<S.DeliveryLogo
						$width="15rem"
						$color="black"
						$padding="1em 0"
						src={uberEatsLogo} 
					/>
					<S.DeliveryButton>Order Now</S.DeliveryButton>
				</S.DeliveryCard>

				<S.DeliveryCard 
					href="https://www.grubhub.com/restaurant/sushi-gallery-16436-norwalk-blvd-cerritos/2053881"
					target="_blank"
				>
					<S.DeliveryLogo 
						$width="15rem" 
						$color="white"
						$padding="2em"
						src={grubhubLogo}
					/>
					<S.DeliveryButton>Order Now</S.DeliveryButton>
				</S.DeliveryCard>
			</S.DeliveryContainer>
		</S.DeliverySection>
	)
}

export default Delivery