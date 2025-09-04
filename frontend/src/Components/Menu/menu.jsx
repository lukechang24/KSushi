import React, { useState, useEffect, useRef } from "react"
import Category from "./Category/category"
import Modal from "./Modal/modal"

import * as S from "./menu.styles"

const Menu = ({ data, loading }) => {
	const [activeTab, setActiveTab] = useState(null)
	const [activeSub, setActiveSub] = useState("")
	const [selectedItem, setSelectedItem] = useState(null)

	const subRefs = useRef([])
	const subOffsets = useRef([])
	const lastScrollY = useRef(0)

	const activeAccordionRef = useRef(null)
	const prevAccordionTop = useRef(null)

	const handleItemClick = (item) => {
		setSelectedItem(item)
	}

	const closeModal = () => {
		setSelectedItem(null)
	}

	const scrollToAccordion = (isLink = false) => {
		if (activeAccordionRef.current) {
			const absoluteTop = activeAccordionRef.current.getBoundingClientRect().top + window.pageYOffset
			if (absoluteTop > window.pageYOffset && !isLink) {
				return
			}
			window.scrollTo({
				top: absoluteTop - 60, // Scroll to the top of the page
				behavior: 'smooth' // Optional: for smooth scrolling animation
			})
		}
	}

	const handleTab = (tabName) => {
		if (activeAccordionRef.current) {
			prevAccordionTop.current = activeAccordionRef.current.getBoundingClientRect().top + window.pageYOffset
		}

		if (activeTab === tabName) {
			subRefs.current = []
			subOffsets.current = []
			setActiveTab(null)
		} else {
			setActiveSub(null)
			setActiveTab(tabName)
			subRefs.current = []
			subOffsets.current = []
		}
	}

	useEffect(() => {
		if (!loading) {
			setActiveTab(Object.keys(data)[0])
		}
	}, [loading])

	useEffect(() => {
		const handleScroll = () => {
			const scrollPos = window.scrollY;
			const scrollingDown = scrollPos > lastScrollY.current;
			lastScrollY.current = scrollPos;

			if (!subOffsets.current.length) return;

			if (scrollingDown) {
				// Scroll down: last subcategory whose top <= scroll
				let current = ""
				for (let i = 0; i < subOffsets.current.length; i++) {
					if (subOffsets.current[i] - 65 <= scrollPos) {
						current = subRefs.current[i].dataset.name
					}
				}
				setActiveSub(current)
			} else {
				// Scroll up: first subcategory whose top < scroll, or previous one
				let current = ""
				for (let i = subOffsets.current.length - 1; i >= 0; i--) {
					if (subOffsets.current[i] - 65 < scrollPos) {
						current = subRefs.current[i].dataset.name
						break
					}
				}
				setActiveSub(current)
			}
		}

		window.addEventListener("scroll", handleScroll)
		return () => window.removeEventListener("scroll", handleScroll)
	}, [])

	return(
		<S.MenuContainer id="menu">
			{loading 
				?
					<S.Menu>
						<S.MenuTitle>MENU</S.MenuTitle>
						<S.Spinner></S.Spinner>
					</S.Menu>
				:
					<S.Menu>
						<S.MenuTitle>MENU</S.MenuTitle>
						<S.CategoryLinkContainer>
							{Object.keys(data).map(category => {
								return(
									<S.CategoryLink 
										onClick={() => {
											handleTab(category)
											setTimeout(() => scrollToAccordion(true), 350);
										}}
									>
										<S.CategoryIcon></S.CategoryIcon>
										<S.CategoryName>{category}</S.CategoryName>
									</S.CategoryLink>
								)})
							}
						</S.CategoryLinkContainer>
						<S.CategoryList>
							{Object.keys(data).map((category, i)=> {
								return(
								<Category 
									key={category}
									title={category}
									items={data[category]}
									index={i}
									handleItemClick={handleItemClick}
									closeModal={closeModal}
									isOpen={activeTab === category}
									handleTab={handleTab}
									activeSub={activeSub}
									subRefs={subRefs}
									subOffsets={subOffsets}
									accordionRef={activeAccordionRef}
									scrollToAccordion={scrollToAccordion}
								/>)
						})}
						{activeSub && 
							<S.CategoryMarker>{activeTab}</S.CategoryMarker>
						}
						{selectedItem &&
							<Modal 
								data={selectedItem}
								closeModal={closeModal}
							/>
						}
						</S.CategoryList>
					</S.Menu>
			}
		</S.MenuContainer>
	)
}

export default Menu