
import './App.css';
import React, { Component } from 'react';
import Nevbar from './component/Nevbar';     
import {BrowserRouter,Route,Routes} from "react-router-dom";
import New from './component/New';
import Technology from './component/Technology';
import Health from './component/Health';
import Entertainment from './component/Entertainment';


export default class App extends Component {


  render() {
    return (                                                                  
      <>
      <BrowserRouter>
      <Nevbar/>  
      <Routes>
          <Route exact path='/business' element={<New />}/>
          <Route exact path='/entertainment' element={<Entertainment/>}/>
          <Route exact path='/health' element={<Health/>}/>          
          <Route exact path='/technology' element={<Technology/>}/>
      </Routes>   
      </BrowserRouter>
     
        </>
    
    );
  }
}
