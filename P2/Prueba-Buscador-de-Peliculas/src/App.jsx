import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  <div className='page'>
    <header>
      <form className='form-css'>
        <input type='text' placeholder='Movies'/>
        <button type='submit'>Buscar</button>
      </form>
    </header>
      <h1> Prueba tecnica </h1>
    <main>
      
    </main>
</div>
    </>
  )
}

export default App
