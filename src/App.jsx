import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import './App.css'
import Home from './components/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import TestPage from './components/TestPage'
import ComingSoon from './components/ComingSoon'
import Footer from './components/Footer'
import Courses from './components/Courses'
import { Provider } from 'react-redux'
import store from './store/store'
import CommonTest from './components/CommonTest'
import Frontend from './components/Frontend'
import Resources from './components/Resources'
import loader from './assets/loader.gif'
import {htmlQues,cssQues,jsQues} from './components/constant'
import CodeEditor from './components/extras/CodeEditor'

// https://colorhunt.co/palette/ecf8f9068da97e1717e55807

function App() {
    const [count, setCount] = useState(false)
    useEffect(() => {
        setTimeout(() => {
            setCount(true)
        }, 3000)
    })

    console.log(count)

    return (
        <>
            {
                count ?
                    <Provider store={store}>
                        <BrowserRouter>
                            <div className='h-8 bg-red-500 text-center text-white'>This is in Development ! Early access only</div>
                            <Navbar />
                            <Routes>
                                <Route exact path='/' element={<Home />}></Route>
                                <Route path='/tests' element={<TestPage />}></Route>
                                {/* <Route exact path='/tests/:test' element={<Navbar/>}></Route> */}
                                {/* <Route path='/tests/html' element={<HtmlTest questions={htmlQues}/>}></Route> */}
                                <Route path='/tests/html' element={<CommonTest questions={htmlQues} title='Html'/>}></Route>
                                <Route path='/tests/css' element={<CommonTest questions={cssQues} title='Css'/>}></Route>
                                <Route path='/tests/js' element={<CommonTest questions={jsQues} title='Javascript'/>}></Route>
                                <Route path='/frontend-roadmap' element={<Frontend />}></Route>
                                <Route path='/courses' element={<Courses />}></Route>
                                <Route path='/r' element={<Resources />}></Route>
                                <Route path='/practice' element={<CodeEditor/>}></Route>
                                <Route path='*' element={<ComingSoon />} />
                            </Routes>
                            <Footer />
                        </BrowserRouter>
                    </Provider>
                    :
                    <div class="flex items-center justify-center h-screen bg-slate-100">
                        {/* <p class="text-center">Loading...</p> */}
                        <img src={loader}/>
                    </div>

            }

        </>
    )
}

export default App
