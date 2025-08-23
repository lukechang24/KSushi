import React, { useEffect, useState, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"

import ItemCard from "../ItemCard/itemCard"
import * as S from "./category.styles"

const Category = ({title, items, index, activeTab, handleTab, activeSub, subRefs, subOffsets, setAccordionRef, populateAccordionOffset }) => {

	const setSubRef = (el, i) => {
		if (el && activeTab === title) {
			subRefs.current[i] = el
		}
  }

	const populateSubRefOffset = () => {
		if (activeTab === title) {
			subRefs.current.forEach((ref, i) => subOffsets.current[i] = ref.offsetTop)
		}
	}

	return(
		<S.CategoryContainer>
			<S.AccordionContainer
				onClick={() => handleTab(title, index)}
				ref={(el) => setAccordionRef(el, index)}
				active={activeTab === title}
			>
				<S.AccordionTitle>{title}</S.AccordionTitle>
			</S.AccordionContainer>
			<AnimatePresence initial={true}>
				<S.ItemList
					key={title}
					initial={true}
					animate={{
						height: activeTab === title ? "auto" : 0,
						opacity: activeTab === title ? 1 : 0,
					}}
					transition={{ duration: 0.25, ease: "easeIn" }}
					style={{ overflow: "hidden" }}
					onAnimationComplete={() => {
						populateSubRefOffset()
						populateAccordionOffset(index, title)
					}}
				>
					{items.map((item, i) => {
						if (item.name.indexOf("Title") === 0) {
							const subcategory = item.name.split("Title ")[1]
							return(
								<>
									<S.SubcategoryTitle
										key={subcategory}
										ref={(el) => setSubRef(el, i)}
										data-name={subcategory}
										sticky={activeSub === subcategory}
									>
										{subcategory.toUpperCase()}
									</S.SubcategoryTitle>
									<S.InvisibleSpace show={activeSub === subcategory}>X</S.InvisibleSpace>
								</>
							)
						} else {
							return(
								<ItemCard data={item}/>
							)
						}
				})}
				</S.ItemList>
			</AnimatePresence>
		</S.CategoryContainer>
	)
}

export default Category