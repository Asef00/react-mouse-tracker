import React from 'react'
import throttle from 'lodash/throttle'

const useThrottledMousePosition = () => {
  const [mousePosition, setMousePosition] = React.useState({ x: 0, y: 0 })

  React.useEffect(() => {
    const updateMousePosition = (ev: MouseEvent) => {
      setMousePosition({ x: ev.clientX, y: ev.clientY })
    }

    const throttledUpdate = throttle(updateMousePosition, 100) // Adjust throttle rate as needed

    window.addEventListener('mousemove', throttledUpdate)

    return () => {
      window.removeEventListener('mousemove', throttledUpdate)
      throttledUpdate.cancel() // Ensure throttling is canceled
    }
  }, [])

  return mousePosition
}

export default useThrottledMousePosition
