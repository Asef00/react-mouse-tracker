import useMousePosition from './components/Mouse'

function App() {
  const mousePosition = useMousePosition()

  return (
    <>
      <div
        className="absolute p-10 bg-slate-500/80 rounded-lg text-white"
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
