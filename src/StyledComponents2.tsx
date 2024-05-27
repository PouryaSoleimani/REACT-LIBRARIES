//^ STYLED COMPONENTS 2
import React from 'react'
import styled from 'styled-components';


export const PrimaryButton = styled.button<{ $outline?: boolean; }>`
 background-color : ${props => props.$outline ? "white" : 'hotpink'};
 font-size:30px ;
 margin-top:20px ; 
 color:${props => props.$outline ? "black" : "white"} ;
 font-weight: bold;
 width:16rem;
 text-align: center;
 border-radius:20px;
 border :10px solid ${props => props.$outline ? "hotpink" : "white"};
 `



const StyledComponents2 = () => {
  return (
    <>
    </>
  )
}

export default StyledComponents2