import { useState, useEffect } from "react"
import { ThemeProvider, createGlobalStyle } from "styled-components"
import styled from "styled-components"
import axios from "axios"

import Navbar from "./Components/Navbar/navbar"
import Homepage from "./Components/Homepage/homepage";
import Menu from "./Components/Menu/menu"
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
    font-family: ${props => props.theme.fonts.heading};
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
  margin: 125px 0;
`

const App = () => {
	const [data, setData] = useState(null)
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		// axios.get("http://localhost:4000/menu")
		axios.get("https://ksushi.vercel.app/api/menu")
			.then(response => {
				setData(response.data)
				setLoading(false)
				console.log(response.data.freshRoll)
			})
			.catch(err => {
				console.error(err);
				// setError("Failed to fetch menu data");
			})
	}, [])

  return (
		<>
			<ThemeProvider theme={theme}>
				<GlobalStyle />
				<Navbar />
				<Homepage />
				<Menu data={data} loading={loading}/>
				<LineBreak />
				<About />
			</ThemeProvider>
		</>
  )
}

export default App;