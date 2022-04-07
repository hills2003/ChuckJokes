import React,{useState,useEffect, useContext} from "react";
import '../App.css';
import axios from "axios";
import { Context } from "../ReactContext";
import { useDispatch, useSelector } from "react-redux";
import { updatecategory } from "../Reducers/updateCategory";
import { Link } from "react-router-dom";


function Jokescategory() {
    const [joke1,setJoke1] = useState([])
    const [joke2,setJoke2] = useState([])
    const [joke3,setJoke3] = useState([])
    const [joke4,setJoke4] = useState([])
    const [joke5,setJoke5] = useState([])
    const [joke6,setJoke6] = useState([])
  
  
   
    const [more,setMore] = useState(true)
    const [jCategory,setJCategory]= useState([])
    const { text,update }= useContext(Context)
    const { collection } = useSelector((state)=>state.updateCategory)
    const dispatch= useDispatch();
    const [allJokes,setAllJokes] = useState([])
    useEffect(()=>{

            axios('https://api.chucknorris.io/jokes/search?query=animal')
               .then((item)=>{
                   setJoke1(item.data.result)
                   
               })
               axios('https://api.chucknorris.io/jokes/search?query=career')
               .then((item)=>{
                   setJoke2(item.data.result)
                   
               })
               axios('https://api.chucknorris.io/jokes/search?query=celebrity')
               .then((item)=>{
                   setJoke3(item.data.result)
                   
               })
               axios('https://api.chucknorris.io/jokes/search?query=dev')
               .then((item)=>{
                   setJoke4(item.data.result)
                   
               })
               axios('https://api.chucknorris.io/jokes/search?query=food')
               .then((item)=>{
                   setJoke5(item.data.result)
                   
               })
               axios('https://api.chucknorris.io/jokes/search?query=fashion')
               .then((item)=>{
                   setJoke6(item.data.result)
                   
               })
      
               let arr = [];
             //  Promise.all([axios('https://api.chucknorris.io/jokes/search?query=food'),axios('https://api.chucknorris.io/jokes/search?query=teacher'),axios('https://api.chucknorris.io/jokes/search?query=doctor')]).then((value)=>Promise.all(value.map((item)=>item.data))).then(i => i.map((item)=>arr.push(item.result))).then(()=>console.log(arr))
              axios('https://api.chucknorris.io/jokes/search?query=all').then((i)=>setAllJokes(i.data.result)).then(()=>console.log(allJokes))
             axios('https://api.chucknorris.io/jokes/categories').then((i)=>setJCategory(i.data))
      
    },[])

  return (
    <div className="main-jokes">
       <div className="category">
           COLLECTION
       </div>
       <hr />

      
          <>
             {more ? (
                 <>
                      <div className="card-container">
           {joke1 && joke1.map((i,index)=>{
               if(index == 1){
                   return (
                    <div className="card" key={index} onClick={()=>dispatch(updatecategory(`${(jCategory[0]).toUpperCase()}`))}>
                    <div className="card-title">{ jCategory[0] && `${(jCategory[0]).toUpperCase()} JOKES`}</div>
                    <div className="card-content">{i.value}</div>
                    <div className="card-footer">
                    <Link to="/jokecategory" style={{textDecoration:'none'}}>
                        <div className="see-stats">
                            <div className="stats"onClick={()=>update(`${jCategory[0]}`)}>SEE STATS</div>
                            <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M9.0075 3H0V5H9.0075V8L12 4L9.0075 0V3Z" fill="#EDAD08"/>
                          </svg>
                        </div>
                        </Link>
                    </div>
                </div>
                   )
               }
           })}
           {joke2 && joke2.map((i,index)=>{
               if(index == 1){
                   return (
                    <div className="card" key={index} onClick={()=>dispatch(updatecategory(`${(jCategory[1]).toUpperCase()} `))}>
                    <div className="card-title">{jCategory[1] && `${(jCategory[1]).toUpperCase()} JOKES`}</div>
                    <div className="card-content">{i.value}</div>
                    <div className="card-footer">
                    <Link to="/jokecategory" style={{textDecoration:'none'}}>
                        <div className="see-stats">
                            <div className="stats">SEE STATS</div>
                            <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M9.0075 3H0V5H9.0075V8L12 4L9.0075 0V3Z" fill="#EDAD08"/>
                          </svg>
                        </div>
                        </Link>
                    </div>
                </div>
                   )
               }
           })}
           {joke3 && joke3.map((i,index)=>{
               if(index == 1){
                   return (
                    
                        <div className="card" key={index} onClick={()=>dispatch(updatecategory(`${(jCategory[2]).toUpperCase()}`))}>
                    <div className="card-title">{jCategory[2] && `${(jCategory[2]).toUpperCase()} JOKES`}</div>
                    <div className="card-content">{i.value}</div>
                    <div className="card-footer">
                        
                        <Link to="/jokecategory" style={{textDecoration:'none'}}>
                        <div className="see-stats">
                        <div className="stats">SEE STATS</div>
                            <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M9.0075 3H0V5H9.0075V8L12 4L9.0075 0V3Z" fill="#EDAD08"/>
                          </svg>
                          </div>
                          </Link> 
                        
                    </div>
                </div>
                   
                   )
               }
           })}
           {joke4 && joke4.map((i,index)=>{
               if(index == 1){
                   return (
                    <div className="card" key={index} onClick={()=>dispatch(updatecategory(`${(jCategory[3]).toUpperCase()}`))}>
                    <div className="card-title">{jCategory[3] && `${(jCategory[3]).toUpperCase()} JOKES`}</div>
                    <div className="card-content">{i.value}</div>
                    <div className="card-footer">
                    <Link to="/jokecategory" style={{textDecoration:'none'}}>
                        <div className="see-stats">
                            <div className="stats">SEE STATS</div>
                            <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M9.0075 3H0V5H9.0075V8L12 4L9.0075 0V3Z" fill="#EDAD08"/>
                          </svg>
                        </div>
                        </Link>
                    </div>
                </div>
                   )
               }
           })}
           {joke5 && joke5.map((i,index)=>{
               if(index == 1){
                   return (
                    <div className="card" key={index} onClick={()=>dispatch(updatecategory(`${(jCategory[6]).toUpperCase()}`))}>
                    <div className="card-title">{ jCategory[6] && `${(jCategory[6]).toUpperCase()} JOKES`}</div>
                    <div className="card-content">{i.value}</div>
                    <div className="card-footer">
                    <Link to="/jokecategory" style={{textDecoration:'none'}}>
                        <div className="see-stats">
                            <div className="stats">SEE STATS</div>
                            <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M9.0075 3H0V5H9.0075V8L12 4L9.0075 0V3Z" fill="#EDAD08"/>
                          </svg>
                        </div>
                        </Link>
                    </div>
                </div>
                   )
               }
           })}
           {joke6 && joke6.map((i,index)=>{
               if(index == 1){
                   return (
                    <div className="card" key={index} onClick={()=>dispatch(updatecategory(`${(jCategory[6]).toUpperCase()}`))}>
                    <div className="card-title">{jCategory[5] && `${(jCategory[5]).toUpperCase()} JOKES`}</div>
                    <div className="card-content">{i.value}</div>
                    <div className="card-footer">
                    <Link to="/jokecategory" style={{textDecoration:'none'}}>
                        <div className="see-stats">
                            <div className="stats">SEE STATS</div>
                            <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M9.0075 3H0V5H9.0075V8L12 4L9.0075 0V3Z" fill="#EDAD08"/>
                          </svg>
                        </div>
                        </Link>
                    </div>
                </div>
                   )
               }
           })}

           
          
       </div>   
        
       <div className="center-button" onClick={()=>setMore(!more)}>
           <div className="view-all" style={{display:'flex',justifyContent:'space-between',cursor:'pointer'}}>
                    <span style={{marginRight:'.5em'}}>VIEW MORE</span>
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14 7L12.7663 5.76625L7.875 10.6488V0H6.125V10.6488L1.2425 5.7575L0 7L7 14L14 7Z" fill="#AA8219" fill-opacity="0.74"/>
                    </svg>
            </div>
       </div>
                 </>
             ):(
                 <>

                <div className="card-container">
                {allJokes && allJokes.map((i,index)=>{
              
                   return (
                    <div className="card" key={index}>
                    <div className="card-title">
                        {i.categories.map((item)=>(
                            <span>{item}</span>
                        ))}
                      
                    </div>
                    <div className="card-content">{i.value}</div>
                    <div className="card-footer">
                    <Link to="/jokecategory" style={{textDecoration:'none'}}>
                        <div className="see-stats">
                            <div className="stats" >
                            {i.categories.map((item)=>(
                               <span onClick={()=>dispatch(updatecategory(`${(item).toUpperCase()}`))}>SEE STATS</span>
                             ))}
                            </div>
                            <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M9.0075 3H0V5H9.0075V8L12 4L9.0075 0V3Z" fill="#EDAD08"/>
                          </svg>
                        </div>
                        </Link>
                    </div>
                </div>
                   )
              
           })}
                </div>
                <div className="center-button" onClick={()=>setMore(!more)}>
                    <div className="view-all" style={{display:'flex',justifyContent:'space-between',cursor:'pointer'}}>
                                <span style={{marginRight:'.5em'}}>VIEW LESS</span>
                                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14 7L12.7663 5.76625L7.875 10.6488V0H6.125V10.6488L1.2425 5.7575L0 7L7 14L14 7Z" fill="#AA8219" fill-opacity="0.74"/>
                                </svg>
                        </div>
                </div>
                 </>
             )}
          </>
      
    </div>
  );
}

export default Jokescategory;
