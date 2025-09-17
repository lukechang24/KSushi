import { useState, useEffect } from "react"
import { ThemeProvider, createGlobalStyle } from "styled-components"
import styled from "styled-components"
import axios from "axios"

import Navbar from "./Components/Navbar/navbar"
import Homepage from "./Components/Homepage/homepage";
import Menu from "./Components/Menu/menu"
import Delivery from "./Components/Delivery/delivery"
import About from "./Components/About/about"
import theme from "./theme"

const GlobalStyle = createGlobalStyle`
	*, *::before, *::after {
    box-sizing: border-box;
  }
	html {
  	scroll-behavior: smooth;
	}
		
  body, h1, h2, h3, p, ul, ol, button {
    margin: 0;
    padding: 0;
		font-weight: normal;
  }

  body {
    font-family: ${props => props.theme.fonts.main};
    background-color: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.text};
  }

	#root {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
`

const LineBreak = styled.hr`
	width: 100%;
	border: none;
  height: 2px;
  background-color: rgba(255, 255, 255, 0.2);
  margin-bottom: ${({ $bottom }) => $bottom && "125px"};
	margin-top: ${({ $top }) => $top && "125px"};
`

const App = () => {
	const [resizeKey, setResizeKey] = useState(0)
	const [data, setData] = useState(null)
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		// axios.get("http://localhost:4000/menu")
		axios.get("https://ksushi.menu/api/menu")
			.then(response => {
				setData(response.data)
				setLoading(false)
			})
			.catch(err => {
				console.error(err);
				// setError("Failed to fetch menu data");
			})

		const handleResize = () => {
			if (window.innerWidth >= 768) {
				setResizeKey(prev => prev + 1)
			}
		}

		window.addEventListener("resize", handleResize)
  	return () => window.removeEventListener("resize", handleResize)
	}, [])

  return (
		<>
			<ThemeProvider theme={theme}>
			{/* <ThemeProvider key={resizeKey} theme={theme}> */}
				<GlobalStyle />
				<Navbar key={resizeKey}/>
				<Homepage />
				<LineBreak />
				<Menu data={data} loading={loading}/>
				<LineBreak />
				<Delivery />
				<LineBreak />
				<About />
			</ThemeProvider>
		</>
  )
}

export default App;