import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Banner from './components/Banner' ;
import './App.css';
import Footer from './components/Footer';
import Home from './views/home';
import Logement from './views/Logement';
import App from './App';
import Error from './views/Error';
import reportWebVitals from './reportWebVitals';
import Apropos from './views/Apropos'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Banner/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/app' element={<App/>}/>
        <Route path='/apropos' element={<Apropos/>}/>
        <Route path='/logement/:logementId' element={<Logement/>}/>
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer/>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
