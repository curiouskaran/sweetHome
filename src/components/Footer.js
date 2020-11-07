import React from 'react'
import './Footer.css'

export default () => (
    <footer className="footer">
      <div className="container taCenter">
        <span>
          © Copyright {new Date().getFullYear()} All rights reserved with sweethomeindia.org. 
          <br></br>
          Crafted with ❤️ by{' '} <a href="https://curiouskaran.netlify.app/">curiouskaran</a>.
        </span>
      </div>
    </footer>
)
