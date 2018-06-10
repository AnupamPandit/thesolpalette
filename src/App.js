import React, { Component } from 'react';
import logo from './resources/logo.JPG';
import post2 from './resources/post2.jpg';
import post3 from './resources/post3.jpg';
import post4 from './resources/post4.jpg';
import post5 from './resources/post5.jpg';
import post6 from './resources/post6.jpg';
import post7 from './resources/post7.jpg';
import post8 from './resources/post8.JPG';
import post9 from './resources/post9.JPG';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to the solpalette</h1>
        </header>
        <p className="App-intro">
        <img src={logo} className="Post-img" alt="post-1" />
        <br />
        <img src={post2} className="Post-img" alt="post-1" />
        <br />
        <img src={post3} className="Post-img" alt="post-1" />
        <br />
        <img src={post4} className="Post-img" alt="post-1" />
        <br />
        <img src={post5} className="Post-img" alt="post-1" />
        <br />
        <img src={post6} className="Post-img" alt="post-1" />
        <br />
        <img src={post7} className="Post-img" alt="post-1" />
        <br />
        <img src={post8} className="Post-img" alt="post-1" />
        <br />
        <img src={post9} className="Post-img" alt="post-1" />
        </p>
      </div>
    );
  }
}

export default App;
