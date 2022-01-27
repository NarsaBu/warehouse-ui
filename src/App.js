import React from 'react';
import { DatePicker } from 'antd';
import logo from './logo.svg';
import 'antd/dist/antd.min.css';
import './App.css';
import MyButton from "./components/MyButton";
import HeaderMenu from "./components/HeaderMenu/HeaderMenu";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
          <DatePicker/>
          <MyButton value="pidaraz" />
          <HeaderMenu />
      </header>
    </div>
  );
}

export default App;
