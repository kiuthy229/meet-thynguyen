import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import React from 'react';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Login from '../pages/Login';
import Register from '../pages/Register';
import NotFound from '../pages/NotFound';
import Members from '../pages/Members/Members';
import MemberDetails from '../pages/Members/MemberDetails';
import Requests from '../pages/Requests';

const Routers = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />
      <Route path='/members' element={<Members />} />
      <Route path='/members/:id' element={<MemberDetails />} />
      <Route path='/requests' element={<Requests />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  );
};
export default Routers;
