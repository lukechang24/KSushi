import styled, { keyframes } from "styled-components"
import { FaCircleNotch } from "react-icons/fa";

export const MenuContainer = styled.div`
	width: 100%;
	min-height: 1000px;
	max-width: 900px;
	padding: 0 ${({ theme }) => theme.spacing.pagePadding.mobile};
`


const spin = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`

export const Spinner = styled(FaCircleNotch)`
  font-size: 30px;
	margin-top: 150px;
  color: ${({ theme }) => theme.colors.text};
  animation: ${spin} 1s linear infinite;
`

export const Menu = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	color: ${props => props.theme.colors.text};
`

export const MenuTitle = styled.h1`
	color: ${props => props.theme.colors.text};
	text-align: center;
	padding: 3px 5px;
	border-top: 1px solid white;	
	border-bottom: 1px solid white;	
	margin: 64px 0 20px;
`

export const CategoryLinkContainer = styled.div`
	max-width: 500px;
	display: flex;
	flex-wrap: wrap;
	gap: 20px 2.7%;
	margin-bottom: 20px;
`

export const CategoryLink = styled.button`
	// width: 100px;
	display: flex;
	flex: 0 1 calc(31.4%);
	flex-direction: column;
	align-items: center;
	background-color: transparent;
	color: ${props => props.theme.colors.text};
	border: none;
`

export const CategoryIcon = styled.div`
	width: 80px;
	height: 80px;
	background-color: white;
	border-radius: 100px;
	@media (min-width: ${({ theme }) => theme.breakpoints.mobile}) {
		width: 100px;
		height: 100px;	
	}
`

export const CategoryName = styled.h3`
	font-size: 12px;
	text-align: center;
	margin-top: 10px;

	@media (min-width: ${({ theme }) => theme.breakpoints.mobile}) {
		font-size: 16px;
	}
`

export const CategoryList = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
`

export const CategoryMarker = styled.button`
	font-family: ${props => props.theme.fonts.heading};
	position: fixed;
	top: 64px;
	background-color: transparent;
	color: white;
	right: ${({ theme }) => theme.spacing.pagePadding.mobile};
	border: 0;
	z-index: 6;
	@media (min-width: ${({ theme }) => theme.breakpoints.mobile}) {
		top: 74px;
	}
`