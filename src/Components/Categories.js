import React,{useState,useEffect} from "react"
import '../App.css';
import axios from "axios"

function Categories() {
    const [category,setCategory] = useState();

    useEffect(()=>{
            axios('https://api.chucknorris.io/jokes/categories')
              .then((item)=>{
                  setCategory(item.data)
              })
    },[])
  return (
    <div className="categories">
       <div className="cat-list">
           { 
              category &&  category.map((i,index)=>{
                let colors = ['#F84444','#F99622','#F6C516','#F9FE17','#48FE5A','#02C216','#4FCDF4']
                if(index <= 5){
                    return(
                       
                            <span key={index} className="each-cat" style={{backgroundColor:`${colors[index]}`}}>{i}</span>
                            
                      

                    )
                }
               
            })
            
           }
            <div className="view-all" style={{display:'flex',justifyContent:'space-between',cursor:'pointer'}}>
                    <span style={{marginRight:'.5em'}}>VIEW ALL</span>
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14 7L12.7663 5.76625L7.875 10.6488V0H6.125V10.6488L1.2425 5.7575L0 7L7 14L14 7Z" fill="#AA8219" fill-opacity="0.74"/>
                    </svg>
            </div>
       </div>
    </div>
  );
}

export default Categories;
