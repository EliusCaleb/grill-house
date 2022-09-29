
import React from "react";
import {Routes, Route} from 'react-router-dom'
import NavBar from "./NavBar";
import Home from "./Home";
import About from "./About";
import MenuList from "./MenuList";
import Reservation from "./Reservation";

function App() {
  return (
    <div className="App">

        <NavBar />

      <Routes>
          <Route exact='true' path='/' element={<Home />} ></Route>
          <Route exact='true' path='/about' element={ <About />} ></Route>
          <Route exact='true' path='/menu' element={<MenuList />} ></Route>
          <Route exact='true' path='/reservation' element={<Reservation />} ></Route>
      </Routes>

      
  
    </div>
  );
}

export default App;
