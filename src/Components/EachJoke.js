import React,{useState,useEffect,useContext} from "react"
import '../App.css';
import axios from "axios"
import Topnav from "./Topnav";
import Background from "./Background";
import Footer from "./Footer"
import MainContent from "./MainContent"
import leftArrow from "../assets/frontend02/arrow-left-copy-2.png"
import { Context } from "../ReactContext";
import uphand from "../assets/frontend02/hand-copy.png"
import downhand from "../assets/frontend02/hand.png"
import next from "../assets/frontend02/arrow-left-copy.png"
import prev from "../assets/frontend02/arrow-left.png"
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
function EachJoke() {
    const { text,update }= useContext(Context)
    const [top,setTop] = useState([])
    const [joke,setJoke] = useState([])
    const { collection } = useSelector((state)=>state.updateCategory)
    const [count,setCount] = useState(1)
    const [nextDisabled,setNextDisabled] = useState(false)
    const [prevDisabled,setPrevDisabled] = useState(false)
    const dispatch= useDispatch();
    useEffect(()=>{
        axios(`https://api.chucknorris.io/jokes/search?query=${collection}`)
        .then((item)=>{
            setJoke(item.data.result)
            
        })

        axios('https://api.chucknorris.io/jokes/categories').then((i)=>setTop(i.data)).then(()=>console.log(top))
    },[count,collection])
   
  return (
    <div className="align-component">
        <Topnav />
        <Background />
           <MainContent>
                 <div className="joke-body">
                     <Link to="/">
                      <div className="back-button">
                          <img className="img-left" src={leftArrow}  />
                      </div>
                      </Link>
                      <div className="main-joke-content">
                          <div className="left-joke">
                              <div className="top-card-content">
                                  <div className="first-card-content">
                                      <div style={{display:'flex',justifyContent:'space-around',width:'25%'}} className="main-chip">
                                          <div className="small-circle"></div>
                                          <span className="joke-lane"> {`${collection} JOKES`}</span>
                                      </div>
                                      <div style={{display:'flex',justifyContent:'space-around',width:'12%'}}>
                                          <div className="small-circle2"></div>
                                          <span className="trends">Trending</span>
                                      </div>
                                     
                                  </div>
                                  <div className="second-card-content">
                                      <div className="joke-title">{`${collection} JOKES`}</div>
                                      <div className="line-through">
                                          
                                      </div>
                                      <div className="joke-rank">NO #{`${count}`}</div>
                                  </div>
                                  <div className="main-card-content">
                                      {
                                              joke && joke.map((item,index)=>{
                                                  if(index == count) {
                                                      return (
                                                          <span key={index}>{item.value}</span>
                                                      )
                                                  }
                                                 
                                                
                                                
                                                  
                                              })
                                          }</div>
                              </div>
                              <div className="bottom-content">
                                  <div className="joke-like">
                                      <div className="likes-container">
                                          <div className="img-container1">
                                              <img src={uphand} />
                                          </div>
                                          <span style={{color:'#0e7c0496',fontSize:'12px'}}>328</span>
                                        </div>
                                        <div className="likes-container">
                                          <div className="img-container2">
                                              <img src={downhand} />
                                              
                                          </div>
                                          <span style={{color:'#fd4343',fontSize:'12px'}}>98</span>
                                      </div>
                                  </div>
                                  <div className="next-joke">
                                      {prevDisabled ? (
                                           <div className="prev" onDoubleClick={(e)=>e.preventDefault()} >
                                           <img src={prev} className="more-joke"/>
                                           <span>PREV JOKE</span>
                                          </div>
                                       ):(
                                        <div className="prev" onDoubleClick={(e)=>e.preventDefault()} onClick={()=>setCount(count - 1)}>
                                        <img src={prev} className="more-joke"/>
                                        <span>PREV JOKE</span>
                                         </div>
                                       )}
                                      {nextDisabled ? (
                                          <div className="next" onDoubleClick={(e)=>e.preventDefault()} >
                                          <span >NEXT JOKE</span>
                                          <img src={next} className="more-joke"/>
                                      </div>
                                      ):(
                                        <div className="next" onDoubleClick={(e)=>e.preventDefault()} onClick={()=>setCount(count + 1)}>
                                        <span >NEXT JOKE</span>
                                        <img className="more-joke"src={next} />
                                    </div>
                                      )}
                                  </div>
                              </div>
                          </div>
                          <div className="right-joke">
                              <div className="top-ten">THE TOP JOKES THIS WEEK</div>
                              <div style={{display:'flex',flexDirection:'column'}} className="right-font">
                                    {top.map((item,index)=>(
                                        <span key={index}>{`${item} Joke`}</span>
                                    ))}
                              </div>
                          </div>
                      </div>
                 </div>
                
           </MainContent>
        <Footer />
      
    </div>
  );
}

export default EachJoke;
<img src={leftArrow} />
