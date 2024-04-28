import React from 'react'
import './Index.css'
import { NavLink } from 'react-router-dom'

const Index = () => {
  return (
    <section className='error_page'>
        <div className="error_page_all text-center">
            <img src="https://classic.jobsearch.az/simple/images/not-found.png" alt="" />
            <h1>Something’s missing</h1>
            <p>We can’t seem to find the page you are looking for</p>
            <NavLink to="/">Go to home</NavLink>
        </div>
    </section>
  )
}

export default Index