import React, { Component } from 'react';
import MainScreen from '../MainScreen/MainScreen'
import { BrowserRouter, Link } from 'react-router-dom'

class App extends Component {
  render () {
    return (
      <BrowserRouter>
        <div>
        <Link to="/" exact="true"><h1>ETL App</h1></Link>
          <MainScreen />
        </div>
      </BrowserRouter> 
    );
  }
}

export default App;
