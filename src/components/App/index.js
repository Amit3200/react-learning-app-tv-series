import React, {Component} from 'react';
import Intro from '../Intro'
import Series from '../../containers/Series';
import './App.css';
import 'whatwg-fetch';

class App extends Component{
  render(){
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">
            TV Series List
          </h1>
        </header>
        {/* {Intro()} */}
        <Intro message="Here you will find list of ongoing TV-Series" />
        <Series />
      </div>
    );
  }
}

export default App;
