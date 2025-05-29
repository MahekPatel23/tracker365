import React from 'react';
import './App.css'; // Make sure your styles are in this file
import Header from './components/Header/Header';
import SoftwareSubscriptionManagement from './components/SoftwareSubscriptionManagement/SoftwareSubscriptionManagement';
import ProcurementManagement from './components/ProcurementManagement/ProcurementManagement';
import HardwareLifeCycle from './components/HardwareLifeCycle/HardwareLifeCycle';

const Home = () => {
  return (
    <>
    <Header />
    <SoftwareSubscriptionManagement />
    <ProcurementManagement />
    <HardwareLifeCycle />
    </>
  );
};

export default Home;
