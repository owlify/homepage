import React from 'react'

export default function Header() {
  return (
    <nav className="navbar navbar-light bg-light header">
    <div className="container-fluid"> 
    <a className="navbar-brand ml-4" href="/">
      {/* <img src="/docs/5.0/assets/brand/bootstrap-logo.svg" alt="" width="30" height="24" className="d-inline-block align-text-top"/> */}
      <div className='logo'>Owlify</div>
    </a>
  <button className='btn'>Contact Us</button>
  </div>
</nav>
  )
}
