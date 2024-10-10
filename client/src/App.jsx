import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import { BrowserRouter, Routes ,Route} from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/register'
import Logout from './pages/Logout'
import Contact from './pages/Contact'
import Productpage from './pages/Productpage'
import Cartpage from './pages/Cartpage'


function App() {
  const [query, setQuery] = useState('')

  return (
    <>
    <BrowserRouter>
      <Navbar setQuery={setQuery}/>
      <Routes>
        <Route path="/" element={<Home query={query}/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/logout" element={<Logout/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/my-cart" element={<Cartpage/>}/>
        <Route path="/products/:id" element={<Productpage/>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
