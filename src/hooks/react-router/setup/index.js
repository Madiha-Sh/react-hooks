import React from 'react';
// react router
import { BrowserRouter, Route, Router, Link, Routes } from 'react-router-dom';
// pages
import Home from './Home';
import About from './About';
import People from './People';
import Error from './Error';
import Person from './Person';
// navbar
import Navbar from './Navbar';

const ReactRouterSetup = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} ></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/people' element={<People />} />
        <Route path='*' element={<Error />} />
        <Route path='/person/:id' element={<Person />} ></Route>
      </Routes>
    </BrowserRouter>
  )
};

export default ReactRouterSetup;