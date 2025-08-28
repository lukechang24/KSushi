import styled from "styled-components"

export const NavbarContainer = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
	background-color: black;
	color: white;
	padding: 10px ${({ theme }) => theme.spacing.pagePadding.mobile};
	box-sizing: border-box;
	z-index: 30;
`

export const NavbarLogo = styled.h3`

`

export const HamburgerContainer = styled.div`
	display: flex;
	flex-direction: column;
`

export const HamburgerLine = styled.div`
	width: 25px;
	height: 2px;
	margin: 3px 0;
	background-color: white;
`

