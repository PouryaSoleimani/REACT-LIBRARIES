import React from 'react'
import styled from 'styled-components'

//STYLED COMPONENTS ========================================================================================================================================
const Wrapper = styled.div`display : flex ; align-items : center ; justify-content : center ; flex-direction : column ;`
const PageTitle = styled.h1`text-align : center ; font-size : 30px ; color : lime ; border-bottom : 10px solid lime ; background-color : #202020 ; padding : 1rem; width : 100%; font-weight : bold;`
const DatasWrapper = styled(Wrapper)`width : 90% ; height : 90vh ;`



// COMPONENT ===============================================================================================================================================
const JsonServer = () => {
  return (
    <Wrapper>
      <PageTitle>JSON SERVER</PageTitle>
      <DatasWrapper>
      
      </DatasWrapper>
    </Wrapper>
  )
}

export default JsonServer