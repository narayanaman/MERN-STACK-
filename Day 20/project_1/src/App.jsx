import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./Navbar";
import Home from "./Home";
import ContactUS from "./ContactUS";
import Service from "./Service";
import Welcome from "./Welcome";
function App() {
  return (
    <BrowserRouter>
    <Navbar/>

    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/contact" element={<ContactUS/>} />
      <Route path="/service" element={<Service/>}/>
      <Route path="/welcome" element={<Welcome/>} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
