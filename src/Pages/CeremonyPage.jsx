import { Typography, useMediaQuery } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { SectionBox } from "../Components/SectionBox";

const CeremonyPage = (theme) => {
  const mobile = useMediaQuery('(max-width:680px)');


  return (

    <SectionBox title="Ceremony" id="ceremony" >
      <Box style={{ margin: mobile ? "30px 0" : "74px 0", display: "flex", flexDirection: mobile ? 'column' : 'row'   }}>
        <Box sx={{ flex: "1", textAlign: "left", display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
          <Box>
            <Typography
              sx={{
                margin: "24px 0",
                padding: "10px 0",
                borderBottom: "solid 1px black",
                fontFamily: "Lato",
                width: "90px",
              }}
            >
              Date & Time
            </Typography>
            <Typography sx={{fontFamily: 'Manrope', fontSize: '24px'}}>February 24th, 4:00PM</Typography>
          </Box>
          <Box>
            <Typography
              sx={{
                margin: "24px 0",
                padding: "10px 0",
                borderBottom: "solid 1px black",
                fontFamily: "Lato",
                width: "45px",
              }}
            >
              Venue
            </Typography>
            <Typography sx={{fontFamily: 'Manrope', fontSize: '24px'}}>Tokara Wine Estate</Typography>
            <Typography sx={{fontFamily: 'Manrope', fontSize: '24px'}}>Stellenbosch, South Africa</Typography>
          </Box>
        </Box>
        <Box sx={{ flex: "1", textAlign: "left", justifyContent: 'space-evenly', display: 'flex', flexDirection: 'column' }}>
          <Box>
            <Typography
              sx={{
                margin: "24px 0",
                padding: "10px 0",
                borderBottom: "solid 1px black",
                fontFamily: "Lato",
                width: "72px",
              }}
            >
              Weather
            </Typography>
            <Typography sx={{fontFamily: 'Manrope', fontSize: '24px'}}>60-80° F with a slight breeze.</Typography>
            <Typography sx={{fontFamily: 'Manrope', fontSize: '24px'}}>It’s the end of summer in South Africa.</Typography>
            <Typography sx={{fontFamily: 'Manrope', fontSize: '24px'}}>Hopefully it will be absolutely beautiful!</Typography>
          </Box>
          <Box>
          <Typography
              sx={{
                margin: "24px 0",
                padding: "10px 0",
                borderBottom: "solid 1px black",
                fontFamily: "Lato",
                width: "90px",
              }}
            >
              Dress Code
            </Typography>
            <Typography sx={{fontFamily: 'Manrope', fontSize: '24px'}}>Cocktail</Typography>

          </Box>
        </Box>
      </Box>
      </SectionBox>
  );
};

export default CeremonyPage;
