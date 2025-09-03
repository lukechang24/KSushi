import styled from "styled-components"

export const MenuContainer = styled.div`
	width: 100%;
	max-width: 900px;
	padding: 0 ${({ theme }) => theme.spacing.pagePadding.mobile};
`

export const Menu = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`

export const MenuTitle = styled.h1`
	color: ${props => props.theme.colors.text};
	text-align: center;
	padding: 3px 5px;
	border-top: 1px solid white;	
	border-bottom: 1px solid white;	
	margin: 64px 0 20px;
`

export const CategoryIconContainer = styled.div`

`