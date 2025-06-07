import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Login from '../pages/Login';
import Register from '../pages/Register';
import NotFound from '../pages/NotFound';
import Members from '../pages/Members/Members';
import MemberDetails from '../pages/Members/MemberDetails';
import RequestMeeting from '../pages/RequestMeeting';
import PersonalInfo from '../pages/Profile/PersonalInfo';

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
      <Route path='/request' element={<RequestMeeting />} />
      <Route path='/profile/:id' element={<PersonalInfo />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  );
};
export default Routers;
