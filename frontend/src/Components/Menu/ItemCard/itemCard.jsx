import React from "react"
import { getMenuImageUrl } from "../../../helper"
import * as S from "./itemCard.styles"

const ItemCard = ({ data, handleItemClick }) => {
	return(
		<S.ItemContainer onClick={() => handleItemClick(data)}>
			<S.ItemImage 
				src={data.url ? getMenuImageUrl(data.url, "530x530") : "https://kuranew-1c49a.kxcdn.com/kura_admin/asset/uploads/387/menu/menu-2023-website-nigiri-albacore-toro-bintoro.png"}
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