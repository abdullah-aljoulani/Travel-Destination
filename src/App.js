import React from "react";
import Home from './components/home/Home';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Data from"./data/db.json";
import TourDetails from './components/TourDetails/TourDetails';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home data={Data}/>}></Route>
        <Route path='/city/:id' element={<TourDetails data={Data}/>}></Route> 
      </Routes>
    </div>
  );
}

export default App;