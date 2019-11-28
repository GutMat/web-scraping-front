import React, { Component } from 'react';
import MainScreen from '../MainScreen/MainScreen'
import { BrowserRouter } from 'react-router-dom'

class App extends Component {
  render () {
    return (
      <BrowserRouter>
        <div>
          <MainScreen />
        </div>
      </BrowserRouter> 
    );
  }
}

export default App;
