import React, { Component } from "react";
import "./App.css";

import Cards from "./cards"
import Form from "./form"


class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <div>Welcome to your state management version of Smurfs!</div>
        <div>Start inside of your `src/index.js` file!</div>
        <div>Have fun!</div>
        <Form/>
        <Cards/>
        
      </div>
    );
  }
}

export default App;
