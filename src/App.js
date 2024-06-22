// import logo from './logo.svg';
import './App.scss'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './Components/Layout'
import Home from './Components/Home'
import About from './Components/About'
import Contact from './Components/Contact'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />} />
        </Routes>
        <Routes>
          <Route index element={<Home/>}/>
        </Routes>
        <Routes>
          <Route path="/about" index element={<About/>}/>
        </Routes>
        <Routes>
          <Route path="/contact" index element={<Contact/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
