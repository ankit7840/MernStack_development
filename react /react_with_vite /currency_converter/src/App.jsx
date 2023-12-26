import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       {/* // writing div with tailwind css classes 
       // a dic to give color to the div */}
      <div className="bg-blue-500">
        Ankit Kumar Singh
        </div>
    </>
  )
}

export default App
