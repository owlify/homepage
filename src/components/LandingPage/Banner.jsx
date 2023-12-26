import React, { useState, useEffect } from 'react';
import Typewriter from 'typewriter-effect';

const color=['#f3d250','#90ccf4','#f78888']


export default function Banner() {

  return (
    <div className='banner'>
    <div className='row'>

        <div className='col-12 col-md-6 banner_column d-flex flex-column justify-content-center text-start align-items-center'>
        
          <div className='typewritter col-12'>
           <div className='d-flex typewriting' style={{fontWeight:"700"}}>
           <Typewriter
             options={{
              strings: [
                '<span style="color: #f3d250;">Acquire new</span>',
          '<span style="color: #90ccf4;">Engage better with</span>',
          '<span style="color: #f78888;">Retain old</span>',
              ],
              autoStart: true,
              loop: true,
            }}
            onInit={(typewriter) => {
              typewriter.typeString('')
                .callFunction(() => {
                  console.log('String typed out!');
                })
                .pauseFor(1500)
                .deleteAll()
                .callFunction(() => {
                  console.log('All strings were deleted');
                })
                .start();
            }} 
            components={{ span: (props) => <span {...props} dangerouslySetInnerHTML={{ __html: props.children }} /> }}

            />Customers</div>
           <h4>Grow your business with ease using our automated WhatsApp marketing.</h4>
          </div>
          <div className='col-12'>
            <div className='row p-4 d-flex justify-content-between' >
              <img src="/images/shopify.png" className='col-6 col-lg-3 integration_logos' />
              <img src="/images/shopify_plus.png" className='col-6 col-lg-3 p-3 integration_logos'  />
              <img src="/images/Magento.png" className='col-6 col-lg-3 p-3 integration_logos' />
              <img src="/images/WooCommerce.png" className='col-6 col-lg-3 p-3 integration_logos'  />
          </div>
        </div>
          </div>
      
        <div className='col-12 col-md-6 p-0 banner_column' >
            <img src="/images/landing_page.png" className='banner_img' />
        </div>

    </div>
    </div>
  )
}
