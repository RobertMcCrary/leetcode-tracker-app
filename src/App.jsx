import React from 'react';
import './App.css';
import { useState, useEffect } from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Register from './components/Register';
import Login from './components/Login';
import Home from './components/Home';

//functions
import { getTest } from './functions/test';


function App() {
  const [data, setData] = useState();


  useEffect(() => {
    //function from functions/test.js
    getTest().then((res) => {
      setData(res.message);
    }).catch((err) => console.log(err))
  }, []);
  

  return (
    <div className="App">
      <h1>{data}</h1>
    </div>
  );
}

export default App;
