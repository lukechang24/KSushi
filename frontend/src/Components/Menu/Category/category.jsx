import React from "react"
import { AnimatePresence } from "framer-motion"

import ItemCard from "../ItemCard/itemCard"
import * as S from "./category.styles"

const Category = ({title, items, index, handleItemClick, closeModal, isOpen, handleTab, activeSub, subRefs, subOffsets, accordionRef, scrollToAccordion }) => {

	const setSubRef = (el, i) => {
		if (el &&  isOpen) {
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
				active={isOpen}
			>
				<S.AccordionTitle>{title}</S.AccordionTitle>
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
					transition={{ duration: 0.25, ease: "easeIn" }}
					style={{ overflow: "hidden" }}
					onAnimationComplete={() => {
						if (!isOpen) return
						populateSubRefOffset()
						scrollToAccordion()
					}}
					setMargin={isOpen}
				>
					{items.map((item, i) => {
						if (item.name.indexOf("Title") === 0) {
							const subcategory = item.name.split("Title ")[1]
							return(
								<React.Fragment key={subcategory}>
									<S.SubcategoryTitle
										ref={(el) => setSubRef(el, i)}
										data-name={subcategory}
										sticky={activeSub === subcategory}
									>
										{subcategory.toUpperCase()}
									</S.SubcategoryTitle>
									<S.InvisibleSpace show={activeSub === subcategory}>X</S.InvisibleSpace>
								</React.Fragment>
							)
						} else {
							return(
								<ItemCard 
									data={item}
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