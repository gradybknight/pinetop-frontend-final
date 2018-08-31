import React, { Component } from 'react';
import './App.css';
import { Provider } from 'react-redux';
import store from './store'
import NavBar from './components/NavBar';
import TabBar from './containers/TabBar';

class App extends Component {
  render() {
    return (
      <Provider store = {store}>
        <div className="App">
          <NavBar />
          <TabBar />
        </div>
      </Provider>
    );
  }
}

export default App;
