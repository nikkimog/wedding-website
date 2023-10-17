import React from "react";
import HomePage from "./HomePage";
import LodgingPage from "./LodgingPage";
import RegistryPage from "./RegistryPage";
import CeremonyPage from "./CeremonyPage";
import FAQPage from "./FAQPage";
import { Box } from "@mui/material";
import OurStory from "./OurStory";
import Footer from "./Footer";

const MainView = () => {
  return (
    <Box sx={{ width: "100%" }}>
      <HomePage />
      <CeremonyPage />
      <LodgingPage />
      <OurStory />
      <RegistryPage />
      <FAQPage />
      <Footer />
    </Box>
  );
};

export default MainView;
