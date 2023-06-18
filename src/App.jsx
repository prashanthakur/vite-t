import { useState } from 'react'
import Navbar from './components/Navbar'
import './App.css'
import Home from './components/Home'
import { BrowserRouter , Routes,Route } from 'react-router-dom'
import TestPage from './components/TestPage'
import HtmlTest from './components/HtmlTest'
import ComingSoon from './components/ComingSoon'
import Footer from './components/Footer'
import CssTest from './components/CssTest'

function App() {
    const [count, setCount] = useState(0)

    return (
        <>
        <BrowserRouter>
        <div className='h-8 bg-red-500 text-center text-white'>This is in Development ! Early access</div>
        <Navbar/>
        <Routes>
            <Route exact path='/' element={<Home/>}></Route>
            <Route exact path='/tests' element={<TestPage/>}></Route>
            {/* <Route exact path='/tests/:test' element={<Navbar/>}></Route> */}
            <Route exact path='/tests/html' element={<HtmlTest/>}></Route>
            <Route exact path='/tests/css' element={<CssTest/>}></Route>
            <Route path='*' element={<ComingSoon/>}/>
        </Routes>
        <Footer/>
        </BrowserRouter>
        </>
    )
}

export default App
