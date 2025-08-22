import styled from "styled-components"

export const MenuContainer = styled.div`
	width: 100%;
	padding: 0 ${({ theme }) => theme.spacing.pagePadding.mobile};
`

export const MenuList = styled.ul`
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
`