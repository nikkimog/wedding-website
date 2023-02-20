import { Typography, useMediaQuery } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const CeremonyPage = (theme) => {
  const mobile = useMediaQuery('(max-width:600px)');
  return (
    <Box
    id="ceremony"
      style={{ height: "100%", margin: "0 74px", padding: "125px 0" }}
    >

      <Box 
      >
      <Typography
        sx={{ fontFamily: "Cardo", fontSize: "64px", textAlign: "left" }}
      >
        Ceremony
      </Typography>
      </Box>
      <Box style={{ margin: "74px 0", display: "flex", flexDirection: mobile ? 'column' : 'row'   }}>
        <Box sx={{ flex: "1", textAlign: "left" }}>
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
            <Typography sx={{fontFamily: 'Manrope', fontSize: '24px'}}>February 24th, 4:30PM</Typography>
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
        <Box sx={{ flex: "1", textAlign: "left", justifyContent: 'space-evenly', display: 'flex' }}>
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
        </Box>
      </Box>
    </Box>
  );
};

export default CeremonyPage;
