import styled, { keyframes } from "styled-components"
import { FaPepperHot } from "react-icons/fa";

const fadeIn = keyframes`
	from {
		opacity: 0;
	}
	to {
		opacity: 1;
	}
`

export const ModalSection= styled.div`
	position: fixed;
	inset: 0;
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100vw;
	height: 100vh;
	overflow: hidden;
	animation: ${fadeIn} 0.2s ease-in-out forwards;
`

export const Overlay = styled.div`
	position: fixed;
	width: 100%;
	height: 100%;
	opacity: 0.5;
	background-color: black;
`

export const ModalContainer = styled.div`
	width: 90%;
	position: fixed;
	display: flex;
	flex-direction: column;
	background-color: #111;
	padding: 30px;
	border-radius: 10px;
	margin: 0 10px;
	z-index: 50;
	
	@media (min-width: ${({ theme }) => theme.breakpoints.mobile}) {
		width: 400px;
	}

	@media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
		width: 500px;
	}
`

export const ExitButton = styled.button`
	position: absolute;
	top: 0;
	right: 2px;
	width: 30px;
	height: 30px;
	background-color: transparent;
	font-size: 30px;
	padding: 0;
	border: none;
	color: ${props => props.theme.colors.text};
	&:active {
		color: white;
		background-color: darkRed;
	}
	&:focus {
		color: white;
		background-color: darkRed;
	}
`

export const ModalImageContainer = styled.div`
	position: relative;
  width: 100%;
  height: auto;
	aspect-ratio: 1 / 1;
	// margin: 0 0 5px;
`


export const BlurredImage = styled.img`
	position: absolute;
	inset: 0;
	width: 100%;
	height: 100%;
	aspect-ratio: 1 / 1;
	object-fit: cover;
`

export const FullImage = styled.img`
	position: absolute;
	inset: 0;
	width: 100%;
	height: 100%;
	display: ${({ $isLoaded }) => ($isLoaded ? "block" : "none")};
	aspect-ratio: 1 / 1;
	object-fit: cover;
	// filter: brightness(90%)
`

export const ModalName = styled.h2`
	color: ${({ theme }) => theme.colors.text};
	font-weight: 600;
	margin: 5px 0 0;
`

export const ModalPrice = styled.p`
	color: ${({ theme }) => theme.colors.primary};
	font-weight: 600;
	margin: 5px 0 0;
`

export const ModalInfoContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 10px 0;
	margin: 15px 0 0;
`

export const ModalDescription = styled.p`
	color: ${({ theme }) => theme.colors.textSecondary};
	font-weight: 300;
	line-height: 20px;
	white-space: pre-line;
`

export const Bold = styled.span`
	font-weight: 800;
	margin-right: 3px;
`

export const ModalExtraContainer = styled.div`
	display: flex;
	align-items: center;
	color: ${({ theme }) => theme.colors.textSecondary};
	& > *:not(:last-child)::after {
    content: "•";
    margin: 0 6px;
    color: #a1a1a1;
  }
`

export const ModalPieceCount = styled.p`
	font-weight: 300;
`

export const SpiceLevel = styled(FaPepperHot)`
	color: red;
`