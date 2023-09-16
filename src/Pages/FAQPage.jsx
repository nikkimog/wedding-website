import { Typography, useMediaQuery, Link} from '@mui/material';
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
        <Typography  sx={{fontFamily: 'Manrope', fontSize: answerFontSize}}>A: Of course this depends on your plans once you're in South Africa, but we suggest getting there at least a few days early to recover from jetlag. We'll be there starting Februrary 17th and will look forward to seeing anyone that plans on arriving early. </Typography>
        <Typography  sx={{fontFamily: 'Manrope', fontSize: questionFontSize,  paddingTop: '18px'}}>Q: What should we do in South Africa while we're there? </Typography>
        <Typography  sx={{fontFamily: 'Manrope', fontSize: answerFontSize}}>A: We have a list of recommended activities and restaurants under the <Link href="#lodging">Lodging</Link> section in our website. For the week before, we'll have a few scheduled group activities for those who are in town. We'll send an email out to those who are attending about a month before the wedding with details.
        If you'd like to get this information before then, just reach out to Nikki or Kai.
        If you're staying in South Africa longer, we recommend checking out the bush and going on safari! Feel free to reach out to us directly 
        if you have any questions about planning your trip. We're so excited you're coming! </Typography>
        <Typography  sx={{fontFamily: 'Manrope', fontSize: questionFontSize,  paddingTop: '18px'}}>Q: I've never been to South Africa - what do I need to know? </Typography>
        <Typography  sx={{fontFamily: 'Manrope', fontSize: answerFontSize}}>A: We recommend reading about travel in South Africa before you plan your trip. Here are a few good blogs about <Link href="https://www.africaendeavours.com/destinations/south-africa/getting-there-getting-around" target="_blank" sx={{marginLeft: '5px'}}>how to get to South Africa</Link>, <Link href="https://www.kiwi.com/stories/a-travel-guide-to-south-africa/" target="_blank" sx={{marginLeft: '5px'}}>
          what to do when you’re in South Africa</Link>, and 
          <Link href="https://www.nomadicmatt.com/travel-blogs/how-to-stay-safe-in-south-africa/" target="_blank" sx={{marginLeft: '5px'}}>
            tips to stay safe</Link> while visiting. For getting around, we recommend renting a car or utilizing uber. </Typography>
        <Typography  sx={{fontFamily: 'Manrope', fontSize: questionFontSize,  paddingTop: '18px'}}>Q: Do I need to tip in South Africa? </Typography>
        <Typography  sx={{fontFamily: 'Manrope', fontSize: answerFontSize}}>A: Payments and tips are taken at your table, prior to handing your card over or inserting it in the card machine. It is customary to tip 10-15% in South Africa and cash tips are always preferred. We encourage you to tip 20%+ where possible - the exchange rate is in your favor.</Typography>
        <Typography  sx={{fontFamily: 'Manrope', fontSize: questionFontSize,  paddingTop: '18px'}}>Q: What is load shedding? </Typography>
        <Typography  sx={{fontFamily: 'Manrope', fontSize: answerFontSize}}>A: Due to infrastructure challenges in South Africa, there are periods where the power will be turned off for a few hours at a time. Many tourist areas are exempt and many others have generators. 
        If you have a need for constant power, please ensure the place you're staying will be equipped during load shedding. </Typography>
        {/* </Box> */}
        </SectionBox>

    )
}

export default FAQPage;