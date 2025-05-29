import React from 'react';
import './App.css'; // Make sure your styles are in this file
import Header from './components/Header/Header';
import SoftwareSubscriptionManagement from './components/SoftwareSubscriptionManagement/SoftwareSubscriptionManagement';
import ProcurementManagement from './components/ProcurementManagement/ProcurementManagement';

const Home = () => {
  return (
    <>
    <Header />
    <SoftwareSubscriptionManagement />
    <ProcurementManagement />
    </>
  );
};

export default Home;
