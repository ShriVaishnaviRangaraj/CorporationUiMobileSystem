import './App.css';
import React from 'react';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Home from './pages/home';
import UnresolvedComplaints from './pages/unresolvedComplaints';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import Header from "./components/Header";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header/><br/>
        <ToastContainer position="top-center"/>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route path="/unresolvedComplaints" element={<UnresolvedComplaints/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
