import styled from "styled-components"

export const DeliverySection = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: ${({ theme }) => theme.spacing.pagePadding.mobile};
	// margin-top: 5rem;
	margin-bottom: 5rem;
`

export const DeliveryTitle = styled.h1`
	padding: 5px;
	border-top: 1px solid ${({ theme }) => theme.colors.primary};
	border-bottom: 1px solid ${({ theme }) => theme.colors.primary};
	margin: 5rem 0;
`

export const DeliveryContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 5rem 0;
	@media (min-width: ${({ theme }) => theme.breakpoints.mobile}) {
		flex-direction: row;
		gap: 0 5rem;
	}
`

export const DeliveryCard = styled.a`
	display: flex;
	flex-direction: column;
	align-items: center;
	cursor: pointer;
	text-decoration: none;
	@media (min-width: ${({ theme }) => theme.breakpoints.mobile}) {
		&:hover > div {
			border-bottom: 1px solid ${({ theme }) => theme.colors.text};
		}
		&:hover > img {
				background-color: ${({ theme }) => theme.colors.primary};
		}
	}
`

export const DeliveryLogo = styled.img`
	width: ${({ $width }) => $width};
	background-color: ${({ $color }) => $color};
	padding: ${({ $padding }) => $padding};
	border-radius: 8px;
	transition: all 0.2s ease;
`

export const DeliveryButton = styled.div`
	box-sizing: border-box;
	color: ${({ theme }) => theme.colors.text};
	border-bottom: 1px solid ${({ theme }) => theme.colors.text};
	margin-top: 1.5rem;
	transition: all 0.2s ease;
	@media (min-width: ${({ theme }) => theme.breakpoints.mobile}) {
		border-bottom: 1px solid transparent;
	}
`