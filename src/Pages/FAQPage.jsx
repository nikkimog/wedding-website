import { Typography, Box} from '@mui/material';
import React from 'react'

const FAQPage = () => {

    return (

        <Box
        id="faq"
          style={{ height: "100%", margin: "0 74px", padding: "125px 0" }}
        >
        <Box sx={{ flex: "1", textAlign: "left" }}>
        <Typography sx={{ fontFamily: "Cardo", fontSize: "64px", textAlign: "left" }}>
           FAQ
            </Typography>
        <Typography  sx={{fontFamily: 'Manrope', fontSize: '24px'}}>Q: What should I wear? </Typography>
        <Typography  sx={{fontFamily: 'Manrope', fontSize: '24px'}}>A: Cocktail with a garden party spin. </Typography>
        <Typography  sx={{fontFamily: 'Manrope', fontSize: '24px', paddingTop: '18px'}}>Q: What will the weather be?</Typography>
        <Typography  sx={{fontFamily: 'Manrope', fontSize: '24px'}}>A: February is the end of summer in South Africa. The weather will range from 60 degrees F to 80 degrees F with a light breeze. Hopefully it will be absolutely beautiful! </Typography>
        <Typography  sx={{fontFamily: 'Manrope', fontSize: '24px',  paddingTop: '18px'}}>Q: Will the ceremony be indoors or outdoors? </Typography>
        <Typography  sx={{fontFamily: 'Manrope', fontSize: '24px'}}>A: Our ceremony and cocktail hour will be hosted outdoors followed by a reception indoors. </Typography>
        </Box>
        </Box>

    )
}

export default FAQPage;