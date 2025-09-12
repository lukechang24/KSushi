import { getMenuImageUrl } from "../../../helper"
import * as S from "./itemCard.styles"

const ItemCard = ({ data, index, handleItemClick }) => {
	let pcs = ""
	if (data.pcs) {
		pcs = `(${data.pcs}pcs)`
	}

	const formatName = (name) => {
		if (!name) return null

		const parts = name.split(/(\(.*\))/).filter(Boolean)

		return parts.map((part, i) => {
			if (part.startsWith("(")) {
				return (
					<S.SmallText key={i}>
						{part}
					</S.SmallText>
				)
			}
			return <span key={i}>{part}</span>
		})
	}
	return(
		<S.ItemContainer onClick={() => handleItemClick(data)}>
			<S.ItemImage 
				src={getMenuImageUrl(data.url, "530x530")}
				loading="lazy"
			/>
			<S.ItemInfoContainer>
				<S.ItemName>{formatName(data.name)} {pcs}</S.ItemName>
				<S.ItemPrice>${data.price}</S.ItemPrice>
			</S.ItemInfoContainer>
		</S.ItemContainer>
	)
}

export default ItemCard