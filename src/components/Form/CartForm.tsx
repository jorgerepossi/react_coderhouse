import { ChangeEvent, useState } from 'react'
import {  Button  } from "@chakra-ui/react"
import { Box } from "@chakra-ui/react"

import { useData } from '../../hooks/useData'
import { FormData } from '../../types/types'
interface CartFormProps {
  handleSubmitForm: (formData: FormData) => void
}

const CartForm = ({ handleSubmitForm }: CartFormProps) => {
  const { removeCart } = useData()

  const [formState, setFormState] = useState({
    userName: '',
    email: '',
    tel: ''
  })

  const handleChangeFormState = (e: ChangeEvent<HTMLInputElement>) => {
    setFormState((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  
  const handleSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault()
    handleSubmitForm(formState)
  }

  const handleDisableButton = (): boolean => {
    if (!formState.email || !formState.tel || !formState.userName) {
      return true
    }

    return false
  }

  return (
    <>
      
      <form style={{
        width: '100%',
        padding: '20px',
        border: '1px solid hsl(240, 7%, 87%)',
        borderRadius: 5
      }} onSubmit={handleSubmit}
      >
        <Box> 
        <label htmlFor="userName">
          Your Name
        </label>
        <input
          id="userName"
          name="userName"
          placeholder="Enter you name... "
          style={{ width: '100%', height: '40px', border: '1px solid hsl(240, 7%, 87%)',  borderRadius: 5,padding: 10, marginBottom: 10}}
          type="text"
          value={formState.userName}
          onChange={handleChangeFormState}
        />
        </Box>
        <Box> 
        <label htmlFor="tel">
          Phone
        </label>
        <input
          id="tel"
          name="tel"
          placeholder="+5491144445566"
          style={{ width: '100%', height: '40px', border: '1px solid hsl(240, 7%, 87%)',  borderRadius: 5,padding: 10, marginBottom: 10}}
          type="number"
          value={formState.tel}
          onChange={handleChangeFormState}
        />
        </Box>
        <Box> 
        <label htmlFor="email">
          Email
        </label>
        <input
          id="email"
          name="email"
          placeholder="someguy@mail.com"
          style={{ width: '100%', height: '40px', border: '1px solid hsl(240, 7%, 87%)',  borderRadius: 5,padding: 10, marginBottom: 10}}
          type="email"
          value={formState.email}
          onChange={handleChangeFormState}
        />
         </Box>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-around',
            padding: 10,
            color: '#fff'
          }}
        >
          <Button color="primary" type="button" variant="outline" onClick={removeCart}>
            Delete Cart
          </Button>
          <Button disabled={handleDisableButton()} type="submit" variant="primary">
            Go to checkout
          </Button>
        </div>
      </form>
    </>
  )
}

export default CartForm
