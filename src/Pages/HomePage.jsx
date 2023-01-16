import { Typography, Button, Box } from "@mui/material";
import React from "react";


const HomePage =()=> {
    return (
        <div className="homePageContainer">
            <div className="photoDiv">
             {/* <img src="nikkiandkai3screenshot.jpg" alt="nikki and kai holding puppy linda" />  */}
            </div>
            <div className="textDiv">
              <Box sx={{ display: 'flex', flexDirection: 'column'}}>
                <Typography variant="primary" sx={{padding: '.5rem'}}>
              come celebrate with us
              </Typography>
              <Box sx={{display: 'flex', justifyContent: 'space-evenly'}}> 
                <Button to="/ceremony" variant="outlined">Ceremony Details</Button>
                <Button variant="outlined">RSVP Here</Button>
                <Button variant="outlined">About Us</Button>

              </Box>
              </Box>
            </div>
      </div>
    )
}

export default HomePage