import React from "react"
import { getMenuImageUrl } from "../../../helper"
import * as S from "./itemCard.styles"

const ItemCard = ({ data, handleItemClick }) => {
	return(
		<S.ItemContainer onClick={() => handleItemClick(data)}>
			<S.ItemImage 
				src={getMenuImageUrl(data.url, "530x530")}
				loading="lazy"
			/>
			<S.ItemInfoContainer>
				<S.ItemName>{data.name}</S.ItemName>
				<S.ItemPrice>${data.price}</S.ItemPrice>
			</S.ItemInfoContainer>
		</S.ItemContainer>
	)
}

export default ItemCard