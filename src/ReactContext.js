import React,{useState,useContext} from "react";
import './App.css';

export const Context = React.createContext();



function ReactContext({children}) {
    const [text,setText] = useState('')
    const update = (val) =>{
       return setText(val)
    }

let value = {
    text,
    update,
}
  return (
      <Context.Provider value={value}>
          {children}
      </Context.Provider>
    
  );
}

export default ReactContext;
