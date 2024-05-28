//^ STYLED COMPONENTS 3 PAGE
import React, { useState } from 'react'
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components'

//TYPES
type InputThemeType = { body: string, title: string, text: string }

//STYLED COMPONENTS
const Wrapper = styled.div`display : flex ; flex-direction : column ; justify-content : start ; align-items : center ; gap : 1rem ; padding : .2rem ; border:10px solid lightsalmon; width : 100% ; height : 100vh; background-color : ${props => props.theme.body};`
const Header = styled.h1`color : #a51201; font-size : 50px ; text-align: center ; padding: 1rem ; font-weight : bold ;`
const Text = styled.p`color : ${props => props.theme.text} ; font-size : 22px ; padding : .2rem 2rem ; text-align : justify;`
const ButtonsParent = styled.div`display : flex ; justify-content : center ; align-items : center ; gap : 2rem ; margin-top : 3rem;`
const AcceptButton = styled.button`padding : .2rem 2rem ; width: 15rem; background-color : green ; font-size :24px ; font-weight : bold ; border-radius : 15px ; color : white; &:hover{transform : scale(1.2)}; transition : all 300ms linear;`
const RejectButton = styled(AcceptButton)`background-color : darkred;`
const DisabledButton = styled(AcceptButton).attrs({ disabled: true })`background-color:gray ; color : darkgray ; cursor: not-allowed;`

//GLOBAL STYLES
const GlobalStyles = createGlobalStyle`button { border : 7px solid ${props => props.theme.title} ; border-radius : 20px;}`

// THEMING
const DarkTheme = { body: "#202020", title: '#7a7777', text: 'lightgray' }
const LightTheme = { body: "#fafafa", title: '#202020', text: 'black' }

const LightButton = styled(AcceptButton)`background-color:#cdcaca; padding:.5rem; width : 5rem;`
const DarkButton = styled(AcceptButton)`background-color :#101010; padding:.5rem; width : 5rem;`


//COMPONENT
const StyledComponents3 = () => {
  const [theme, setTheme] = useState(LightTheme)
  function themeToggler(inputTheme: InputThemeType) { setTheme(inputTheme) }


  return (
    <ThemeProvider theme={theme}>

      <Wrapper>
        <GlobalStyles />
        <Header>STYLED COMPONENTS</Header>

        <Text>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam consequuntur eaque modi ratione dolorem libero neque. Ad recusandae, sequi totam, voluptatibus atque quaerat dolorum consequuntur id laboriosam harum, voluptas quas.lorem Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique esse eius amet quidem ducimus placeat qui sint iste hic inventore laboriosam, nesciunt iusto magnam excepturi libero in illo repellendus praesentium! Lorem ipsum dolor sit amet consectetur adipisicing elit. Non quisquam adipisci tempore debitis eum reiciendis, iste alias voluptatem sit. Repudiandae a exercitationem dolorem dignissimos voluptatum quidem optio quas provident dolores.
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae ut vitae at impedit recusandae totam quod corporis voluptates, accusantium quas aliquam similique unde commodi quam perspiciatis optio id maiores tempore!
        </Text>

        <ButtonsParent>
          <AcceptButton>Accept</AcceptButton>
          <RejectButton>Reject</RejectButton>
          <DisabledButton>Disabled</DisabledButton>
        </ButtonsParent>

        <ButtonsParent>
          <LightButton onClick={() => setTheme(LightTheme)}>☀</LightButton>
          <DarkButton onClick={() => setTheme(DarkTheme)}>🌙</DarkButton>
        </ButtonsParent>

      </Wrapper>
    </ThemeProvider>
  )
}

export default StyledComponents3