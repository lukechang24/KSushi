import styled, { keyframes } from "styled-components"
import { motion } from "framer-motion";

const rotate = keyframes`
	from {
		transform: translateY(-100px);
	}
	to {
		transform: translateY(0);
	}
`;

export const CategoryContainer = styled.div`
	display: flex;
	flex-direction: column;
`

export const AccordionContainer = styled.div`
	width: 100%;
	color: ${props => props.active ? "white" : "black"};
	background-color: ${props => props.active ? "black" : "white"};
	border: 1px solid black;
	margin: 5px 0;
	transition: all 0.25s ease-in-out;
`

export const AccordionTitle = styled.div`
	font-size: 18px;
	padding: 10px;
`

export const ItemList = styled(motion.div)`
	display: flex;
	flex-wrap: wrap;
	gap: 10px;
`

export const SubcategoryTitle = styled.h2`
	position: ${props => props.sticky ? "fixed" : "relative"};
	top: 0px;
	width: 100%;
	font-size: 20px;
	background-color: white;
	padding: ${props => props.sticky ? "7px 0 10px" : "5px 0 10px"};
	box-shadow: ${props => props.sticky ? "none" : "none"};
`

export const InvisibleSpace = styled.h2`
	width: 100%;
	font-size: 20px;
	margin: 5px 0 10px;
	color: white;
	display: ${props => props.show ? "block" : "none"};
`