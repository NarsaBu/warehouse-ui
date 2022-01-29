import React from 'react';
import {DatePicker} from 'antd';
import 'antd/dist/antd.min.css';
import './App.css';
import MyButton from "./components/MyButton";
import HeaderMenu from "./components/HeaderMenu/HeaderMenu";

function App() {
    return (
        <div className="App">
            <header className="App-header">

                <DatePicker/>
                <HeaderMenu/>
            </header>
        </div>
    );
}

export default App;
