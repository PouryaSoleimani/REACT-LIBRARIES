//* JSON SERVER PAGE
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import toast, { Toaster } from 'react-hot-toast';
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

const DeleteForm = styled(Form)`border : 5px solid red; `
const DeleteFormTitle = styled(FormTitle)`border-radius : 20px; color : red; border-bottom : 10px solid red;`
const DeleteButton = styled(Button)`border : 5px solid red;`

// COMPONENT ===============================================================================================================================================
const JsonServer = () => {

  const [products, setProducts] = useState([])

  function fetcher() { axios.get('http://localhost:3000/products?_sort=prices,-price').then(response => setProducts(response.data)) }

  useEffect(() => { fetcher() }, [])

  //* FORM - {POST}
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')

  const notify = () => toast.success('User Created', { style: { borderRadius: '10px', background: '#333', color: '#fff', border: "3px solid lime", fontWeight: 900 } })

  function submitHandler(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const userInfo = { id: Number(id), firstName, lastName }
    axios.post('http://localhost:3000/users', userInfo).then(response => console.log(response))
    notify()
    setFirstName(''); setLastName('')
  }



  //! FORM - {DELETE}
  const [id, setId] = useState('')
  const [name, setName] = useState('')

  const notify2 = () => toast.success('User Deleted', { style: { borderRadius: '10px', background: '#333', color: '#fff', border: "3px solid lime", fontWeight: 900 } })
  const notify3 = () => toast.error('User Not Found', { style: { borderRadius: '10px', background: '#333', color: '#fff', border: "3px solid red", fontWeight: 900 } })

  function deleteUserHandler(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    axios.delete(`http://localhost:3000/users/${id}`)
      .then(response => { console.log(response); notify2() })
      .catch(error => notify3())
    setId('')
  }




  return (
    <Wrapper>
      <Toaster position="top-right" reverseOrder={true} />

      <PageTitle>JSON SERVER</PageTitle>
      <DatasWrapper>
        {products.map((item: ProductItemType) => <Product key={item.id} >{item.id} . {item.title} - ${item.price} </Product>)}
      </DatasWrapper>

      <FormWrapper>
        <Form onSubmit={submitHandler}>
          <FormTitle>ADD USER</FormTitle>
          <input className='p-4 text-xl text-black rounded-xl' type="text" placeholder='First Name' value={firstName} onChange={event => setFirstName(event.target.value)} />
          <input className='p-4 text-xl text-black rounded-xl' type="text" placeholder='Last Name' value={lastName} onChange={event => setLastName(event.target.value)} />
          <Button>SUBMIT</Button>
        </Form>
      </FormWrapper>

      <FormWrapper>
        <DeleteForm onSubmit={deleteUserHandler}>
          <DeleteFormTitle>DELETE USER</DeleteFormTitle>
          <input className='p-4 text-xl text-black rounded-xl' type="text" placeholder='User Name' value={id} onChange={event => setId(event.target.value)} />
          <DeleteButton>SUBMIT</DeleteButton>
        </DeleteForm>
      </FormWrapper>

    </Wrapper>
  )
}

export default JsonServer 