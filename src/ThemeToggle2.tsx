//^ THEME TOGGLER 2
import React from 'react'
import styled, { ThemeProvider } from 'styled-components'


//^ STYLED COMPONENT VARIABLES AND THEMES
//THEMES
const DarkTheme = { body: "#303030", header: "#9f9999", text: '#d4d3d3', primary: '#f8e643', }

const LightTheme = { body: "#fafafa", header: "#131313", text: "#2e2d2d", primary: "hotpink" }

const Wrapper = styled.section`width : 100% ; height : 100vh ; border : 12px solid ${props => props.theme.primary} ; background-color : ${props => props.theme.body};`


//^ COMPONENT
const ThemeToggle2 = () => {
  return (
    <ThemeProvider theme={LightTheme}>
      <Wrapper>

      </Wrapper>
    </ThemeProvider>
  )
}

export default ThemeToggle2