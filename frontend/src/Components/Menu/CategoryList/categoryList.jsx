import React, { useState, useEffect, useRef, act } from "react"
import Category from "../Category/category"	

import * as S from "./CategoryList.styles"

const CategoryList = ({ data }) => {
	const [activeTab, setActiveTab] = useState(Object.keys(data)[0])
	const [activeSub, setActiveSub] = useState("")
	const subRefs = useRef([])
	const subOffsets = useRef([])
	const initialized = useRef(false)
	const lastScrollY = useRef(0)

	const accordionRefs = useRef([])
	const accordionOffsetRefs = useRef([])

	const setAccordionRef = (el, i) => {
		accordionRefs.current[i] = el
	}

	const populateAccordionOffset = (i) => {
		accordionRefs.current.forEach((ref, index) => accordionOffsetRefs.current[index] = ref.offsetTop)
		scrollToAccordion(i)
		if (i === Object.keys(data).length - 1) {
			initialized.current = true
		}
	}

	const scrollToAccordion = (i) => {
		if (initialized.current) {
			const absoluteTop = accordionRefs.current[i].getBoundingClientRect().top + window.pageYOffset
			window.scrollTo({
				top: absoluteTop + 343, // Scroll to the top of the page
				behavior: 'smooth' // Optional: for smooth scrolling animation
			})
			console.log("finsihed scrolling!")
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
			// setTimeout(() => {
			// 	window.scrollTo({
			// 		top: 200, // Scroll to the top of the page
			// 		behavior: 'smooth' // Optional: for smooth scrolling animation
			// 	})
			// 	console.log("finsihed scrolling!")
			// }, 100)
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
          if (subOffsets.current[i] <= scrollPos) {
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
					initialized={initialized}
					activeTab={activeTab}
					handleTab={handleTab}
					activeSub={activeSub}
					subRefs={subRefs}
					subOffsets={subOffsets}
					setAccordionRef={setAccordionRef}
					populateAccordionOffset={populateAccordionOffset}
        />)
		})}
		</S.CategoryListContainer>
	)
}

export default CategoryList