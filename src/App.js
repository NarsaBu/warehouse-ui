import React from 'react';
import { DatePicker } from 'antd';
import 'antd/dist/antd.min.css';
import './App.css';
import HeaderMenu from "./components/HeaderMenu/HeaderMenu";
import MyTable from './components/MyTable';
import Spinner from "./components/Spinner";

function App() {
    return (
        <div className="App">
            <header className="App-header">

                <DatePicker />
                <HeaderMenu />
                <Spinner />
            </header>
            <main>
                <MyTable />
            </main>
        </div>
    );
}

export default App;
