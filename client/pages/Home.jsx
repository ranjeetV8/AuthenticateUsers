import React from 'react'
import Navbar from '../Component/Navbar'
import Header from '../Component/Header'

const Home = () => {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen bg-[url("/bg_img.png")] bg-cover bg-center'>
      <Navbar/>
      <Header/>
    </div>
  )
}

export default Home
