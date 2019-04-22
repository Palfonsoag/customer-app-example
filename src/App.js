import React, { Component } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Link to="/customers">{"Customers"}</Link>
          <br />
          <Link to="/customers/30000000">{"Customer 30.000.000"}</Link>
        </div>
      </Router>
    );
  }
}

export default App;
