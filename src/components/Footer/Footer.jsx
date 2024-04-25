import React from 'react'
import { Link } from 'react-router-dom'


const Footer = () => {

  return (
   <>
    <footer class="footer fixed-bottom">
        <div class="container">
            <div class=" mb-3 text-center">
              <h2>MoveMate</h2>
            </div>
            <div class=" row gy-4 ">
                <div class="col-md-4 text-center">
                    <Link className='d-flex align-items-center gap-2' to="tel:+201222810589"><i class="fa-solid fa-phone "></i> <span>+20 1147865901</span></Link>
                    <Link className='d-flex align-items-center gap-2' to="mailto:1ahmedhelal1@gmail.com"><i class="fa-solid fa-envelope"></i> <span>movemate@gmail.com</span></Link>
                </div>
                <div class="col-md-4 text-center">
                    <Link to=""><i class="fa-brands fa-facebook"></i></Link>
                    <Link to=""><i class="fa-brands fa-instagram"></i></Link>
                    <Link to=""><i class="fa-brands fa-x-twitter"></i></Link>
                    <Link to=""><i class="fa-brands fa-whatsapp"></i></Link>
                </div>
                <div class="col-md-4 text-end">
                    <Link to=""><i class="fab fa-google-play fa-lg"></i></Link>
                    <Link to=""><i class="fab fa-apple fa-lg"></i></Link>
                </div>
            </div>
            <div class="col text-center">
                <p>© 2024 All Rights Reserved.</p>
            </div>
        </div>
    </footer>
   </>
  )
}

export default Footer
