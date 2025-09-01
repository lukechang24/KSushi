import styled from "styled-components"

export const CategoryListContainer = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
`

export const CategoryMarker = styled.button`
	font-family: ${props => props.theme.fonts.heading};
	position: fixed;
	top: calc(44px + 10px);
	background-color: transparent;
	color: white;
	right: ${({ theme }) => theme.spacing.pagePadding.mobile};
	border: 0;
	z-index: 6;
`