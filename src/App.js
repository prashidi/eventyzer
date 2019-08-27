import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";

import Navbar from "./components/layouts/Navbar";
import Dashboard from "./components/layouts/Dashboard";
import AddShift from "./components/shifts/AddShift";
import Applications from "./components/shifts/Applications";
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
                <Route exact path="/shift/:id" component={Applications} />
              </Switch>
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
