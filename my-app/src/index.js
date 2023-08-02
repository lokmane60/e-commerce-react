import React from 'react';
import App from './App.js';
//import Apps from './Apps.js';
import { Provider } from 'react-redux'
import ReactDOM from 'react-dom/client';
import Store from './redux/Store';
//import Home from './pages/Home.js';
/*import Appp from './App.js'
import React, { Component } from 'react';
import Home from './component/Home.js';
import Crt_post from './component/crt_post.js';
import Post_det from './component/post_det.js';
import Login from './component/Login.js';
import Dashboard from './component/Dashboard.js';
import {BrowserRouter ,Route, Routes } from 'react-router-dom';
import './style.css'

class App extends Component {
    render(){
        return (
            
            
            <BrowserRouter>
                <Routes>
                <Route path="/" element = {<Home/>} />
                <Route path="/det" element = {<Post_det/>} />
                <Route path="/add" element = {<Crt_post/>} />
                <Route path="/reg" element = {<Login/>} />
                <Route path="/Dashboard" element = {<Dashboard/>} />
                </Routes>
                
                
            </BrowserRouter>
            
            
            
        )
        

        

    }
}*/
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(//<Home/>)
    <Provider store={Store}>
        <App/>
    </Provider>
    );

