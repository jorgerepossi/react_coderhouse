import { ChangeEvent, useState } from 'react'

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
    <form
      style={{
        backgroundColor: '#079',
        padding: 10,
        display: 'flex',
        flexDirection: 'column'
      }}
      onSubmit={handleSubmit}
    >
      <input
        name="userName"
        placeholder="Ingrese su nombre"
        type="text"
        value={formState.userName}
        onChange={handleChangeFormState}
      />
      <input
        name="tel"
        placeholder="Ingrese su numero de telefono"
        type="tel"
        value={formState.tel}
        onChange={handleChangeFormState}
      />
      <input
        name="email"
        placeholder="Ingrese su email"
        type="email"
        value={formState.email}
        onChange={handleChangeFormState}
      />
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-around',
          padding: 10,
          color: '#fff'
        }}
      >
        <button type="button" onClick={removeCart}>
          Delete Cart
        </button>
        <button disabled={handleDisableButton()} type="submit">
          Go to checkout
        </button>
      </div>
    </form>
  )
}

export default CartForm
