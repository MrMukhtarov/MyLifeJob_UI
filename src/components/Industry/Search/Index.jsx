import React from 'react'
import './Index.css'
import { CiSearch } from "react-icons/ci";

const Index = () => {
  return (
    <section className='industry_search'>
    <div className="industry_search_all d-flex align-items-center">
        <div className="industry_search_left col-lg-4">
            <h1>Sənaye</h1>
        </div>
        <div className="industry_search_right d-flex align-items-center justify-content-between">
            <input type="text" placeholder='Sənaye üzrə axtar'/>
            <CiSearch />
        </div>
    </div>
</section>
  )
}

export default Index