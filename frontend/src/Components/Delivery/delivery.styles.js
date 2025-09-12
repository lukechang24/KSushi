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
	margin: 5rem 0 2rem;
`

export const DeliveryCardContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 2rem 0;
	@media (min-width: ${({ theme }) => theme.breakpoints.mobile}) {
		flex-direction: row;
		gap: 0 2rem;
	}
`

export const DeliveryCard = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: ${({ $padding }) => $padding};
	border-radius: 8px;
	cursor: pointer;
	transition: all 0.2s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary};
  }
`

export const DeliveryLogo = styled.img`
	width: ${({ $width }) => $width};
`

export const DeliveryButton = styled.div`
	margin-top: ${({ $marginTop }) => $marginTop};
	border-bottom: 1px solid ${({ theme }) => theme.colors.text};
`