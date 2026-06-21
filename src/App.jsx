import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import About from './pages/About'
import Home from './pages/Home'
import Courses from './pages/Courses'
import CourseDetail from './pages/CourseDetail'
import Product from './pages/Product'
import Women from './pages/Women'
//import Men from './pages/Men'
import NotFound from './pages/NotFound'
import { Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <div className='h-screen bg-black text-white'>
      <Navbar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/courses' element={<Courses />}/>
        <Route path='/courses/:id' element={<CourseDetail/>}/>

        <Route path='/product' element={<Product />}>
          <Route path='women' element={<Women />} />
          
        </Route>

        <Route path='*' element={<NotFound />} />
      </Routes>

      <Footer />
    </div>
  )
}

export default App