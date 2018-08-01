// Dependecies
import React, { Component } from 'react';

// Componenets
import Header from './Global/Header';
import Content from './Global/Content';
import Footer from './Global/Footer';

// Data
import Item from '../Data/Menu';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header title="my-app-blog" items={Item}/>
        <Content />
        <Footer copyright="&copy; Akira669 "/>
      </div>
    );
  }
}

export default App;
