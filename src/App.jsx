import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { TypeAnimation } from 'react-type-animation';
import Navbar from './components/Navbar';
import Home from './components/Home';
import { Login } from './components/Login';
import { Router , Route, Routes} from 'react-router-dom';

function App() {
  const [count, setCount] = useState(0)
  return (
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Login" element={<Login/>}/>
    </Routes>
  )
}

export default App
