import styled from "styled-components"
import { IoIosArrowDown } from "react-icons/io";
import heroImage from "../../Images/ksushi_out.jpg"

export const HomepageSection = styled.div`
	width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
	background-image: ${({ theme }) => `linear-gradient(rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.65)`}), url(${heroImage});  
	background-repeat: no-repeat;
  background-size: cover;
  background-position: 50% 50%;
	background-color: ${({ theme }) => theme.colors.background};
  text-align: center;
	@media (min-width: ${({ theme }) => theme.breakpoints.mobile}) {
		background-position: 50% 10%;
	}
	@media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
		background-position: 50% 50%;
	}
`

export const HomepageMenuLink = styled.a`
	display: flex;
	align-items: center;
	background-color: transparent;
	color: ${({ theme }) => theme.colors.text};
	font-size: 1.25rem;
	padding: 0.75em;
	border: 1px solid ${({ theme }) => theme.colors.text};
	border-radius: 1.5px;
	margin: 12rem 0;
	text-decoration: none;
	transition: 0.2s linear;
	&:hover {
		background-color: ${({ theme }) => theme.colors.text};
		color: ${({ theme }) => theme.colors.background};
	}
	@media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
		margin: 13rem 0;
	}
`

export const DownArrow = styled(IoIosArrowDown)`
	margin-left: 5px;
`

export const HomepageInfoContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-item: center;
	gap: 0.75rem 0;
	color: ${({ theme }) => theme.colors.text};
	font-size: 0.8rem;
	margin-bottom: 1rem;
	@media (min-width: ${({ theme }) => theme.breakpoints.mobile}) {
		font-size: 1rem;
		margin-bottom: 2rem;
	}
	@media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
		font-size: 1.25rem;
	}
`

export const HomepagePhone = styled.a`
	color: ${({ theme }) => theme.colors.text};
`

export const HomepageHours = styled.p`
	
`

export const HomepageAddress = styled.address`

`