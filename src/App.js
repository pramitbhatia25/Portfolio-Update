import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './app.css';
import Home from './components/Home/Home.js';

function App() {

    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route
                        path="/"
                        element={<Home />}
                    />
                    <Route
                        path="/other"
                        element={<Navigate to="/" />}
                    />
                    <Route path="*" element={ <Navigate to="/" />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
