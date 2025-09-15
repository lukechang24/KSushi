import styled, { keyframes } from "styled-components"
import { TbHandFinger } from "react-icons/tb"

const blinkAnimation = keyframes`
  0% {
    opacity: 0.25;
  }
	15% {
		opacity: 1;
	}
	85% {
		opacity: 1;
	}
  100% {
    opacity: 0.25;
  }
`

export const ItemContainer = styled.li`
	position: relative;
  list-style: none;
	flex: 0 1 calc(50% - 2%);
	cursor: pointer;

	@media (min-width: ${({ theme }) => theme.breakpoints.mobile}) {
		flex: 0 1 calc(32.9% - 1%);
	}

	@media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
		flex: 0 1 calc(24.5% - 1%);
	}
)

	// @media (min-width: 600px) {
  //   width: 30%;     /* ~3 per row */
  // }
`

export const ItemImage = styled.img`
	width: 100%;
  aspect-ratio: 4 / 3;
	object-fit: cover;
	object-position: center center;
	border-radius: 3px;
	// filter: brightness(90%);
`

export const ItemInfoContainer = styled.div`
	display: flex;
	justify-content: space-between;
`

export const ItemName = styled.h3`
	font-size: 14px;
	white-space: pre-line;
`

export const SmallText = styled.p`
	font-size: 12px;
	// white-space: pre-line;
`

export const ItemPrice = styled.p`
	font-size: 12px;
	padding-top: 1px;
	margin-left: 5px;
`

export const ItemTouch = styled(TbHandFinger)`
	font-size: 1.75rem;
	position: absolute;
	inset: 0;
	margin: 0.4rem;
	animation: ${blinkAnimation} 1.75s linear infinite;
`