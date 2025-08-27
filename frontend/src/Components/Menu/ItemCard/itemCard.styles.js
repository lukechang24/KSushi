import styled from "styled-components"

export const ItemContainer = styled.li`
  list-style: none;
	flex: 0 1 calc(50% - 10px);
	margin-bottom: 15px;
`

export const ItemImage = styled.img`
	width: 100%;
	height: 120px;
	object-fit: cover;
`

export const ItemInfoContainer = styled.div`
	display: flex;
	justify-content: space-between;
	// align-items: center;
`

export const ItemName = styled.h3`
	font-size: 14px;
`

export const ItemPrice = styled.p`
	font-size: 12px;
	padding-top: 1px;
	margin-left: 5px;
`