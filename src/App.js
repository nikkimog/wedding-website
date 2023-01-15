import './App.css';
import HomePage from './Pages/HomePage'
import RSVPPage from './Pages/RSVPPage'
import RegistryPage from './Pages/RegistryPage';
import CeremonyPage from './Pages/CeremonyPage';
import FAQPage from './Pages/FAQPage';
import ThingsToDoPage from './Pages/ThingsToDoPage';
import AccomodationsPage from './Pages/AccomodationsPage'
import React, {useState} from 'react';
import Navigation from './Components/Navigation';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ThemeProvider, createTheme } from '@mui/material/styles';


const theme = createTheme({
  palette: {
    primary: {
      main: '#606c38'
    },
    secondary: {
      main: '#283618'
    }
  },
  typography: {
    h3: {
      color: '#283618'
    },
    h2: {
      fontSize: '40px'
    },
    h5: {
      fontSize: '20px',
      color: '#283618'
    },
    primary: {
      color: '#606c38'
    },
  },
});

const App= () => {

  // const [page, setPage] = useState('Home')

  // const NavigationItems = [{}]
  
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
         <Router>
      <Navigation />

    <Routes>
    <Route exact path="/" element={<HomePage />} />
    <Route exact path="/RSVP" element={<RSVPPage />} />
    <Route exact path="/registry" element={<RegistryPage />} />
    <Route path="/accomodations" element={<AccomodationsPage />} />
    <Route path="/things-to-do" element={<ThingsToDoPage />} />
    <Route path="/ceremony" element={<CeremonyPage />} />
    <Route path="/faq" element={<FAQPage />} />


</Routes>
 

</Router>
      </ThemeProvider>
    </div>
  );
}

export default App;
