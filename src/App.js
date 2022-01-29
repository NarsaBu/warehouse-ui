import React from 'react';
import { DatePicker } from 'antd';
import 'antd/dist/antd.min.css';
import './App.css';
import MyButton from "./components/MyButton";
import HeaderMenu from "./components/HeaderMenu/HeaderMenu";
import MyTable from './components/MyTable';

function App() {
    return (
        <div className="App">
            <header className="App-header">

                <DatePicker />
                <HeaderMenu />
            </header>
            <main>
                <MyTable />
            </main>
        </div>
    );
}

export default App;
