import React from 'react'

export default function Header() {
  return (
    <nav className="navbar navbar-light bg-light header p-0">
    <div className="container-fluid"> 
    <a className="navbar-brand logo" href="/">
      {/* <div className='logo'> */}
        Owlify
        <img src="/images/logo.png" alt="" width="32" height="24" className="d-inline-block align-text-top"/>

        {/* </div> */}
    </a>
  <button className='btn'>Contact Us</button>
  </div>
</nav>
  )
}
