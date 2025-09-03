import styled from "styled-components"
import backgroundImage from "../../Images/background.jpg"

export const HomepageContainer = styled.div`
	width: 100vw;
  min-height: calc(100vh - 100px);
  background-image: linear-gradient(
    rgba(0, 0, 0, 0.45), 
    rgba(0, 0, 0, 0.85)
  ), url(${backgroundImage});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`