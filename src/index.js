import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router ,Route,Routes} from "react-router-dom"
import App from './App';
import EachJoke from "./Components/EachJoke"
import ReactContext from "./ReactContext"
import {Provider} from "react-redux";
import store from "./store";

ReactDOM.render(
  <React.StrictMode>
    <ReactContext>
    <Provider store={store}>
    <Router>
      <Routes>
         <Route exact path="/" element={<App />} />
         <Route path="/jokecategory" element={<EachJoke />} />
      </Routes>
    </Router>
    </Provider>
    </ReactContext>
    
  </React.StrictMode>,
  document.getElementById('root')
);
