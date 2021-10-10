import { useEffect, useState } from 'react'
import { useParams } from 'react-router'

import { getFirestore } from '../../api/config'
import useBooleanState from '../../hooks/useBooleanState'
import { NewOrderCart } from '../../types/types'

const Order = () => {
  const { id }: { id: string } = useParams()
  const { state: isLoading, handleActive, handleInactive } = useBooleanState()
  const [isError, setIsError] = useState(false)
  const [orderState, setOrderState] = useState<NewOrderCart>({
    buyer: {
      userName: '',
      email: '',
      tel: ''
    },
    items: {
      products: [],
      quantities: 0,
      total: 0
    },
    total: 0
  })

  const handleGetOrderById = () => {
    const db = getFirestore()

    handleActive()
    db.collection('orders')
      .doc(id)
      .get()
      .then((data) => {
        if (!data.exists) {
          handleInactive()

          return setIsError(true)
        }
        setOrderState(data.data() as any)
        handleInactive()
      })
  }

  useEffect(() => {
    handleGetOrderById()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  if (isLoading) {
    return (
      <div>
        <h1>is Loading....</h1>
      </div>
    )
  }

  if (isError) {
    return (
      <div>
        <h1>Error!!! document not found for id {id}</h1>
      </div>
    )
  }

  return (
    <div>
      <h1>Order {id}</h1>

      <div>
        <h2>Buyer</h2>
        <p>userName: {orderState.buyer.userName}</p>
        <p>email: {orderState.buyer.email}</p>
        <p>tel: {orderState.buyer.tel}</p>
      </div>

      <div>
        Total : {orderState.total}
        <ul>
          {orderState.items.products.map(({ item, quantity }) => (
            <li key={item.id}>
              <p>{item.name}</p>
              <p>cantidad: {quantity}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Order
