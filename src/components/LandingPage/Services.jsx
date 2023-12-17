import React , {useEffect,useState} from 'react'
import jsonData from './data.json'
// import jsonData from './test.json';

export default function Services() {
  const [active,setActive]=useState(1)
  const [auto,setAuto] = useState(true)
  const [service,setService] = useState(true)
  const [itemActive,setItem]=useState(0)
  

  useEffect(() => {
    const intervalId = setInterval(() => {
        if(auto){ setActive((prevCount) => prevCount == 2 ? 0 : prevCount + 1)}
    }, 4000 );
    return () => clearInterval(intervalId);
  }, [auto])


  useEffect(() => {
    const intervalId = setInterval(() => {
        if(service){ setItem((prevCount) => prevCount == 2 ? 0 : prevCount + 1)}
    }, 1300 );
    return () => clearInterval(intervalId);
  }, [service])


  return (
    <div className='mt-4'>
      <div className='row mt-2 p-2 headings text-center'>
      <div><h2>Our Services</h2></div>  
      </div>

      <div className='row service mt-4'>
        <div className=' pl-2 vertical_nav'>
            <div className='d-flex flex-column align-items-between '>
              <div 
                className={`service_logo text-center ${active == 0 && 'service_logo_active '}`} 
                onClick={()=>{
                    setAuto(false)
                    setActive(0)
                }}>
               <span>
                <img src="/images/email.svg"  /><br/><small>{active == 0 && "Email"}</small>
                </span> </div>
                <div className={`service_logo text-center ${active == 1 && 'service_logo_active' }`} 
                     onClick={()=>{setAuto(false);setActive(1)}}>
                    <span><img src="/images/sms.svg"  />
                <br/><small>{active == 1 && "SMS"}</small></span></div>
                <div className={`service_logo text-center ${active == 2 && 'service_logo_active'}`}
                   onClick={()=>{setAuto(false);setActive(2)}}>
                    <span>
                        <img src="/images/whatsapp.svg"  />
                        <br/><small>{active == 2 && "Whatsapp"}</small>
                    </span>
                </div>

            </div>
        </div>
        <div className='horizontal_nav'>
            <div className='row p-0 section_info'>
            <div className='col-12 col-md-6 p-0 '>
            <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">

            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className={`${itemActive == 0 && 'active'}`} aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" className={`${itemActive == 1 && 'active'}`}  aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" className={`${itemActive == 2 && 'active'}`}aria-label="Slide 3"></button>
            </div>

            {
                jsonData.map((service,key)=>(
                    service.map((item,i)=>(
                        i == itemActive && key == 0 &&
                        <div className="carousel-inner" key={i}>
                        <div className={`d-flex justify-content-center carousel-item ${i==itemActive && 'active'}`} style={{height:"90vh"}} data-bs-interval="10000">
                        <img src={item.url} className="d-block " style={{
                          height:"100%",
                         
                        }} alt="..." />
                       
                        </div>
                    </div>
                    ))
                ))
            }
              <button onClick={()=>{
                setService(false)
                setAuto(false)
                if(itemActive == 0){setItem(2)}
                else  setItem(rev=>rev-1)}}
                class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button onClick={()=>{
                setService(false)
                setAuto(false)
                if(itemActive == 2){setItem(0)}
                else  setItem(rev=>rev+1)}}class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
           
            </div>
            </div>
            <div className='col-12 col-md-6 d-flex justify-content-left'>
                <section className='d-flex flex-column justify-content-center'>
                    <div className='service_heading'>{jsonData[active][itemActive].heading.toUpperCase()}</div>
                    <ul 
                     style={{textDecoration:"none"}}
                     className={`p-2 `} >
                        {jsonData[active][itemActive].points.map((point,i)=>(
                        <div className={`d-flex flex-row mt-4`}>
                            <img src="/images/tick.svg" style={{height:"24px",marginTop:""}}/>
                            <li className="item">&nbsp;{point}</li>
                        </div>
                        ))}
                        
                    </ul>
                </section>
            </div>
            </div>

        </div>
      </div>
    </div>
  )
}





