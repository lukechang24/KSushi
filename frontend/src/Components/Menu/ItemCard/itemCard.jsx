import { getMenuImageUrl } from "../../../helper"
import * as S from "./itemCard.styles"

const ItemCard = ({ data, index, handleItemClick }) => {
	let pcs = ""
	if (data.pcs) {
		pcs = `(${data.pcs}pcs)`
	}
	return(
		<S.ItemContainer onClick={() => handleItemClick(data)}>
			<S.ItemImage 
				src={getMenuImageUrl(data.url, "530x530")}
				loading="lazy"
			/>
			<S.ItemInfoContainer>
				<S.ItemName>{data.name} {pcs}</S.ItemName>
				<S.ItemPrice>${data.price}</S.ItemPrice>
			</S.ItemInfoContainer>
		</S.ItemContainer>
	)
}

export default ItemCard