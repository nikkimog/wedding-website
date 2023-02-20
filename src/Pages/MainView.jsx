import React from 'react';
import HomePage from './HomePage'
import LodgingPage from './LodgingPage'
import RegistryPage from './RegistryPage';
import CeremonyPage from './CeremonyPage';
import FAQPage from './FAQPage';

const MainView = () => {
    return(
        <>
        <HomePage />
        <CeremonyPage />
      <LodgingPage />
        <RegistryPage />
        <FAQPage />
        </>
    )
}

export default MainView;