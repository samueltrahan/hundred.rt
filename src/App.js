import React from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import SideBar from './components/SideBar/SideBar';
import Banner from './components/Banner/Banner';
import Footer from './components/Footer/Footer';

export default function App() {
  return (
    <div>
      <NavBar />
      <SideBar />
      <Banner />
      <Footer />
    </div>
  )
}
