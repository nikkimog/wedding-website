import { Typography, Button, Box } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";


const HomePage =()=> {
    return (
        <div className="homePageContainer">
            {/* <div className="photoDiv">
             {/* <img src="nikkiandkai3screenshot.jpg" alt="nikki and kai holding puppy linda" />  */}
            {/* </div> */} 
            {/* <div className="textDiv">
              <Box sx={{ display: 'flex', flexDirection: 'column'}}>
                <Typography variant="primary" sx={{padding: '.5rem'}}>
              come celebrate with us
              </Typography>
              <Box sx={{display: 'flex', justifyContent: 'space-evenly'}}> 
              <Link to="/ceremony">
                <Button variant="outlined">Ceremony Details</Button>
                </Link>
              <Link to="/rsvp">

                <Button variant="outlined">RSVP Here</Button>
                </Link>
              <Link to="/">

                <Button variant="outlined">About Us</Button>
                </Link>

              </Box>
              </Box>
            </div> */}
      </div>
    )
}

export default HomePage