import React from "react"
import { AnimatePresence } from "framer-motion"

import ItemCard from "../ItemCard/itemCard"
import * as S from "./category.styles"

const Category = ({title, items, index, handleItemClick, closeModal, isOpen, handleTab, activeSub, subRefs, subOffsets, accordionRef, scrollToAccordion }) => {

	const setSubRef = (el, i) => {
		if (el && isOpen) {
			subRefs.current[i] = el
		}
  }

	const populateSubRefOffset = () => {
		if (isOpen) {
			subRefs.current.forEach((ref, i) => subOffsets.current[i] = ref.offsetTop)
		}
	}

	const setAccordionRef = el => {
		if (isOpen) {
			accordionRef.current = el
		}
	}

	return(
		<S.CategoryContainer>
			<S.AccordionContainer
				onClick={() => handleTab(title, index)}
				ref={(el) => setAccordionRef(el)}
			>
				<S.AccordionTitle $active={isOpen}>
					{title}
					{index === 0 &&
						<S.Star></S.Star>
					}
				</S.AccordionTitle>
				{isOpen ?
					<S.DownCaret />
				:
					<S.RightCaret />
				}
			</S.AccordionContainer>
			<AnimatePresence initial={false}>
				<S.ItemList
					key={title}
					initial={false}
					animate={{
						height: isOpen ? "auto" : 0,
						opacity: isOpen ? 1 : 0,
					}}
					transition={{ duration: 0.235 }}
					style={{ overflow: "hidden" }}
					onAnimationComplete={() => {
						if (!isOpen) return
						populateSubRefOffset()
						scrollToAccordion()
					}}
				>
					{items.map((item, i) => {
						if (item.name.indexOf("Title") === 0) {
							let subcategory = item.name.split("Title ")[1]
							if (subcategory.split("(")[1]) {
								subcategory = subcategory.split("(")[0].toUpperCase() + "(" + subcategory.split("(")[1]
							} else {
								subcategory = subcategory.toUpperCase()
							}
							return(
								<React.Fragment key={subcategory}>
									<S.SubcategoryTitle
										ref={(el) => setSubRef(el, i)}
										data-name={subcategory}
										$sticky={activeSub === subcategory}
									>
										{subcategory}
									</S.SubcategoryTitle>
									<S.InvisibleSpace $show={activeSub === subcategory}>X</S.InvisibleSpace>
								</React.Fragment>
							)
						} else {
							return(
								<ItemCard 
									key={i}
									data={item}
									index={index}
									handleItemClick={handleItemClick}
								/>
							)
						}
				})}
				</S.ItemList>
			</AnimatePresence>
		</S.CategoryContainer>
	)
}

export default Category