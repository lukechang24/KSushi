import styled from "styled-components"

export const NavbarContainer = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
	background-color: ${props => props.theme.colors.background};
	color: white;
	padding: ${({ theme }) => theme.spacing.navbarPadding.mobile} ${({ theme }) => theme.spacing.pagePadding.mobile};
	box-sizing: border-box;
	z-index: 30;
	@media (min-width: ${({ theme }) => theme.breakpoints.mobile}) {
		padding: ${({ theme }) => theme.spacing.navbarPadding.tablet} ${({ theme }) => theme.spacing.pagePadding.mobile};
	}
`

export const NavbarLogo = styled.img`
	width: 130px;
	@media (min-width: ${({ theme }) => theme.breakpoints.mobile}) {
		// width: 140px;
	}
`

export const NavLinkContainer = styled.div`
	display: none;
	@media (min-width: ${({ theme }) => theme.breakpoints.mobile}) {
		display: block;
	}
`

export const NavLink = styled.a`
	text-decoration: none;
  color: ${({ theme }) => theme.colors.text};
  font-weight: 500;
  font-size: 16px;
	margin-left: 25px;
  cursor: pointer;
  transition: color 0.2s ease;
  &:hover {
    color: ${({ theme }) => theme.colors.hover};
  }
`

export const HamburgerContainer = styled.div`
	display: flex;
	flex-direction: column;
	@media (min-width: ${({ theme }) => theme.breakpoints.mobile}) {
		display: none;
	}
`

export const HamburgerLine = styled.div`
	width: 25px;
	height: 2px;
	margin: 3px 0;
	background-color: white;
`

