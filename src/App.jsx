import { useState } from 'react'
import Navbar from './components/Navbar'
import './App.css'
import Home from './components/Home'
import { BrowserRouter , Routes,Route } from 'react-router-dom'
import TestPage from './components/TestPage'
import HtmlTest from './components/HtmlTest'

function App() {
    const [count, setCount] = useState(0)

    return (
        <>
        <BrowserRouter>
        <Navbar/>
        <Routes>
            <Route exact path='/' element={<Home/>}></Route>
            <Route exact path='/tests' element={<TestPage/>}></Route>
            {/* <Route exact path='/tests/:test' element={<Navbar/>}></Route> */}
            <Route exact path='/tests/html' element={<HtmlTest/>}></Route>
        </Routes>
        </BrowserRouter>
        </>
    )
}

export default App
