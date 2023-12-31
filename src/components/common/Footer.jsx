import React from 'react'
import { LinkedinIcon,XIcon,EmailIcon } from 'react-share'
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
        <li className='list-item d-flex align-items-center'><img src="/images/linkdin.png" className='share_logo2' />Linkedin</li>
        <li className='list-item d-flex align-items-center'><img src="/images/insta.png" className='share_logo2' />Instagram</li>
        <li className='list-item d-flex align-items-center'><img src="/images/x.png" className='share_logo2' />Twitter</li>
      </div>
      <div className='d-inline-block'>
        <ul className='list-heading'>Contact Info</ul>
        <li className='list-item'><a href="mailto:support@owlify.in?subject=SendMail&body=">support@owlify.in</a></li>
        <li className='list-item'><a href='tel:+918519027140'>+91-8519027140</a></li>
        <li className='list-item'><a href='tel:+918319251643'>+91-8319251643</a></li>
      </div>
    </div> 

    <div className='bottom-line'>
    <hr />
      <p>© 2023 Expound Technivo Pvt Ltd | Global Capabilities, Local Excellence.</p>
    </div>
    </div>
  )
}
