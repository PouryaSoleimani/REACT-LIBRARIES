//* JSON SERVER PAGE
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
type ProductItemType = { id: string, title: string, price: number }

//STYLED COMPONENTS ========================================================================================================================================
const Wrapper = styled.div`display : flex ; align-items : center ; justify-content : center ; flex-direction : column ;`
const PageTitle = styled.h1`text-align : center ; font-size : 30px ; color : lime ; border-bottom : 10px solid lime ; background-color : #202020 ; padding : 1rem; width : 100%; font-weight : bold;`
const DatasWrapper = styled(Wrapper)`width : 100% ; padding : .5rem 1rem; display : flex ; flex-direction : column ; align-items : start ; justify-content : start; border-bottom : 10px solid white;`
const Product = styled.p`font-size:22px ; color : #e1e1e1; line-height:40px; font-weight : 800;`
const FormWrapper = styled.div`display:flex ; align-items: center;justify-content : start ; padding : 20rem ; border-bottom : 10px solid white;`
const Form = styled.form`display : flex ; flex-direction : column ; align-items:center ; justify-content : start; padding : 1rem; border : 5px solid lime ; border-radius : 20px; gap: .5rem;`
const FormTitle = styled(PageTitle)`border-radius : 20px;`
const Button = styled.button`padding : 1rem 2rem; border-radius : 20px ; border: 5px solid lime ; background-color : #202020; color : white ; font-size : 26px; font-weight : 900;`



// COMPONENT ===============================================================================================================================================
const JsonServer = () => {

  const [products, setProducts] = useState([])

  function fetcher() { axios.get('http://localhost:3000/products?_sort=prices,-price').then(response => setProducts(response.data)) }

  useEffect(() => { fetcher() }, [])

  return (
    <Wrapper>
      <PageTitle>JSON SERVER</PageTitle>
      <DatasWrapper>
        {products.map((item: ProductItemType) => <Product key={item.id} >{item.id} . {item.title} - ${item.price} </Product>)}
      </DatasWrapper>

      <FormWrapper>
        <Form>
          <FormTitle>FORM</FormTitle>
          <input className='p-4 text-xl text-black rounded-xl' type="text" placeholder='First Name' />
          <input className='p-4 text-xl text-black rounded-xl' type="text" placeholder='Last Name' />
          <Button>SUBMIT</Button>
        </Form>
      </FormWrapper>
    </Wrapper>
  )
}

export default JsonServer 