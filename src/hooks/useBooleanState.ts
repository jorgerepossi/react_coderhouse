import { useState } from 'react'

interface UseBooleanStateProps {
  state: boolean
  handleActive: () => void
  handleInactive: () => void
  handleToggle: () => void
}

const useBooleanState = (): UseBooleanStateProps => {
  const [state, setState] = useState(false)

  const handleActive = () => {
    setState(true)
  }

  const handleInactive = () => {
    setState(false)
  }

  const handleToggle = () => {
    setState((prev) => !prev)
  }

  return {
    state,
    handleActive,
    handleInactive,
    handleToggle
  }
}

export default useBooleanState
