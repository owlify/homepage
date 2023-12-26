import React from 'react'

export default function Clients() {
  return (
    <div className='row p-4 d-flex justify-content-between clients' >
        <div className='col-6 col-md-3 p-2 clientsimg'>
         <img src="/images/c1.png" style={{ height: "100%",width:"auto"}}  />
        </div>
        <div className='col-6 col-md-3 p-2 clientsimg'>
         <img src="/images/c2.png" style={{ height: "100%",width:"auto"}}  />
        </div>
        <div className='col-6 col-md-3 p-2 clientsimg'>
         <img src="/images/c3.png" style={{ height: "100%",width:"auto"}}  />
        </div>
        <div className='col-6 col-md-3 p-2 clientsimg'>
         <img src="/images/c4.png" style={{ height: "100%",width:"auto"}}  />
        </div>
{/*    
    <img src="/images/infowareindia.jpeg" style={{ height: "100%",width:"100%"}} className='col-6 col-lg-3 p-3 integration_logos'  />
    <img src="/images/pgr.png" style={{ height: "100%",width:"100%"}} className='col-6 col-lg-3 p-3 integration_logos' />
    <img src="/images/the_code_dose.png" style={{ height: "100%",width:"100%"}} className='col-6 col-lg-3 p-3 integration_logos'  /> */}
</div>
  )
}
