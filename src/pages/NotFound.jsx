import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '@components/Footer'

const NotFound = () => {
  return (
    <div className='wrapper'>
        <main>
          <section className='notfound'>
            <div className='container'>
              <h1>Page Not Found!</h1>
              <p>Unable to find the page that you are looking for.</p>
              <Link to="/" ><button className='btn-yellow go-back-btn'>Go back to the start! <i className="fa-regular fa-arrow-up-right"></i></button></Link>
            </div>
          </section>
        </main>
        
        <Footer />
    </div>
  )
}

export default NotFound