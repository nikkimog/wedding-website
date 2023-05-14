import { Typography, useMediaQuery} from '@mui/material';
import React from 'react'
import { SectionBox} from '../Components/SectionBox'

const FAQPage = () => {
  const mobile = useMediaQuery("(max-width:600px)");

  const questionFontSize = !mobile ? '24px' : '18px'
  const answerFontSize = !mobile ? '20px' : '16px'


    return (

        <SectionBox title="FAQ" id="faq" >
        <Typography  sx={{fontFamily: 'Manrope', fontSize: questionFontSize }}>Q: What should I wear? </Typography>
        <Typography  sx={{fontFamily: 'Manrope', fontSize: answerFontSize}}>A: Cocktail attire.  </Typography>
        <Typography  sx={{fontFamily: 'Manrope', fontSize: questionFontSize, paddingTop: '18px' }}>Q: How far is Stellenbosch from Cape Town? </Typography>
        <Typography  sx={{fontFamily: 'Manrope', fontSize: answerFontSize}}>A: 60km or ~ 40 miles.  </Typography>
        <Typography  sx={{fontFamily: 'Manrope', fontSize: questionFontSize, paddingTop: '18px'}}>Q: What will the weather be?</Typography>
        <Typography  sx={{fontFamily: 'Manrope', fontSize: answerFontSize}}>A: February is the end of summer in South Africa. The weather will range from 60 degrees F to 80 degrees F with a light breeze.</Typography>
        <Typography  sx={{fontFamily: 'Manrope', fontSize: questionFontSize,  paddingTop: '18px'}}>Q: Will the ceremony be indoors or outdoors? </Typography>
        <Typography  sx={{fontFamily: 'Manrope', fontSize: answerFontSize}}>A: Our ceremony and cocktail hour will be hosted outdoors followed by a reception indoors. </Typography>
        <Typography  sx={{fontFamily: 'Manrope', fontSize: questionFontSize, paddingTop: '18px'}}>Q: When should we arrive?</Typography>
        <Typography  sx={{fontFamily: 'Manrope', fontSize: answerFontSize}}>A: Of course this depends on your plans once you're in South Africa, but we suggest getting there at least a few days early to recover from jetlag. We'll be there starting Februrary 15th and will look forward to seeing anyone that plans on arriving early. </Typography>
        <Typography  sx={{fontFamily: 'Manrope', fontSize: questionFontSize,  paddingTop: '18px'}}>Q: What should we do in South Africa while we're there? </Typography>
        <Typography  sx={{fontFamily: 'Manrope', fontSize: answerFontSize}}>A: We have a list of recommended activities and restaurants under the Lodging section in our website. 
        If you're staying in South Africa longer, we recommend checking out the bush and going on safari! Feel free to reach out to us directly 
        if you have any questions about planning your trip. We're so excited you're coming! </Typography>
        <Typography  sx={{fontFamily: 'Manrope', fontSize: questionFontSize,  paddingTop: '18px'}}>Q: I've never been to South Africa - what do I need to know? </Typography>
        <Typography  sx={{fontFamily: 'Manrope', fontSize: answerFontSize}}>A: We recommend reading some travel tips from (add good travel blog) which does a great job of touching
        on some good information to know before heading to South Africa. </Typography>
        <Typography  sx={{fontFamily: 'Manrope', fontSize: questionFontSize,  paddingTop: '18px'}}>Q: What is load shedding? </Typography>
        <Typography  sx={{fontFamily: 'Manrope', fontSize: answerFontSize}}>A: Due to infrastructure challenges in South Africa, there are periods where the power will be turned off for a few hours at a time. Many tourist areas are exempt and many others have generators. 
        If you have a need for constant power, please ensure the place you're staying will be equipped during load shedding. </Typography>
        {/* </Box> */}
        </SectionBox>

    )
}

export default FAQPage;