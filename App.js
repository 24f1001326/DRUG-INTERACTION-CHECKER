import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import HomePage from './components/Home';
import NewsPage from './components/NewsPage';
import Pill from './components/Pill';
import IC from './components/IC';
import About from './components/About';
import AppK from './components/Know';
import Pa from './components/Pa';
import Bot from './components/Bot';


function App() {
    return (
        <Router>
            <Routes>
                <Route path="/register" element={<Register />} />
                <Route path="/signin" element={<Login />} />
                <Route path="/pill" element={<Pill />} />
                <Route path="/news" element={<NewsPage />} />
                <Route path="/home" element={<HomePage />} />
                <Route path="/" element={<HomePage />} />
                <Route path="/ic" element={<IC />} />
                <Route path="/about" element={<About />} />
                <Route path="/know" element={<AppK />} />
                <Route path="/bot" element={<Bot />} />
                <Route path="/pa" element={<Pa />} />
                


            </Routes>
        </Router>
    );
}

export default App;
