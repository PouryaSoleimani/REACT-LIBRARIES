//* JSON SERVER PAGE
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
type ProductItemType = { id: string, title: string, price: number }

//STYLED COMPONENTS ========================================================================================================================================
const Wrapper = styled.div`display : flex ; align-items : center ; justify-content : center ; flex-direction : column ; height : 100%;`
const PageTitle = styled.h1`text-align : center ; font-size : 30px ; color : lime ; border-bottom : 10px solid lime ; background-color : #202020 ; padding : 1rem; width : 100%; font-weight : bold;`
const DatasWrapper = styled(Wrapper)`width : 100% ; padding : .5rem 1rem; display : flex ; flex-direction : column ; align-items : start ; justify-content : start; border-bottom : 10px solid white;`
const Product = styled.p`font-size:22px ; color : #e1e1e1; line-height:40px; font-weight : 800;`

const FormWrapper = styled.div`display:flex ; align-items: start;justify-content : center ; padding : 4rem ; width: 100%; border-bottom : 10px solid white;`
const Form = styled.form`display : flex ; flex-direction : column ; align-items:center ; justify-content : start; padding : 1rem; border : 5px solid lime ; border-radius : 20px; gap: .5rem;`
const FormTitle = styled(PageTitle)`border-radius : 20px;`
const Button = styled.button`padding : 1rem 2rem; border-radius : 20px ; border: 5px solid lime ; background-color : #202020; color : white ; font-size : 26px; font-weight : 900;`



// COMPONENT ===============================================================================================================================================
const JsonServer = () => {

  const [products, setProducts] = useState([])

  function fetcher() { axios.get('http://localhost:3000/products?_sort=prices,-price').then(response => setProducts(response.data)) }

  useEffect(() => { fetcher() }, [])

  // FORM STATES
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')

  function submitHandler(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const userInfo = { firstName, lastName }
    axios.post('http://localhost:3000/users', userInfo)
    setFirstName(''); setLastName('')
  }



  return (
    <Wrapper>

      <PageTitle>JSON SERVER</PageTitle>
      <DatasWrapper>
        {products.map((item: ProductItemType) => <Product key={item.id} >{item.id} . {item.title} - ${item.price} </Product>)}
      </DatasWrapper>

      <FormWrapper>
        <Form onSubmit={submitHandler}>
          <FormTitle>FORM</FormTitle>
          <input className='p-4 text-xl text-black rounded-xl' type="text" placeholder='First Name' value={firstName} onChange={event => setFirstName(event.target.value)} />
          <input className='p-4 text-xl text-black rounded-xl' type="text" placeholder='Last Name' value={lastName} onChange={event => setLastName(event.target.value)} />
          <Button>SUBMIT</Button>
        </Form>
      </FormWrapper>

    </Wrapper>
  )
}

export default JsonServer 