import React,{useState,useEffect, Children} from "react"
import '../App.css';
import axios from "axios"

function MainContent({children}) {
   
  return (
    <div style={{margin:"0 0 4em 0"}}>
      {children}
    </div>
  );
}

export default MainContent;
