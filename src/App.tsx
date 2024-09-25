// import useDebouncedMousePosition from './components/MouseDebounced'
import useThrottledMousePosition from './components/MouseThrottled'

function App() {
  // const mousePosition = useDebouncedMousePosition()
  const mousePosition = useThrottledMousePosition()

  return (
    <>
      <div
        className="absolute p-10 bg-slate-500/80 rounded-lg text-white duration-200"
        style={{ top: mousePosition.y, left: mousePosition.x }}
      >
        <h1 className="text-3xl font-bold underline">Hello, World!</h1>
      </div>

      <p>
        Your cursor position:
        <br />
        {JSON.stringify(mousePosition)}
      </p>
    </>
  )
}

export default App
