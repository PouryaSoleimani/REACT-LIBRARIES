//^ STYLED-COMPONENTS
import React from 'react'
import styled from 'styled-components';
import { PrimaryButton } from './StyledComponents2';

//STYLED COMPONENTS
const Title = styled.h1`font-size: 3.5em;text-align: center;color: #124169;font-weight : 900;`
const Wrapper = styled.section`padding : .5em ;background : #252525 ;display : flex ; flex-direction:column ; justify-content : start ; align-items : center; `
const Button = styled.button`background-color : green ; padding : 1rem ;border-radius : 15px ;color : white ;border : 10px solid black ; font-weight:bold ; font-size:19px; margin-top:10px;`
const Text = styled.text`color:white ;font-size : 26px ;margin-top:10px ;font-weight : bold;`
const Circle = styled.circle`width:90px ; height : 90px ; border-radius : 100%; background-color:red; margin-top:10px; border:13px solid white ;`
const DisabledButton = styled(PrimaryButton)`color: darkgray ; background-color : #484444;border: 10px solid black; cursor: not-allowed;` // INHERITANCE IN STYLED-COMPONENTS
const InheritedCircle = styled(Circle)`background-color:white; border:14px solid red;`


//COMPONENT  
const StyledComponents = () => {

  return (
    <div>
      <h1 className='bg-pink-400 text-black text-4xl text-center py-6 font-extrabold tracking-tighter w-full'>STYLED COMPONENTS</h1>
      <Wrapper>
        <Title>HELLO WORLD</Title>
        <div className='flex space-x-6'>
        <Button>CLICK ME</Button>
        <Button>CLICK ME</Button>
        </div>
        <Text>THIS IS A TESTING TEXT</Text>
        <div className='flex space-x-6 mt-4'>
          <Circle></Circle>
          <InheritedCircle></InheritedCircle>
        </div>
        <div className='flex space-x-10 my-6'>
        <PrimaryButton onClick={() => console.log('CLICK CLICK')} $outline={true}>PRIMARY</PrimaryButton>
        <PrimaryButton onClick={() => console.log('CLICK CLICK')} $outline={false}>SECONDARY</PrimaryButton>
        <DisabledButton disabled>DISABLED</DisabledButton>
        </div>
      </Wrapper>
    </div>
  )
}

export default StyledComponents