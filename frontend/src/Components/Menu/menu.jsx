import { useState, useEffect, useLayoutEffect, useRef } from "react"
import Category from "./Category/category"
import Modal from "./Modal/modal"

// import salmon from "../../Images/salmon nigiri.jpg"
import salmon from "../../Images/salmon nigiri.jpg"
import tuna from "../../Images/tuna lovers roll.jpg"
import chicken from "../../Images/chicken bento.jpg"
import gyoza from "../../Images/gyoza.jpg"
import yuzu from "../../Images/yuzu mule.jpg"
import tempura from "../../Images/tempura ice cream.jpg"

import * as S from "./menu.styles"

const categoryUrl = [salmon, tuna, chicken, gyoza, yuzu, tempura]

const Menu = ({ data, loading }) => {
	const [activeTab, setActiveTab] = useState(null)
	const [activeSub, setActiveSub] = useState("")
	const [selectedItem, setSelectedItem] = useState(null)
	const [showHint, setShowHint] = useState(false)
	
	const lastWindowWidth = useRef(window.innerWidth);
	const triggeredHintRef = useState(false)
	const menuRef = useRef()
	const subRefs = useRef([])
	const subOffsets = useRef([])
	const lastScrollY = useRef(0)

	const activeAccordionRef = useRef(null)

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
				top: absoluteTop - 120, // Scroll to the top of the page
				behavior: 'smooth' // Optional: for smooth scrolling animation
			})
		}
	}

	const handleTab = (tabName) => {
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
			const scrollPos = window.scrollY
			const scrollingDown = scrollPos > lastScrollY.current
			lastScrollY.current = scrollPos

			const menuTop = menuRef.current && menuRef.current.offsetTop - 100
			const scrollBottom = window.scrollY

			if (!triggeredHintRef.current && scrollBottom >= menuTop) {
				setShowHint(true)
				triggeredHintRef.current = true
				setTimeout(() => {
					setShowHint(false)
				}, 3000)
			}

			if (menuRef.current && (scrollPos > menuRef.current.offsetTop + menuRef.current.offsetHeight - 180)) {
				setActiveSub(null)
				return
			}

			if (!subOffsets.current.length) return

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

	useLayoutEffect(() => {
  const handleResize = () => {
    // subRefs.current.forEach((ref, i) => {
    //   subOffsets.current[i] = ref.offsetTop
    // })
		// console.log(subRefs.current, "SUBREFS")
		// console.log(subOffsets.current, "THIS")
		if (window.innerWidth !== lastWindowWidth.current) {
			lastWindowWidth.current = window.innerWidth
			// Only reset if actual width changed
			setActiveTab(null)
			setActiveSub(null)
		}
  }
	
  window.addEventListener("resize", handleResize)
  return () => window.removeEventListener("resize", handleResize)
	}, [])

	return(
		<S.MenuSection id="menu">
			{loading 
				?
					<S.Menu>
						<S.MenuTitle>MENU</S.MenuTitle>
						<S.Spinner></S.Spinner>
					</S.Menu>
				:
					<S.Menu ref={menuRef}>
						<S.MenuTitle>MENU</S.MenuTitle>
						<S.CategoryLinkContainer>
							{Object.keys(data).slice(1).map((category, i) => {
								return(
									<S.CategoryLink
										key={category}
										onClick={() => {
											if (activeTab !== category) {
												handleTab(category)
												setTimeout(() => scrollToAccordion(true), 350);
											} else {
												scrollToAccordion(true)
											}
										}}
									>
										<S.CategoryLinkIcon src={categoryUrl[i]}></S.CategoryLinkIcon>
										<S.CategoryLinkName>{category}</S.CategoryLinkName>
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
			<S.MenuHint $show={showHint}>Tap for more details</S.MenuHint>
		</S.MenuSection>
	)
}

export default Menu