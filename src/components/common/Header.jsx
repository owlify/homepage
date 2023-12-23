import React from 'react'

export default function Header() {
  return (
    <nav className="navbar navbar-light bg-light header p-0">
    <div className="container-fluid"> 
    <a className="navbar-brand logo" href="/">
       <div className='logo' style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}> 
       <img src="/images/logo.png" alt="" width="32" height="24" className="d-inline-block align-text-top" style={{marginRight: '5px'}}/>
         <span>
            Owlify
          </span>
        </div> 
    </a>
  <button className='btn'>Contact Us</button>
  </div>
</nav>
  )
}
