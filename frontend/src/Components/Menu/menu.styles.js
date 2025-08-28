import styled from "styled-components"

export const MenuContainer = styled.div`
	width: 100%;
	max-width: 900px;
	padding: 0 ${({ theme }) => theme.spacing.pagePadding.mobile};
	margin: 65px 0;
`

export const MenuList = styled.ul`
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
`