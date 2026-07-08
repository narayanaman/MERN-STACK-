import React from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import CreatePost from './pages/CreatePost'
import LoginUser from './pages/login'
import Register from './pages/Register'

function App() {
  return (
    <BrowserRouter>
    <nav className='w-full p-6 bg-black text-white flex justify-evenly '>
      <Link to="/">Login</Link>
      <Link to="/register">Register</Link>
      <Link to="/dashboard">All Posts</Link>
      <Link to="/create">Create Posts</Link>
    </nav>
    <Routes>
      <Route path="/" element={<LoginUser/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/dashboard" element={<Dashboard/>}/>
      <Route path="/create" element={<CreatePost/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App