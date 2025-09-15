import styled, { keyframes } from "styled-components"
import { FaCircleNotch } from "react-icons/fa"
import { FaC, FaChevronUp } from "react-icons/fa6";

const fadeInOut = keyframes`
	0% { opacity: 0; transform: translate(-50%, -50%) scale(0.95); }
  10% { opacity: 1; transform: translate(-50%, -50%) scale(1); }
  80% { opacity: 1; transform: translate(-50%, -50%) scale(1); }
  100% { opacity: 0; transform: translate(-50%, -50%) scale(0.95); }
`

export const MenuSection = styled.div`
	width: 100%;
	max-width: 900px;
	padding: 0 ${({ theme }) => theme.spacing.pagePadding.mobile};
	margin-bottom: 5rem;
`

const spin = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`

export const Spinner = styled(FaCircleNotch)`
  font-size: 3rem;
	margin-top: 10rem;
  color: ${({ theme }) => theme.colors.text};
  animation: ${spin} 1s linear infinite;
`

export const Menu = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	color: ${({ theme }) => theme.colors.text};
`

export const MenuTitle = styled.h1`
	color: ${({ theme }) => theme.colors.text};
	text-align: center;
	padding: 5px;
	border-top: 1px solid ${({ theme }) => theme.colors.primary};
	border-bottom: 1px solid ${({ theme }) => theme.colors.primary};
	margin: 6rem 0 2rem;
`

export const CategoryLinkContainer = styled.div`
	max-width: 500px;
	display: flex;
	flex-wrap: wrap;
	gap: 20px 2.7%;
	margin-bottom: 20px;
`

export const CategoryLink = styled.button`
	display: flex;
	flex: 0 1 calc(31.4%);
	flex-direction: column;
	align-items: center;
	background-color: transparent;
	color: ${props => props.theme.colors.text};
	border: none;
	cursor: pointer;
`

export const CategoryLinkIcon = styled.img`
	width: 80px;
	height: 80px;
	background-color: white;
	border-radius: 100px;
	@media (min-width: ${({ theme }) => theme.breakpoints.mobile}) {
		width: 100px;
		height: 100px;	
	}
`

export const CategoryLinkName = styled.h3`
	font-family: ${props => props.theme.fonts.main};
	font-size: 0.75rem;
	text-align: center;
	margin-top: 0.65rem;
	@media (min-width: ${({ theme }) => theme.breakpoints.mobile}) {
		font-size: 1rem;
	}
`

export const CategoryList = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
`

export const CategoryMarker = styled.button`
	font-family: ${props => props.theme.fonts.secondary};
	position: fixed;
	top: 86px;
	right: ${({ theme }) => theme.spacing.pagePadding.mobile};
	background-color: transparent;
	color: ${({ theme }) => theme.colors.text};
	text-align: right;
	letter-spacing: -0.025em;
	border: 0;
	@media (min-width: ${({ theme }) => theme.breakpoints.mobile}) {
		top: 96px;
	}
	@media (min-width: 900px) {
		display: none;
	}
`

export const MenuHint = styled.h3`
	position: fixed;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	display: ${({ $show }) => $show ? "block" : "none"};
	width: 15rem;
	font-size: 2rem;
	font-weight: 300;
	text-align: center;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.75);
	animation: ${fadeInOut} 3s linear;
`

export const BackToTop = styled.button`
  position: fixed;
  bottom: 1.5rem;
  right: 1rem;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.text};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.25rem;
  border: none;
  cursor: pointer;
  box-shadow: 0 2px 8px rgba(0,0,0,0.3);
  transition: background-color 0.2s ease, transform 0.2s ease;

  &:hover {
    background-color: #d98f00; /* slightly darker primary */
    transform: translateY(-2px);
  }
`

export const ChevronUp = styled(FaChevronUp)`
	
`