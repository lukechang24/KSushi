import styled from "styled-components"

export const ModalContainer = styled.div`
	position: fixed;
	inset: 0;
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100vw;
	height: 100vh;
	overflow: hidden;
	opacity: ${({ $isLoaded }) => ($isLoaded ? 1 : 0)};
	transition: opacity 0.3s ease;
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
	align-items: center;
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
`


export const BlurredImage = styled.img`
  position: absolute;
  inset: 0;
	max-width: 100%;
	aspect-ratio: 4 / 3;
	object-fit: cover;  height: auto;
  filter: blur(20px);
  opacity: ${({ $isBlurred }) => ($isBlurred ? 1 : 0)};
  transition: opacity 0.3s ease;
`

export const FullImage = styled.img`
  position: relative;
	max-width: 100%;
	aspect-ratio: 4 / 3;
	object-fit: cover;
  opacity: ${({ $isLoaded }) => ($isLoaded ? 1 : 0)};
  transition: opacity 0.3s ease;
`

export const InfoContainer = styled.div`
	display: flex;
	justify-content: space-between;
`

export const ModalName = styled.h2`
	font-weight: 600;
	margin: 10px 0;
`

export const ModalPrice = styled.p`

`