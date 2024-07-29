import React from 'react'

// Footer

const Footer = () => {
  return (
    <footer className="footer footer-center bg-base-300 text-base-content p-4">
    <aside>
      <p>Copyright © {new Date().getFullYear()} - All right reserved by <span className='text-blue-500 font-serif font-semibold'>Lets-Chat</span></p>
    </aside>
  </footer>
  )
}

export default Footer