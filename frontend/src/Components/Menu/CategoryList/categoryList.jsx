import React, { useState, useEffect, useRef } from "react"
import Category from "../Category/category"
import Modal from "../Modal/modal"

import * as S from "./CategoryList.styles"

const CategoryList = ({ data }) => {
	const [activeTab, setActiveTab] = useState(Object.keys(data)[0])
	const [activeSub, setActiveSub] = useState("")
	const [selectedItem, setSelectedItem] = useState(null)

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

	const scrollToAccordion = (title) => {
		if (activeTab === title && activeAccordionRef.current) {
			const absoluteTop = activeAccordionRef.current.getBoundingClientRect().top + window.pageYOffset
			window.scrollTo({
				top: absoluteTop - 75, // Scroll to the top of the page
				behavior: 'smooth' // Optional: for smooth scrolling animation
			})
		}
	}

	const handleTab = (tabName, i) => {
		if (activeTab === tabName) {
			subRefs.current = []
			subOffsets.current = []
			setActiveTab(null)
		} else {
			setActiveTab(tabName)
			subRefs.current = []
			subOffsets.current = []
		}
	}

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
          if (subOffsets.current[i] - 20 <= scrollPos) {
            current = subRefs.current[i].dataset.name
          }
        }
        setActiveSub(current)
      } else {
        // Scroll up: first subcategory whose top < scroll, or previous one
        let current = ""
        for (let i = subOffsets.current.length - 1; i >= 0; i--) {
          if (subOffsets.current[i] < scrollPos) {
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
		<S.CategoryListContainer>
			{Object.keys(data).map((category, i)=> {
				return(
        <Category 
          key={category}
          title={category}
          items={data[category]}
					index={i}
					handleItemClick={handleItemClick}
					closeModal={closeModal}
					activeTab={activeTab}
					handleTab={handleTab}
					activeSub={activeSub}
					subRefs={subRefs}
					subOffsets={subOffsets}
					accordionRef={activeAccordionRef}
					scrollToAccordion={scrollToAccordion}
        />)
		})}
		{selectedItem &&
			<Modal 
				data={selectedItem}
				closeModal={closeModal}
			/>
		}
		</S.CategoryListContainer>
	)
}

export default CategoryList