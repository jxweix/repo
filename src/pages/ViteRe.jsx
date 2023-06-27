import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import '../App.css'

function App() {
  const [count, setCount] = useState(0)
  
function del(){
  setCount (count -1)
}
function add(){
  setCount (count +1)
}
function reset(){
  setCount (count - count)
}

  return (
    <>
      <div>
        {/* <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo vite" alt="Vite logo" />
        </a>

        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a> */}

      </div>

      <h1>Vite + React</h1>
      <h1>{count}</h1>

      <div className="card">
        <button onClick={add}>add</button>
        <button onClick={del}>del</button>
        <button onClick={reset}>reset</button>

        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>

      </div>

    </>
  )
}

export default App
