
import React from "react";
import {Routes, Route} from 'react-router-dom'
import NavBar from "./NavBar";
import Home from "./Home";
import About from "./About";
import MenuList from "./MenuList";
import Reservation from "./Reservation";
import Error from "./Error";
import MenuItem from "./MenuItem";
import menu from '../menu.js'


function App() {

  return (
    <div className="App">

        <NavBar />

      <Routes>
          <Route exact='true' path='/' element={<Home />} ></Route>
          <Route exact='true' path='/about' element={ <About />} ></Route>
          <Route exact='true' path='/menulist' element={<MenuList />} ></Route>
          <Route path="/menuitem/:steakId" element={<MenuItem menu={menu.steaks} />}></Route>
          <Route exact='true' path='/reservation' element={<Reservation/>} ></Route>
          <Route  path='*' element={<Error />} ></Route>
      </Routes>

      
  
    </div>
  );
}

export default App;
