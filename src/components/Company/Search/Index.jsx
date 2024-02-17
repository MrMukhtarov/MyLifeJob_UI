import React from 'react'
import './Index.css'
import { CiSearch } from "react-icons/ci";

const Index = () => {
  return (
    <section className='company_search'>
        <div className="company_search_all d-flex align-items-center">
            <div className="company_search_left col-lg-4">
                <h1>Şirkətlər</h1>
            </div>
            <div className="company_search_right d-flex align-items-center justify-content-between">
                <input type="text" placeholder='Şirkət üzrə axtar'/>
                <CiSearch />
            </div>
        </div>
    </section>
  )
}

export default Index