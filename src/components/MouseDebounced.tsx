import { useState, useEffect } from 'react'
import debounce from 'lodash/debounce'

const useDebouncedMousePosition = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const updateMousePosition = (ev: MouseEvent) => {
      setMousePosition({ x: ev.clientX, y: ev.clientY })
    }

    const debouncedUpdate = debounce(updateMousePosition, 100) // Adjust the debounce delay as needed

    window.addEventListener('mousemove', debouncedUpdate)

    return () => {
      window.removeEventListener('mousemove', debouncedUpdate)
      debouncedUpdate.cancel() // Cancel the debounced function on cleanup
    }
  }, [])

  return mousePosition
}

export default useDebouncedMousePosition
