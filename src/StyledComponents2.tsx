//^ STYLED COMPONENTS 2
import React from 'react'
import styled from 'styled-components';


export const PrimaryButton = styled.button<{ $primary?: boolean; }>`
background-color : ${props => props.$primary ? "white" : 'hotpink'};
 font-size:30px ;
 margin-top:20px ; 
 color:${props => props.$primary ? "black" : "white"} ;
font-weight: bold;
 padding:1rem 3rem;
 border-radius:20px;
 `



const StyledComponents2 = () => {
  return (
    <>
    </>
  )
}

export default StyledComponents2