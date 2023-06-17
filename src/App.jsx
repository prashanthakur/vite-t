import { useState } from 'react'
import Navba from './components/Navbar'
import './App.css'
import Home from './components/Home'

function App() {
    const [count, setCount] = useState(0)

    return (
        <>
        <Navba/>
        <Home/>
        </>
    )
}

export default App
