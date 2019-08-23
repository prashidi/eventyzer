import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/layouts/Navbar";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="container">
          <h1>Hello React!</h1>
        </div>
      </div>
    </Router>
  );
}

export default App;
