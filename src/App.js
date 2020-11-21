import React from "react"
import './App.css';
import {HashRouter as Router} from "react-router-dom"
import {Header} from "./Components/Header"
import Navigation from "./Components/Navigation"
import Content from "./Components/Content"


function App() {
  return (
    <Router>
      <Header/>
      <Navigation/>
      <Content/>
    </Router>
  );
}

export default App;
