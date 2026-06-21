// import React from 'react'

// const Navbar = () => {
//   return (
//     <div className='flex py-4 item- center px-8 bg-blue-800 justify-between'>
//       <h2 className='text-2xl font-bold'>Raghav</h2>
//       <div className='flex gap-10'>
//         <a className='text-lg font-medium' href="/">Home</a>
//          <a className='text-lg font-medium' href="/about">About</a>
//          <a className='text-lg font-medium' href="/product">Product</a>

//       </div>
//     </div>
//   )
// }

// export default Navbar
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex py-4 items-center px-8 bg-blue-800 justify-between'>
      <h2 className='text-2xl font-bold'>Raghav</h2>

      <div className='flex gap-10'>
        <Link className='text-lg font-medium' to="/">
          Home
        </Link>

        <Link className='text-lg font-medium' to="/about">
          About
        </Link>

        <Link className='text-lg font-medium' to="/courses">
          Courses
        </Link>

        <Link className='text-lg font-medium' to="/product">
          Product
        </Link>
      </div>
    </div>
  )
}

export default Navbar