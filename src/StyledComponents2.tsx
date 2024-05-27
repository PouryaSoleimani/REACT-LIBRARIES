//^ STYLED COMPONENTS 2
import React from 'react'
import styled from 'styled-components';


export const PrimaryButton = styled.button<{ $primary?: boolean; }>`
 background-color : ${props => props.$primary ? "white" : 'hotpink'};
 font-size:30px ;
 margin-top:20px ; 
 color:${props => props.$primary ? "black" : "white"} ;
 font-weight: bold;
 width:20rem;
 text-align: center;
 border-radius:20px;
 border :10px solid ${props => props.$primary ? "hotpink" : "white"};
 `



const StyledComponents2 = () => {
  return (
    <>
    </>
  )
}

export default StyledComponents2