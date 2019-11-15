import React from 'react';
import './App.css';
import Landing from './pages/LandingPage/Landing'
import Navbar from './components/Navbar'
// import Bank from './components/Bank'
// import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Navbar />
     <Landing />
    </div>
  );
}

export default App;
