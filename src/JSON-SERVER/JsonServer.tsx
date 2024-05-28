import React from 'react'
import styled from 'styled-components'

//STYLED COMPONENTS ========================================================================================================================================
const Wrapper = styled.div`display : flex ; align-items : center ; justify-content : center ;`
const PageTitle = styled.h1`text-align : center ; font-size : 30px ; color : lime ; border-bottom : 10px solid lime ; background-color : #202020 ; padding : 1rem; width : 100%; font-weight : bold;`




// COMPONENT ===============================================================================================================================================
const JsonServer = () => {
  return (
    <Wrapper>
      <PageTitle>JSON SERVER</PageTitle>
    </Wrapper>
  )
}

export default JsonServer