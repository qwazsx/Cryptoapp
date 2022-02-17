// rafce diye bir snippet kullanarak iskeletimizi oluşturduk. jsx componentlerimizde
// Kullanılan paketler
// npm install antd @ant-design/icons react-redux @reduxjs/toolkit axios chart.js html-react-parser millify moment react-chartjs-2 react-router-dom
import React from 'react'
import { Routes, Switch, Route, Link } from 'react-router-dom';
import { Layout, Typography, Space } from 'antd';

// Bütün componentler için tek tek import yazmak yerine components altına index.js ekleyerek onun içine yazdık
// Tek bir import satırı ile bütün componentlerimizi kulllanabilir hale geldik
import { Navbar, Homepage, Exchanges, Cryptocurrencies, CryptoDetails, News } from './components'
import './App.css'


const App = () => {
    return (
        <div className="app">
            <div className="navbar">
                <Navbar />
            </div>
            <div className="main">
                <Layout>
                    <div className="routes">
                        <Routes>
                            <Route exact path='/' element={<Homepage />}>
                            </Route>
                            <Route exact path='/exchanges' element={<Exchanges />}>
                            </Route>
                            <Route exact path='/cryptocurrencies' element={<Cryptocurrencies />}>
                            </Route>
                            <Route exact path='/crypto/:coinId' element={<CryptoDetails />}> {/* buraya index geçicez 1-2 gibi */}
                            </Route>
                            <Route exact path='/news' element={<News />}>
                            </Route>
                            {/* 
                            <Switch>
                                <Route exact path='/news'>
                                    <News />
                                </Route>
                            </Switch> 
                            react-router-dom 6.0. öncesi yukarıdaki gibi kullanılıyordu. Yeni versiyonda element diye belirtmek gerekiyor.
                            Switch tagi de Routes tagine dönüştü.
                            */}
                        </Routes>
                    </div>
                </Layout>
                <div className="footer">
                    <Typography.Title level={5} style={{ color: 'white', textAlign: 'center' }}>
                        Cryptoverse <br />
                        All rights reserved.
                    </Typography.Title>
                    <Space>
                        <Link to='/'>Home</Link>
                        <Link to='/exchanges'>Exchanges</Link>
                        <Link to='/news'>News</Link>
                    </Space>
                </div>
            </div>
        </div>
    )
}

export default App