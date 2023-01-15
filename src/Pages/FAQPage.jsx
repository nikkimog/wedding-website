import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react'
import FAQAccordion from '../Components/FAQAccordion';

const FAQPage = () => {

    return (
        <Box style={{ height: '100%', width: '80%', margin: 'auto'}}>
            <Typography style={{ margin: '3rem'}}>Frequently Asked Questions </Typography>
            <FAQAccordion question={'What should I wear?'} answer={' First off, great question. Keeping in mind the warm nature of the month of February, wear something that you feel good in! I /> have a personal distaste for flip flops, so please avoid those. Otherwise, have fun and look good 😎'} />
            <FAQAccordion question={'Wait - what will the weather be?'} answer={'February is the end of summer in South Africa. The weather will range from 60 degrees F to 80 degrees F with a light breeze. Hopefully it will be absolutely beautiful!'} />
            <FAQAccordion question={'Can I bring kids?'} answer={'idk yet'} />
      </Box>
    )
}

export default FAQPage;