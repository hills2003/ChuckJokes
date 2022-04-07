import { useState } from 'react';
import '../App.css';
import shape from "../assets/frontend01/shape.png"
import path from "../assets/frontend02/path.png"
function App() {

    const [on,setOn] = useState(false)
  return (
    <div className="topnav">
      <div class="ul-container">

      <div className='german'>SO FUNCTIONIERT'S</div>
      <div className='german'>SONDERANGEBOTE</div>
      <div className='dropdown-lookalike'>
            <div>
            <div className='mein'>
                <div className='left-drop'>
                    <img src={shape} />
                    <div>MEIN BEREICH</div>
                </div> 
                <img src={path} />
            </div>
       
            </div>
      </div>
      <div className='hamburger' onClick={()=>setOn(true)}>
        <svg width="35" height="30" viewBox="0 0 35 30" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 30H35V25H0V30ZM0 17.5H35V12.5H0V17.5ZM0 0V5H35V0H0Z" fill="white"/>
        </svg>
      </div>
      {
          on ? (
              <div className="display-on">
                     <div className="in-toggle" >
                     <svg onClick={()=>setOn(false)}width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15 0C6.705 0 0 6.705 0 15C0 23.295 6.705 30 15 30C23.295 30 30 23.295 30 15C30 6.705 23.295 0 15 0ZM22.5 20.385L20.385 22.5L15 17.115L9.615 22.5L7.5 20.385L12.885 15L7.5 9.615L9.615 7.5L15 12.885L20.385 7.5L22.5 9.615L17.115 15L22.5 20.385Z" fill="white"/>
                      </svg>


                     <div>SO FUNCTIONIERT'S</div>
                     <div>SONDERANGEBOTE</div>
                     </div>

                     

              </div>
          ):""
      }
      </div>
    </div>
  );
}

export default App;
