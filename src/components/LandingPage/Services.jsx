import React , {useEffect,useRef,useState} from 'react'
// import jsonData from './test.json';

export default function Services({jsonData}) {
  const [active,setActive]=useState(0)
  const [auto,setAuto] = useState(true)
  const [service,setService] = useState(true)
  const [itemActive,setItem]=useState(0)
  const [itemActive2,setItem2]=useState(0)

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

  // useEffect(() => {
  //   if(screenWidth && screenWidth<992){
  //   const intervalId = setInterval(() => {
  //       if(auto){ setActive((prevCount) => prevCount == 1 ? 0 : prevCount + 1)}
  //   }, 40000 );
  //   return () => clearInterval(intervalId);
  //  }
  // }, [auto,screenWidth])


  // useEffect(() => {
  //   const intervalId = setInterval(() => {
  //       if(service){ setItem((prevCount) => prevCount == 1 ? 0 : prevCount + 1)}
  //   }, 2000 );
  //   return () => clearInterval(intervalId);
  // }, [service])

  return (
    
    <div className=' mt-4 service'>
     <section className='row sec_back p-4'>
      <div className='col-12 d-flex align-items-center service_heading text_xl '> {jsonData[active]?.name}<img  className="heading_image"  src={jsonData[active].logo}/> </div>
      <div className="col-12 mt-2 ">
          <div className='row section_info'>
          <div className='col-12 col-md-4'>
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
              className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev"  data-interval="false" data-touch="true" data-ride="carousel">
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
          <div className='col-12 col-md-8 d-flex justify-content-left'>
              <section className='d-flex flex-column '>
                {/* {screenWidth >=992 &&<> */}
                  <div className='service_heading justify-content-center text_large text-start ml-2'>{jsonData[active]?.data?.[itemActive]?.heading}</div>
                  {/* </>} */}
                  <ul className='p-0' style={{textDecoration:"none"}} >
                      {jsonData[active]?.data?.[itemActive]?.points?.map((point,i)=>(
                      <div className={`d-flex flex-row mt-4 text_small`}>
                          <img src="/images/tick.svg" style={{height:"20px",marginTop:"4px"}}/>
                          <li className="item">&nbsp;{point}</li>
                      </div>
                      ))}
                      
                  </ul>
              </section>
          </div>
          </div>


      </div>
    </section>
      {/* SECOND SECTION */}
    <section className='row sec_back p-4 small_margin'>
      <div className='col-12 d-flex align-items-center service_heading text_xl '>{jsonData[1]?.name} <img  className="heading_image"  src={jsonData[1].logo}/> </div>
      <div className="col-12 mt-2  mt-4">
          <div className='row section_info d-flex'>
          <div className='col-12 col-md-4'>
          <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel"  data-interval="false" data-touch="true" data-ride="carousel">
          <div className="carousel-indicators">
              <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className={`${itemActive2 == 0 && 'active'}`} aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" className={`${itemActive2 == 1 && 'active'}`}  aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" className={`${itemActive2 == 2 && 'active'}`}aria-label="Slide 3"></button>
          </div>

          {
            jsonData?.[1]?.data.map((item,i)=>(
              item.id == itemActive2 && 
              <div className="carousel-inner" key={i}>
              <div 
                className={`d-flex justify-content-center carousel-item ${itemActive2 == item.id && 'active'}`} 
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
            if(itemActive2 == 0){setItem2(1)}
            else  setItem2(rev=>rev-1)}}
            className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>

          <button onClick={()=>{
            setService(false)
            if(itemActive2 == 2){setItem2(0)}
            else  setItem2(rev=>rev+1)}}className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
          
          </div>
          </div>
          <div className='col-12 col-md-8 d-flex justify-content-left'>
              <section className='d-flex flex-column '>
                
                  <div className='service_heading text_large text-start'>{jsonData[1]?.data?.[itemActive2]?.heading}</div>
                  <ul className="p-0" style={{textDecoration:"none"}} >
                      {jsonData[1]?.data?.[itemActive2]?.points?.map((point,i)=>(
                      <div className={`d-flex flex-row mt-4 text_small`}>
                          <img src="/images/tick.svg" style={{height:"20px",marginTop:"4px"}}/>
                          <li className="item">&nbsp;{point}</li>
                      </div>
                      ))}
                      
                  </ul>
              </section>
          </div>
          
        
          </div>


    
      </div>
    </section>

    </div>
   
  )
}





