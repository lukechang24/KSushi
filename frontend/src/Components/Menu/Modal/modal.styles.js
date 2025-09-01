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

export const ModalContainer = styled.div`
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
	opacity: 0.25;
	background-color: black;
`

export const Modal = styled.div`
	width: 90%;
	position: fixed;
	display: flex;
	flex-direction: column;
	background-color: ${props => props.theme.colors.background};
	z-index: 50;
	margin: 0 10px;
	padding: 30px;

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
	margin: 0 0 5px;
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
	color: ${props => props.theme.colors.text};
	font-weight: 600;
	margin: 0 0 5px;
`

export const ModalPrice = styled.p`
	color: #a1a1a1;
	margin: 0 0 20px;
`

export const ModalDescription = styled.p`
	color: #a1a1a1;
	line-height: 25px;
	white-space: pre-line;
	margin: 0 0 5px;
`

export const ModalInfoContainer = styled.div`
	display: flex;
	align-items: center;
	color: #a1a1a1;
	& > *:not(:last-child)::after {
    content: "•";
    margin: 0 6px;
    color: #a1a1a1;
  }
`

export const ModalPieceCount = styled.p`
`

export const SpiceLevel = styled(FaPepperHot)`
	color: red;
`