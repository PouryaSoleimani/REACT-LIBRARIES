//^ STYLED COMPONENTS 2
import React from 'react'
import styled from 'styled-components';


export const PrimaryButton = styled.button<{ $primary?: boolean; }>`
background-color : ${props => props.$primary ? "white" : 'darkgreen'};
 font-size:40px ;
 margin-top:20px ; 
 color:${props => props.$primary ? "black" : "white"} ;
 padding:1rem;
 `



const StyledComponents2 = () => {
  return (
    <>
    </>
  )
}

export default StyledComponents2