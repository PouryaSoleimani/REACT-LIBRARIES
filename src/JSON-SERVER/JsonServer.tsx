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
const FormWrapper = styled.div`display:flex ; align-items: center;justify-content : center ; padding : 20rem ; border-bottom : 10px solid white;`

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

    </Wrapper>
  )
}

export default JsonServer 