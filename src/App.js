import React from 'react';
import { DatePicker } from 'antd';
import 'antd/dist/antd.min.css';
import './App.css';
import HeaderMenu from "./components/HeaderMenu/HeaderMenu";
import MyTable from './components/MyTable';
import Spinner from "./components/Spinner";
import Counter from './components/Counter';


function App() {
    return (
        <div className="App">
            <header className="App-header">
                <DatePicker />
                <HeaderMenu />
            </header>
            <aside>
                <Counter />
            </aside>
            <main>
                <Spinner isLoading><MyTable /></Spinner>
            </main>
        </div>
    );
}

export default App;
