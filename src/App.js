
import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom"
// import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './pages/About';
import Portfolio from './pages/Portfolio';

function App() {
  return (
    <Router basename="/react-portfolio/">
      <div >
        <Header />
        <Route exact path='/' component={About} />
        <Route exact path="/portfolio" component={Portfolio} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;