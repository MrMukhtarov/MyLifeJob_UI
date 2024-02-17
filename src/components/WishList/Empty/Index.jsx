import React from 'react'
import './Index.css'
import { FaHeart } from "react-icons/fa";
import { NavLink } from 'react-router-dom';

const Index = () => {
  return (
    <section className='wish_empty' style={{height:"75vh"}}>
        <div className="wish_empty_heading">
            <h1>Seçilmiş elanlar</h1>
        </div>

        <div className="wish_empty_main d-flex justify-content-center flex-column align-items-center py-5">
            <div className="wish_empty_heart_div">
                <FaHeart/>
            </div>
            <h2>Sizin seçilmiş elanınız yoxdur</h2>
            <NavLink to="/">Vakansiyalara keçid</NavLink>
        </div>
    </section>
  )
}

export default Index