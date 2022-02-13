// rafce diye bir snippet kullanarak iskeletimizi oluşturduk.
// Kullanılan paketler
// npm install antd @ant-design/icons react-redux @reduxjs/toolkit axios chart.js html-react-parser millify moment react-chartjs-2 react-router-dom
import React from 'react'
import { Switch, Route, Link } from 'react-router-dom';
import { Layout, Typography, Space } from 'antd';

// Bütün componentler için tek tek import yazmak yerine components altına index.js ekleyerek onun içine yazdık
// Tek bir import satırı ile bütün componentlerimizi kulllanabilir hale geldik
import { Navbar } from './components'
import './App.css'


const App = () => {
    return (
        <div className="app">
            <div className="navbar">
                <Navbar/>
            </div>
            <div className="main">

            </div>
            <div className="footer">

            </div>
        </div>
    )
}

export default App