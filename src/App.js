import './App.css';
// import HomePage from './Pages/HomePage'
import RSVPPage from './Pages/RSVPPage'
// import RegistryPage from './Pages/RegistryPage';
// import CeremonyPage from './Pages/CeremonyPage';
// import FAQPage from './Pages/FAQPage';
// import ThingsToDoPage from './Pages/ThingsToDoPage';
// import AccomodationsPage from './Pages/AccomodationsPage'
import React from 'react';
import Navigation from './Components/Navigation';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ThemeProvider, createTheme } from '@mui/material/styles';
// import LodgingPage from './Pages/LodgingPage';
import { createClient } from '@supabase/supabase-js'
import MainView from './Pages/MainView';
import { ViewportProvider } from './ViewportProvider';



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

const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxwbmhkdmNqa3N5aWFycHR4ZWFwIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzY4MzkyOTgsImV4cCI6MTk5MjQxNTI5OH0.A-tqVNJfHrSlaornxs1JMf8mPuJD4PPv8cJSR5TEzwo'
const supabaseUrl = 'https://lpnhdvcjksyiarptxeap.supabase.co'
// const supabaseKey = process.env.SUPABASE_KEY
export const supabase = createClient(supabaseUrl, supabaseKey)

const App= () => {

  // const [page, setPage] = useState('Home')

  // const NavigationItems = [{}]


  
  return (
    <div className="App">
      <ViewportProvider>
      <ThemeProvider theme={theme}>
         <Router>
   <Navigation />



      {/* <HomePage />
      <CeremonyPage />
    <LodgingPage />

      <RegistryPage /> */}
      {/* <FAQPage /> */}


   <Routes>

     <Route exact path="/" element={<MainView />} />
    <Route exact path="/RSVP" element={<RSVPPage />} />
</Routes>

</Router> 
      </ThemeProvider>
      </ViewportProvider>
    </div>
  );
}

export default App;
