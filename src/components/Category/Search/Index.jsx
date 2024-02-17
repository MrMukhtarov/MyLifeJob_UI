import React from 'react'
import './Index.css'
import { CiSearch } from "react-icons/ci";

const Index = () => {
  return (
    <section className='category_search'>
        <div className="category_search_all d-flex align-items-center">
            <div className="category_search_left col-lg-4">
                <h1>Kateqoriyalar</h1>
            </div>
            <div className="category_search_right d-flex align-items-center justify-content-between">
                <input type="text" placeholder='Kateqoriya üzrə axtar'/>
                <CiSearch />
            </div>
        </div>
    </section>
  )
}

export default Index