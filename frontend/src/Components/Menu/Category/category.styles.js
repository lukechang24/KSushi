import styled from "styled-components"
import { motion } from "framer-motion"
import { RxCaretRight, RxCaretDown } from "react-icons/rx"
import { FaStar } from "react-icons/fa"

// const fade = keyframes`
// 	from {
// 		transform: translateY(-100px);
// 	}
// 	to {
// 		transform: translateY(0);
// 	}
// `;

export const CategoryContainer = styled.div`
	display: flex;
	flex-direction: column;
`

export const AccordionContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100%;
	font-size: 1.15rem;
	padding: 0.5em;
	border-bottom: 1px solid ${props => props.theme.colors.primary};
	margin-bottom: 0.5em;
	cursor: pointer;
	transition: all 0.25s ease-in-out;

	@media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
		padding: 0.75em;
		margin-bottom: 0.75em;
	}
`

export const AccordionTitle = styled.div`
	display: flex;
	align-items: center;
	// color: ${({ $active, theme }) => $active ? `${theme.colors.primary}` : `${theme.colors.text}`};
	@media (min-width: ${({ theme }) => theme.breakpoints.mobile}) {
		font-size: 1.25rem;
	}
	@media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
		font-size: 1.5rem;
	}
`

export const RightCaret = styled(RxCaretRight)`
	font-size: 1.5rem;
	@media (min-width: ${({ theme }) => theme.breakpoints.mobile}) {
		font-size: 2rem;
	}
`

export const DownCaret = styled(RxCaretDown)`
	// color: ${({ theme }) => theme.colors.primary};
	font-size: 1.5rem;
	@media (min-width: ${({ theme }) => theme.breakpoints.mobile}) {
		font-size: 2rem;
	}
`

export const Star = styled(FaStar)`
	color: #F0A500;
	margin-left: 0.5rem;
`

export const ItemList = styled(motion.div)`
	display: flex;
	flex-wrap: wrap;
	gap: 0 4%;
	@media (min-width: ${({ theme }) => theme.breakpoints.mobile}) {
		gap: 0 2%;
	}

	@media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
		gap: 0 2%;
	}
`

export const SubcategoryTitle = styled.h2`
	position: ${props => props.$sticky ? "fixed" : "relative"};
	top: ${props => props.$sticky ? "72px" : "0"};
	width: 100%;
	font-size: 1.25rem;
	background-color: ${({ theme }) => theme.colors.background};
	color: ${({ theme }) => theme.colors.text};
	padding: ${props => props.$sticky ? "10px 0 10px" : "10px 0 10px"};
	box-shadow: ${props => props.$sticky ? "none" : "none"};
	z-index: 5;
	@media (min-width: ${({ theme }) => theme.breakpoints.mobile}) {
		top: ${props => props.$sticky ? "88px" : "0"};
		font-size: 1.5rem;
	}
	@media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
		// top: ${props => props.$sticky ? "88px" : "0"};
		font-size: 1.75rem;
	}
`

export const InvisibleSpace = styled.h2`
	width: 100%;
	display: ${props => props.$show ? "block" : "none"};
	color: ${({ theme }) => theme.colors.background};
	font-size: 1.25rem;
	padding: 10px 0 10px;
	@media (min-width: ${({ theme }) => theme.breakpoints.mobile}) {
		font-size: 1.5rem;
	}
	@media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
		font-size: 1.75rem;
	}
`