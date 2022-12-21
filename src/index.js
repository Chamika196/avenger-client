import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter , Routes , Route } from "react-router-dom"; //give routing funcionalities
//import Avenger from "./components/avenger"
import Avengers from "./components/avengers";
import Avengerdetails from "./components/avengerdetails";
import NavBar from "./components/navBar";
import Home from "./components/home";

import "bootstrap/dist/css/bootstrap.css";

//const firstElement = <h2>Avengers</h2> // jsx == js syntax extention(XML)
 
ReactDOM.render(
    <BrowserRouter>
    <NavBar/>
        <React.Fragment>
            <Routes>
                <Route exact path="/" element={<Home/>}/>
                <Route exact path="/avengers" element={<Avengers/>}/>
                <Route exact path="/avengers/:id" element={<Avengerdetails/>}/>
                
                
            </Routes>
        </React.Fragment>
</BrowserRouter>,
document.getElementById('root')
);