import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";

import Navbar from "./components/layouts/Navbar";
import Dashboard from "./components/layouts/Dashboard";
import AddShift from "./components/shifts/AddShift";
import ShiftDetails from "./components/shifts/ShiftDetails";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Navbar />
            <div className="container">
              <Switch>
                <Route exact path="/" component={Dashboard} />
                <Route exact path="/shift/add" component={AddShift} />
                <Route exact path="/shift/:id" component={ShiftDetails} />
              </Switch>
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
