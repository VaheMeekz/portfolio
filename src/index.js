import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";



ReactDOM.render(
    <BrowserRouter>
  <React.StrictMode>
    <App id={"module"}/>
  </React.StrictMode>
    </BrowserRouter>,
  document.getElementById('root')
);

const el = document.querySelector("module");

// el.addEventListener("mousemove", (e) => {
//   el.style.backgroundPositionX = -e.offsetX + "px";
//   el.style.backgroundPositionY = -e.offsetY + "px";
// });


