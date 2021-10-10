import { useState } from 'react'

interface UseCountProps {
  count: number
  increment: () => void
  decrement: () => void
  resetCount: () => void
}

interface UseCountState {
  initialValue?: number
  maxStock: number
}

const useCountState = ({
  initialValue = 1,
  maxStock
}: UseCountState): UseCountProps => {
  const [count, setCount] = useState(initialValue)

  const increment = (): void => {
    setCount((prev) => {
      if (maxStock === prev) return prev

      return prev + 1
    })
  }

  const decrement = (): void => {
    setCount((prev) => {
      if (prev === 1) return prev

      return prev - 1
    })
  }

  const resetCount = (): void => {
    setCount(1)
  }

  return {
    count,
    increment,
    decrement,
    resetCount
  }
}

export default useCountState
