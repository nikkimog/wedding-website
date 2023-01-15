import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react'

const CeremonyPage = () => {

    return (
        <Box style={{ height: '100%'}}>
        <Box style={{ margin: '20px 0'}}>Ceremony Details</Box>
        <Box display="flex" flexDirection="column">
            <Box style={{ margin: '20px 0'}}>
                <Typography>We’ll be celebrating our marriage at 4:30pm at Tokara Wine Estate in Stellenbosch, South Africa.</Typography>
            </Box>
            <Box display="flex">
                three areas
                <Box>area one
             <img src="clock.png" height="300px" alt="clock showing 430 pm" /> 

                </Box>
                <Box>area two</Box>
             <img src="tokara.jpeg" height="300px" alt="tokara wine estate" /> 

                <Box>arew three</Box>
             <img src="stellenbosch.png" height="300px" alt="clock showing 430 pm" /> 

            </Box>
            <Box style={{ margin: '20px 0'}}>
                <Typography>Our ceremony will be outside followed by an indoor reception. February is summer in South Africa, 
please keep that in mind while you’re choosing what to wear. Refer to FAQ for more information!</Typography>
            </Box>
        </Box>

        </Box>
    )
}

export default CeremonyPage;