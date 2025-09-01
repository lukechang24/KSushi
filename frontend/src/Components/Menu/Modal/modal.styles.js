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
	background-color: white;
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
	aspect-ratio: 1 / 1;
	object-fit: cover;
	display: ${({ $isLoaded }) => ($isLoaded ? "block" : "none")};
`

export const ModalName = styled.h2`
	color: black;
	font-weight: 600;
	margin: 10px 0 0;
`

export const ModalPrice = styled.p`
	color: #555;
	margin: 5px 0 0;
`

export const ModalDescription = styled.p`
	color: #555;
	line-height: 25px;
	white-space: pre-line;
	margin: 10px 0 0;
`

export const ModalInfoContainer = styled.div`
	display: flex;
	align-items: center;
	color: #444;
	margin: 5px 0 0;
	& > *:not(:last-child)::after {
    content: "•";
    margin: 0 8px;
    color: black; 
  }
`

export const ModalPieceCount = styled.p`
`

export const SpiceLevel = styled(FaPepperHot)`
	color: red;
`