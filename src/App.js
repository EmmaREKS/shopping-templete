import React, { Component } from 'react';
import Header from './header/header';
import HeaderDown from './HeaderDown/headerdown';
import Tabs from './Tabs/tabs';
import Footer from './footer/footer';

import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
class App extends Component {
  render() {
    return (
      <div className="App">
       <Header/>
       <HeaderDown />
       <Tabs />
       <Footer />
     
      </div>
    );
  }
}

export default App;
