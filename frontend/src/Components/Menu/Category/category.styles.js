import styled from "styled-components"
import { motion } from "framer-motion"
import { RxCaretRight, RxCaretDown } from "react-icons/rx";

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
	// color: ${props => props.active ? "white" : "black"};
	// background-color: ${props => props.active ? "black" : "white"};
	border: 1px solid black;
	margin: 0 0 10px;
	transition: all 0.25s ease-in-out;
`

export const AccordionTitle = styled.div`
	font-size: 18px;
	padding: 10px;
`

export const RightCaret = styled(RxCaretRight)`
	font-size: 25px;
	margin-right: 10px;
`

export const DownCaret = styled(RxCaretDown)`
	font-size: 25px;
	font-weight: lighter;
	margin-right: 10px;
`


export const ItemList = styled(motion.div)`
	display: flex;
	flex-wrap: wrap;
	gap: 0 10px;
	// margin-top: ${props => props.setMargin ? "10px" : "0"};
`

export const SubcategoryTitle = styled.h2`
	position: ${props => props.sticky ? "fixed" : "relative"};
	top: ${props => props.sticky ? "44px" : "0"};
	width: 100%;
	font-size: 20px;
	background-color: white;
	padding: ${props => props.sticky ? "7px 0 10px" : "7px 0 10px"};
	box-shadow: ${props => props.sticky ? "none" : "none"};
`

export const InvisibleSpace = styled.h2`
	width: 100%;
	font-size: 20px;
	margin: 5px 0 10px;
	color: white;
	display: ${props => props.show ? "block" : "none"};
`