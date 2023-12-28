import React from 'react'

export default function Footer() {
  return (
    <div className='footer p-4' style={{height:""}}>
    <div className='__row'>
      <div className='d-inline-block'>
        <div className='company-description'>
          <a className="navbar-brand logo" href="/">
           <div className='logo' style={{display: 'flex', justifyContent: 'left', alignItems: 'center'}}> 
             <img src="/images/logo.png" alt="" width="32" height="24" className="d-inline-block align-text-top" style={{marginRight: '5px'}}/>
               <span>Owlify</span>
            </div> 
          </a>
          <p>Grow your business with ease using our automated WhatsApp marketing.</p>
        </div>
      </div>
      <div className='d-inline-block'>
        <ul className='list-heading'>Products</ul>
        <li className='list-item'>WhatsApp Retargating</li>
        <li className='list-item'>Email Retargeting</li>
        <li className='list-item'>User Segmentation</li>
        <li className='list-item'>Promotional Comms</li>
      </div>
      <div className='d-inline-block'>
        <ul className='list-heading'>Social</ul>
        <li className='list-item'>Linkedin</li>
        <li className='list-item'>Instagram</li>
        <li className='list-item'>Twitter</li>
      </div>
      <div className='d-inline-block'>
        <ul className='list-heading'>Contact Info</ul>
        <li className='list-item'>support@owlify.in</li>
        <li className='list-item'>+918519027140</li>
        <li className='list-item'>+918319251643</li>
      </div>
    </div> 

    <div className='bottom-line'>
    <hr />
      <p>© 2023 Expound Technivo Pvt Ltd | Global Capabilities, Local Excellence.</p>
    </div>
    </div>
  )
}
