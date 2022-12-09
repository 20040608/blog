import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer/footer';
import Navbar from '../components/Navbar/navbar';

const Layuot = () => {
  return (
    <>
      <Navbar/>
      {
        <Outlet/> 
      }
      <Footer/>
    </>
  );
}

export default Layuot;
