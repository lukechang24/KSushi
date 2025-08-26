import styled from "styled-components"

export const CategoryListContainer = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
`

export const CategoryMarker = styled.button`
	position: fixed;
	top: calc(44px + 10px);
	// left: 50%;
	// transform: translateX(-50%);
	right: ${({ theme }) => theme.spacing.pagePadding.mobile};
	border: 0;
	background-color: transparent;
`