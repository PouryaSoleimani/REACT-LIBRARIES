//^ THEME TOGGLE PAGE
import React, { useState } from 'react'
import styled, { ThemeProvider } from 'styled-components'

type ThemeType = { body: string, title: string, desc: string, border: string }

//STYLED COMPONENTS AND VARIABLES
const DarkTheme = { body: "#101010", title: "#e1d3d3", desc: "#a7a3a3", border: "white" }

const LightTheme = { body: "#fafafa", title: "#black", desc: "#1b1a1a", border: "darkgray" }

const Wrapper = styled.section`width:100% ;height:100vh ;border : 15px solid ${props => props.theme.border};background-color :${(props) => props.theme.body} ;color : ${props => props.theme.title};`

const Title = styled.h1`font-size : 40px; text-align : center; font-weight : bold ; padding : 1rem 0;`

const Desc = styled.p`font-size : 20px ; letter-spacing : 1px; padding : 0 1rem; line-height : 60px; color : ${props => props.theme.desc};`

const DarkButton = styled.button`background-color : #3b3b3b;border-radius : 100%;color : white;padding : 1rem 1rem ;border : 3px solid lightgray;`

const LightButton = styled.button`background-color : #fafafa;border-radius : 100%;color : black;padding : 1rem 1rem ;border: 3px solid darkgray;`

//^ COMPONENT
const ThemeToggle = () => {
  //STATES
  const [themeToggler, setThemeToggler] = useState(DarkTheme)

  function toggleTheme(inputTheme: ThemeType) { setThemeToggler(inputTheme) }

  return (
    <ThemeProvider theme={themeToggler}>
      <Wrapper>
        <Title>THEME TOGGLE</Title>
        <Desc>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis tenetur dignissimos dolore possimus facilis mollitia soluta sequi beatae nisi rem laboriosam aliquam deserunt sit, nemo, nobis explicabo voluptates dolorem pariatur?</Desc>
        <div className='flex items-center justify-center py-10 text-3xl font-bold space-x-6 w-full'>
          <LightButton onClick={() => toggleTheme(LightTheme)}>☀</LightButton>
          <DarkButton onClick={() => toggleTheme(DarkTheme)}>🌙</DarkButton>
        </div>
      </Wrapper>
    </ThemeProvider>
  )
}

export default ThemeToggle