import { useEffect, useState } from 'react';
import '../App.css';
import axios from "axios";
import { useSelector ,useDispatch} from 'react-redux';
import { updatecategory } from "../Reducers/updateCategory";
import { Link } from "react-router-dom";

function Background() {
    const [search,setSearch] = useState([])
    const [selectVal,setSelectVal] = useState('')
   
    const dispatch = useDispatch();
    useEffect(()=>{
        axios('https://api.chucknorris.io/jokes/categories').then((i)=>setSearch(i.data))
    },[])
    const collectionUpdate = async() =>{
        await dispatch(updatecategory(`${(selectVal).toUpperCase()} `))

    }
  return (
    <div className="background">
       <div className="joke-bible">The Joke bible</div>
       <div className="daily">Daily Laughs for you and yours</div>
       <div className="search">
           <select className='custom-select' name="filter" id="filter" onChange={(e)=>setSelectVal(e.target.value)}>
          
             {
                 search && search.map((i,index)=>(
                    <option key={index} value={i}>{i}</option>
                 ))
             }
           </select>
           <Link to="/jokecategory">
           <svg onClick={()=>collectionUpdate()} style={{cursor:'pointer'}} width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.8645 11.3208H12.0515L11.7633 11.0429C12.7719 9.86964 13.3791 8.34648 13.3791 6.68954C13.3791 2.99485 10.3842 0 6.68954 0C2.99485 0 0 2.99485 0 6.68954C0 10.3842 2.99485 13.3791 6.68954 13.3791C8.34648 13.3791 9.86964 12.7719 11.0429 11.7633L11.3208 12.0515V12.8645L16.4666 18L18 16.4666L12.8645 11.3208V11.3208ZM6.68954 11.3208C4.12693 11.3208 2.05832 9.25214 2.05832 6.68954C2.05832 4.12693 4.12693 2.05832 6.68954 2.05832C9.25214 2.05832 11.3208 4.12693 11.3208 6.68954C11.3208 9.25214 9.25214 11.3208 6.68954 11.3208Z" fill="white"/>
            </svg>
           </Link>

       </div>
    </div>
  );
}

export default Background;
