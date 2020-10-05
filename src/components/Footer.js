import React from 'react'
import './Footer.css'

export default () => (
  <div>
    <h2 className="taCenter">
      Follow us{' '}
      <a href="https://instagram.com/thrivegoldcoast/">@thrivegoldcoast</a>
    </h2>
    <br />
    <footer className="footer">
      <div className="container taCenter">
        <span>
          © Copyright {new Date().getFullYear()} All rights reserved with sweethomeindia.org. 
          <br></br>
          Crafted with ❤️ by{' '} <a href="https://curiouskaran.netlify.app/">curiouskaran</a>.
        </span>
      </div>
    </footer>
  </div>
)
