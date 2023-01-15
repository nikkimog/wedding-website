// https://campcanoe.co.za/about-us/

import React from 'react'
import {Accordion, AccordionSummary, Typography, AccordionDetails} from '@mui/material'
import { ExpandMore } from '@mui/icons-material'


const FAQAccordion = ({ question, answer}) => {
     return (
        <Accordion sx={(theme)=> ({
            backgroundColor: theme.palette.primary.main,
            color: 'white',
          })}>
          <AccordionSummary
            expandIcon={<ExpandMore />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>{question}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography style={{ textAlign: 'left'}}>
                {answer}
            </Typography>
          </AccordionDetails>
        </Accordion>
     )

}

export default FAQAccordion; 