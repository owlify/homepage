import React, { useState, useEffect } from 'react';
const color=['#f3d250','#90ccf4','#f78888']

const Typewriter = ({ sentences }) => {
  const [displayText, setDisplayText] = useState('');
  const [sentenceIndex, setSentenceIndex] = useState(0);
  const [forward, setForward] = useState(true);
  useEffect(() => {
    const intervalId = setInterval(() => {
      if (forward) {
        // Typing
        setDisplayText((prevText) => {
          const nextChar = sentences[sentenceIndex][prevText.length];
          return prevText + nextChar;
        });
  
        // Check if typing is complete
        if (displayText.length === sentences[sentenceIndex].length-1) {
        
          setForward(false);

        }
      } else {
        // Erasing
    
          setDisplayText((prevText) => prevText.slice(0, -1));
          if (displayText.length === 0) {
            setSentenceIndex((prevIndex) => (prevIndex + 1) % sentences.length);
            setForward(true);
          }
     
       
       
      }
    }, 100);
    return () => clearInterval(intervalId);
  }, [sentences, displayText, forward, sentenceIndex]);

  return (<span style={{color:color[sentenceIndex]}}>{displayText}</span>);
};


export default function Banner() {
  const sentencesToDisplay = [
    "Acquire new",
    "Engage better with ",
    "Retail old",
  ];
  return (
    <div className='banner'>
    <div className='row'>

        <div className='col-12 col-md-6 banner_column d-flex flex-column justify-content-center align-items-center'>
        
          <div className='typewritter'>
           <h1 style={{fontWeight:"700", fontSize: '60px'}}><Typewriter sentences={sentencesToDisplay} /><span className='blink_me'>{" | "}</span><br />Customers</h1>
           <h5 className='company-description'>Grow your business with ease using our automated WhatsApp marketing.</h5>
          </div>
          
          </div>
      
        <div className='col-12 col-md-6 p-0 banner_column' >
            <img src="/images/landing_page.png" className='banner_img' />
        </div>

    </div>
    </div>
  )
}
