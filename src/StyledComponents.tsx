//^ STYLED-COMPONENTS
import React from 'react'
import styled from 'styled-components';


//STYLED COMPONENTS
const Title = styled.h1`font-size: 3.5em;text-align: center;color: #124169;font-weight : 900;`
const Wrapper = styled.section`padding : 4em ;background : #252525 ;display : flex ; flex-direction:column ; justify-content : center ; align-items : center; `
const Button = styled.button`background-color : green ; padding : 1rem ;border-radius : 15px ;color : white ;border : 5px solid white ; width : 10rem;`
const Text = styled.text`color:white ;font-size : 26px ;margin-top:10px ;font-weight : bold;`
const Circle = styled.circle`width:110px ; height : 110px ; border-radius : 100%; background-color:red; margin-top:30px; border:12px solid white ;`
const StyledComponents = () => {



  //COMPONENT  
  return (
    <div>
      <h1 className='bg-pink-400 text-black text-4xl text-center py-6 font-extrabold tracking-tighter w-full'>STYLED COMPONENTS</h1>
      <Wrapper>
        <Title>HELLO WORLD</Title>
        <Button>CLICK ME</Button>
        <Text>THIS IS A TESTING TEXT</Text>
        <Circle></Circle>
      </Wrapper>
    </div>
  )
}

export default StyledComponents