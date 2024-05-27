//^ THEME TOGGLER 2
import React, { useState } from 'react'
import styled, { ThemeProvider } from 'styled-components'

// INPUT THEME TYPE
type InputThemeType = { body: string, header: string, text: string, primary: string }

//^ STYLED COMPONENT VARIABLES AND THEMES
//THEMES
const DarkTheme = { body: "#303030", header: "#9f9999", text: '#d4d3d3', primary: '#f8e643', }

const LightTheme = { body: "#fafafa", header: "#131313", text: "#2e2d2d", primary: "hotpink" }

const Wrapper = styled.section`width : 100% ; height : 100vh ; border : 12px solid ${props => props.theme.primary} ; background-color : ${props => props.theme.body};`

const Header = styled.h1`font-size : 40px ; font-weight : bold ; text-align : center ; color : ${props => props.theme.header};`

const Text = styled.p`font-size : 20px; font-weight : 600 ; padding : 1rem 1rem ; margin-top : 20px ; color : ${props => props.theme.text};`

const ButtonParent = styled.div`display : flex ; align-items : center ; justify-content : center; gap : 3rem; width:100%; padding : 3rem;`

const DarkButton = styled.button`padding: 1rem; background-color: black ; border-radius : 30px; font-weight : bold ; font-size : 30px ; border : 17px solid #f8e643;`

const LightButton = styled.button`padding : 1rem ; background-color : white ; border-radius : 30px; font-weight : bold ; font-size : 30px ; border : 17px solid hotpink;`


//^ COMPONENT
const ThemeToggle2 = () => {
  //STATES AND FUNCTIONS FOR THEME TOGGLING
  const [theme, setTheme] = useState(LightTheme)

  function themeToggler(inputTheme: InputThemeType) { setTheme(inputTheme) }





  // RETURN
  return (
    <ThemeProvider theme={theme}>
      <Wrapper>
        <Header>THEME TOGGLE PAGE</Header>
        <Text> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil, consequuntur dolorem ex sit odit exercitationem ipsa voluptatibus aspernatur quia suscipit alias eum architecto ullam, obcaecati nostrum mollitia tempore molestiae voluptates.
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur iste quis expedita possimus officiis consectetur delectus quas vitae veritatis placeat, harum ipsa officia aliquid modi vero voluptatum fugit cumque commodi!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio iste eveniet minus labore a provident, minima veniam voluptate placeat neque vel beatae, mollitia rerum similique, eos dolorum? Repudiandae, earum incidunt.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt sunt excepturi vel rerum natus? Tempore, quasi amet et quae est dignissimos natus iusto eligendi inventore, fugit eos at soluta ducimus.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, explicabo unde! Vel omnis unde aliquam quia quidem? At earum a nesciunt, labore, numquam minus quod odit soluta libero iusto explicabo.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel doloribus, hic provident totam nesciunt beatae saepe maxime consequatur sed ut, quasi quod recusandae tempora dolorum nostrum voluptate praesentium repellat velit.
        </Text>
        <ButtonParent>
          <LightButton onClick={() => themeToggler(LightTheme)}>☀</LightButton>
          <DarkButton onClick={() => themeToggler(DarkTheme)}>🌙</DarkButton>
        </ButtonParent>
      </Wrapper>
    </ThemeProvider>
  )
}

export default ThemeToggle2