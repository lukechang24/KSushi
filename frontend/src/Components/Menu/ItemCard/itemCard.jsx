import React from "react"

import * as S from "./itemCard.styles"

const ItemCard = ({ data }) => {
	return(
		<S.ItemContainer>
			<S.ItemImage src={data.url}></S.ItemImage>
			<S.ItemInfoContainer>
				<S.ItemName>{data.name}</S.ItemName>
				<S.ItemPrice>${data.price}</S.ItemPrice>
			</S.ItemInfoContainer>
		</S.ItemContainer>
	)
}

export default ItemCard

{/* <S.ItemContainer>
				<S.ItemImage src="https://kuranew-1c49a.kxcdn.com/kura_admin/asset/uploads/387/menu/menu-2023-website-nigiri-garlic-ponzu-salmon-min.png"></S.ItemImage>
				<S.ItemInfoContainer>
					<S.ItemName>Garlic Ponzu Salmon</S.ItemName>
					<S.ItemPrice>$5.99</S.ItemPrice>
				</S.ItemInfoContainer>
			</S.ItemContainer> */}
			{/* <S.ItemContainer>
				<S.ItemImage src="https://kuranew-1c49a.kxcdn.com/kura_admin/asset/uploads/387/menu/menu-2023-website-nigiri-albacore-toro-bintoro.png"></S.ItemImage>
				<S.ItemInfoContainer>
					<S.ItemName>Albacore</S.ItemName>
					<S.ItemPrice>$6.99</S.ItemPrice>
				</S.ItemInfoContainer>
			</S.ItemContainer>
			<S.ItemContainer>
				<S.ItemImage src="https://kuranew-1c49a.kxcdn.com/kura_admin/asset/uploads/387/menu/menu-2023-website-nigiri-garlic-skipjack-tuna.png"></S.ItemImage>
				<S.ItemInfoContainer>
					<S.ItemName>Garlic Skipjack Tuna</S.ItemName>
					<S.ItemPrice>$5.99</S.ItemPrice>
				</S.ItemInfoContainer>
			</S.ItemContainer> */}