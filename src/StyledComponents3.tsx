//^ STYLED COMPONENTS 3 PAGE
import React from 'react'
import styled from 'styled-components'

//STYLED COMPONENTS
const Wrapper = styled.div`display : flex ; flex-direction : column ; justify-content : start ; align-items : center ; gap : 1rem ; padding : .2rem ; border:10px solid lightsalmon; width : 100% ; height : 100vh;`
const Header = styled.h1`color : #a51201; font-size : 50px ; text-align: center ; padding: 1rem ; font-weight : bold ;`
const Text = styled.p`color : lightgray ; font-size : 22px ; padding : .2rem 2rem ; text-align : justify;`
const ButtonsParent  
const AcceptButton = styled.button`padding : .2rem 2rem ; width: 15rem; background-color : green ; font-size :24px ; font-weight : bold ; border-radius : 15px ;border : 5px solid currentColor; color : white;`
const RejectButton = styled(AcceptButton)`background-color : darkred;`
//COMPONENT
const StyledComponents3 = () => {
  return (
    <Wrapper>
      <Header>STYLED COMPONENTS</Header>
      <Text>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam consequuntur eaque modi ratione dolorem libero neque. Ad recusandae, sequi totam, voluptatibus atque quaerat dolorum consequuntur id laboriosam harum, voluptas quas.lorem Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique esse eius amet quidem ducimus placeat qui sint iste hic inventore laboriosam, nesciunt iusto magnam excepturi libero in illo repellendus praesentium! Lorem ipsum dolor sit amet consectetur adipisicing elit. Non quisquam adipisci tempore debitis eum reiciendis, iste alias voluptatem sit. Repudiandae a exercitationem dolorem dignissimos voluptatum quidem optio quas provident dolores.
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae ut vitae at impedit recusandae totam quod corporis voluptates, accusantium quas aliquam similique unde commodi quam perspiciatis optio id maiores tempore!
      </Text>
      
      <AcceptButton>Accept</AcceptButton>
      <RejectButton>Reject</RejectButton>

    </Wrapper>
  )
}

export default StyledComponents3