import styled from "styled-components"
import { IoIosArrowDown } from "react-icons/io";
import backgroundImage from "../../Images/background.jpg"

export const HomepageContainer = styled.div`
	width: 100vw;
  min-height: calc(100vh - 100px);
  background-image: linear-gradient(
    rgba(0, 0, 0, 0.45), 
    rgba(0, 0, 0, 0.85)
  ), url(${backgroundImage});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`

export const ViewMenuLink = styled.a`
	display: flex;
	align-items: center;
	background-color: transparent;
	color: ${({ theme }) => theme.colors.text};
	font-size: 22px;
	padding: 10px;
	border: 1px solid ${({ theme }) => theme.colors.text};
	border-radius: 1.5px;
	text-decoration: none;
	transition: 0.2s linear;
	&:hover {
		background-color: white;
		color: ${({ theme }) => theme.colors.background};
	}
`

export const DownArrow = styled(IoIosArrowDown)`
	margin-left: 5px;
`