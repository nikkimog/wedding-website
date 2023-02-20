import React from 'react'
import { Box, Typography, Link } from '@mui/material'


const RegistryPage = () => {

    return (
        <Box
        id="registry"
          style={{ height: "100%", margin: "0 74px", padding: "125px 0" }}
        >
        {/* <div id="registry" className="registryPage">
        <div className="registryTextContainer"> */}
        <Box sx={{ flex: "1", textAlign: "left" }}>
        <Typography sx={{ fontFamily: "Cardo", fontSize: "64px", textAlign: "left" }}>
           Registry
            </Typography>
        <Typography  sx={{fontFamily: 'Manrope', fontSize: '24px'}}>If you are coming to our ceremony in South Africa, please consider your presence our wedding present.</Typography>
        <Typography  sx={{fontFamily: 'Manrope', fontSize: '24px'}}>If you are not able to attend and would like to give a gift, please follow this link to an <Link to="/"> external registry.</Link></Typography>
        {/* </div>
        </div> */}
        </Box>
        </Box>
    )
}

export default RegistryPage;