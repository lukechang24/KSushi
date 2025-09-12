import styled, { keyframes, css } from "styled-components"

const slideIn = keyframes`
	0% { right: -100vw; }
	100% { right: 0; }
`

const slideOut = keyframes`
	0% { right: 0; }
	100% { right: -100vw; }
`

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
	position: ${({ $sideNav }) => $sideNav && "absolute"};
	left: 45%;
	transform: ${({ $sideNav }) => $sideNav && "translateX(-50%)"};
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
	text-align: center;
	margin-left: ${({ $sideNav }) => !$sideNav && "25px"};
  cursor: pointer;
  transition: color 0.2s ease;
  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`

export const SideNavContainer = styled.div`
	display: flex;
	justify-content: flex-end;
	position: fixed;
	top: 0;
	width: 100vw;
	height: 100vh;
	visibility: ${({ $open }) => $open ? "visible" : "hidden"};
	animation: ${({ $open }) =>
    $open
      ? css`${slideIn} 0.3s forwards`
      : css`${slideOut} 0.5s forwards`};
`

export const SideNav = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	gap: 30px 0;
	width: 70%;
	height: 100%;
	background-color: ${({ theme }) => theme.colors.background};
	padding: 15px;
	z-index: 51;
`

export const Overlay = styled.div`
	position: fixed;
	width: 100%;
	height: 100%;
	opacity: 0.5;
	background-color: black;
	animation: ${({ $open }) =>
    $open
      ? css`${slideIn} 0s forwards`
      : css`${slideOut} 0s forwards`};
`