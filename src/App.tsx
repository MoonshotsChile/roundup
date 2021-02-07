import React from 'react';
import './App.scss';
import Landing from "./components/landing/Landing";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";

function App() {
    return (
        <div className="container is-fluid">
            <Navbar></Navbar>
            <Landing></Landing>
            <Footer></Footer>
        </div>
    );
}

export default App;
