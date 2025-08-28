import React, { useState, useEffect } from "react";
import axios from "axios"

import Navbar from "./Components/Navbar/navbar"
import Menu from "./Components/Menu/menu"
import { ThemeProvider, createGlobalStyle } from "styled-components";
import theme from "./theme"
// import Rolls from "./Components/Rolls";

const GlobalStyle = createGlobalStyle`
	*, *::before, *::after {
    box-sizing: border-box;
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
		display: flex;
		justify-content: center;
  }
`;

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
				<Menu data={data} loading={loading}/>
			</ThemeProvider>
		</>
  )
}

export default App;