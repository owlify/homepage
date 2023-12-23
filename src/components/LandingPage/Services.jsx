import React , {useEffect,useRef,useState} from 'react'
// import jsonData from './test.json';

export default function Services({jsonData}) {
  const [active,setActive]=useState(1)
  const [auto,setAuto] = useState(true)
  const [service,setService] = useState(true)
  const [itemActive,setItem]=useState(0)
  const [screenWidth, setScreenWidth] = useState(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setScreenWidth(window.innerWidth);
      window.addEventListener('resize', handleResize);
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }
  }, []); // Empty dependency array ensures the effect runs only once (on mount)

  const handleResize = () => {
    setScreenWidth(window.innerWidth);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
        if(auto){ setActive((prevCount) => prevCount == 1 ? 0 : prevCount + 1)}
    }, 40000 );
    return () => clearInterval(intervalId);
  }, [auto])


  useEffect(() => {
    const intervalId = setInterval(() => {
        if(service){ setItem((prevCount) => prevCount == 1 ? 0 : prevCount + 1)}
    }, 20000 );
    return () => clearInterval(intervalId);
  }, [service])

  return (
    <section className='shadow'>
     
      <div className='row p-2 service'>
      
      {screenWidth >=992 ?
      <>
        <div className={`col-2 p-0 vertical_nav`}>
            <div className='d-flex flex-column align-items-between '>
              {jsonData.map((service,i)=>(
                  <div 
                  className={`service_logo text-center ${active == service.id && 'service_logo_active'}`} 
                  onClick={()=>{
                      setAuto(false)
                      setActive(service.id)
                  }}>
                  <span>
                  <img src={service.logo} /><br/><small>{active == service.id && service.name}</small>
                  </span> </div>
              ))}
            </div>
        </div>
        <br/>

      </  >
      :<>
        <div className='col-12'>
        <div className='d-flex flex-row align-items-between justify-content-center '>
        <div className="btn-group" role="group" >
          {jsonData.map((service,i)=>(
              <button type="button" className={`btn ${active == service.id && ''}`}  onClick={()=>{
                setAuto(false)
                setActive(service.id)
            }}>
               <img src={service.logo} style={{height:"40px"}} />
               <small>{service.name}</small>
              </button>      
          ))}
        
         </div>
        </div>
        </div>
            <div className='service_heading text-start mt-4 ml-2'>{jsonData[active]?.data?.[itemActive]?.heading}</div>
            </>
         }
        <div className={`${screenWidth >=992 ? 'col-10 ':'col-12 '}horizontal_nav mt-2 p-lg-2 p-4`}>
            <div className='row section_info'>
            <div className='col-12 col-md-6 p-0 '>
            <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className={`${itemActive == 0 && 'active'}`} aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" className={`${itemActive == 1 && 'active'}`}  aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" className={`${itemActive == 2 && 'active'}`}aria-label="Slide 3"></button>
            </div>
            {
                  jsonData?.[active]?.data.map((item,i)=>(
                        item.id == itemActive && 
                        <div className="carousel-inner" key={i}>
                        <div 
                          className={`d-flex justify-content-center carousel-item ${itemActive == item.id && 'active'}`} 
                          style={{height:"85vh"}} 
                          data-bs-interval="10000">
                         <img src={item.url} className="d-block " style={{
                          height:"90%",
                        }} alt="..." />
                       
                        </div>
                    </div>
                    ))
            }
              <button onClick={()=>{
                setService(false)
                setAuto(false)
                if(itemActive == 0){setItem(1)}
                else  setItem(rev=>rev-1)}}
                className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button onClick={()=>{
                setService(false)
                setAuto(false)
                if(itemActive == 2){setItem(0)}
                else  setItem(rev=>rev+1)}}className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
           
            </div>
            </div>
            <div className='col-12 col-md-6 d-flex justify-content-left'>
                <section className='d-flex flex-column justify-content-center'>
                  {screenWidth >=992 &&
                    <div className='service_heading text-start ml-2'>{jsonData[active]?.data?.[itemActive]?.heading}</div>}
                    <ul 
                     style={{textDecoration:"none"}}
                     className={`p-2 `} >
                        {jsonData[active]?.data?.[itemActive]?.points?.map((point,i)=>(
                        <div className={`d-flex flex-row mt-4`}>
                            <img src="/images/tick.svg" style={{height:"20px",marginTop:"4px", marginRight: "5px"}}/>
                            <li className="item">&nbsp;{point}</li>
                        </div>
                        ))}
                        
                    </ul>
                </section>
            </div>
            </div>

        </div>
      </div>
    </section>
  )
}





