import styled from "styled-components"

export const ItemContainer = styled.li`
  list-style: none;
	flex: 0 1 calc(50% - 2%);
	margin-bottom: 15px;

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
`

export const ItemInfoContainer = styled.div`
	display: flex;
	justify-content: space-between;
	// align-items: center;
`

export const ItemName = styled.h3`
	font-size: 14px;
`

export const ItemPrice = styled.p`
	font-size: 12px;
	padding-top: 1px;
	margin-left: 5px;
`