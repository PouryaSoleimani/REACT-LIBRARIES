//^ STYLED-COMPONENTS
import React from 'react'
import styled from 'styled-components';





const StyledComponents = () => {
  const Title = styled.h1`font-size: 3.5em;text-align: center;color: #124169;font-weight : 900;`
  const Wrapper = styled.section`padding : 4em ;background : #252525 ;display : flex ; flex-direction:column ; justify-content : center ; align-items : center  `
  const Button = styled.button`background-color : green ; padding : 1rem ;border-radius : 15px ;color : white ;border : 5px solid white ; width : 10rem`;
  const Text = styled.text`color:white ;font-size : 26px ;margin-top:10px ;font-weight : bold`



  return (
    <div>
      <h1 className='bg-pink-400 text-black text-4xl text-center py-6 font-extrabold tracking-tighter w-full'>STYLED COMPONENTS</h1>
      <Wrapper>
        <Title>HELLO WORLD</Title>
        <Button>CLICK ME</Button>
        <Text>THIS IS A TESTING TEXT</Text>
      </Wrapper>
    </div>
  )
}

export default StyledComponents