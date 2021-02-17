import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Comp from './Comp';
import Title from './Title';
import reportWebVitals from './reportWebVitals';
import 'tachyons';

ReactDOM.render(
   <div>
    <Title/>
    <Comp/>
    </div>



    
  
  ,document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
