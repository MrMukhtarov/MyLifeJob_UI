import React from 'react'
import Header from "../components/Header/Index.jsx"
import  {Outlet}  from 'react-router-dom'
import Footer from '../components/Footer/Index.jsx'

const Client = () => {
  return (
    <div>
    <Header/>
    <div>
        <Outlet/>
    </div>
    <Footer/>
</div>
  )
}

export default Client