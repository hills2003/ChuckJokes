import React,{useState,useEffect} from "react"
import '../App.css';
import axios from "axios"

function Categories() {
   
  return (
    <div className="footer">
       <div className="footer-content">
           <div className="footer-text">GET JOKES?GET PAID FOR SUBMITTING</div>
           <div className="div-footer">
                <div className="submit-joke">SUBMIT JOKE</div>
                <svg style={{marginTop:'2px'}} width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.5088 3H0V5H10.5088V8L14 4L10.5088 0V3Z" fill="#CE9910" fill-opacity="0.48"/>
                </svg>
                    


           </div>
       </div>
    </div>
  );
}

export default Categories;
