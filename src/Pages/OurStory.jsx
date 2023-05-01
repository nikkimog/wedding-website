import { Typography, Box, useMediaQuery } from "@mui/material";
import React from "react";
import { SectionBox } from "../Components/SectionBox";

const OurStory = () => {
  const mobile = useMediaQuery("(max-width:600px)");

  return (
    <SectionBox id="ourstory" title="Our Story">
      <Typography>
        {" "}
        Nikki was at Linda's (the famed bar and grill in Chapel Hill) the night
        Kai and Nikki first met. They carried the legacy of that fateful night
        on in naming their sweet golden retriever after the bar and in honor of
        the cheese fries that were a staple during the early days of their
        relationship. It was immediately clear that Nikki and Kai were made for
        one another, and after a few months they planned a trip to South Africa
        for Kai to visit home with the added benefit of Nikki meeting Kai's
        family and getting to see Kai's hometown. After that visit, Nikki knew
        she wanted to marry Kai in South Africa. She was taken by the beautiful
        country and wanted to be able to share this experience with all of her
        loved ones. After both Nikki and Kai finished graduate school, they
        moved to Charlotte where they got to spend time closer to Nikki's family
        and spend the last year of Nikki's brother Cody's life with him. Then a
        job opportunity came and moved them to San Francisco, where they're
        continuing to grow together and enjoying living in a big city with lots
        of parks for Linda. They've had an eventful six years together and are
        so excited to celebrate their marriage with their friends and family in
        South Africa - the start to the rest of their lives together!
      </Typography>
      {/* // use css grid */}
      <Box display="flex" sx={{ height: mobile? '250px' : '400px'}}>
      <Box className="photoOne" sx={{ flex: 1}} />
      <Box className="charlotte" sx={{ flex: 1, margin: '0 0 0 10px '}} />


      </Box>
      <Box display="flex" sx={{ height: mobile? '250px' : '500px'}}>

        <Box className="photoTwo" sx={{ flex: 1 }} />
        <Box className="kaiphd" sx={{ flex: 1,  margin: '0 10px' }} />
        <Box className="sfsunset" sx={{ flex: 1 }} />


      </Box>
    </SectionBox>
  );
};

export default OurStory;
