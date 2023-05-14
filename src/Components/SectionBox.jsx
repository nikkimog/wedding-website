import { Box, Typography } from '@mui/material'
import React from 'react'
import { useViewport } from '../ViewportProvider'

export const SectionBox = ({id, title, children}) => {
    const { width } = useViewport()
    const mobileView = width < 680
    return (
        <Box id={id} sx={{ scrollMarginTop: mobileView?  '5vh' : '', height: "100%", margin: mobileView ? "0 60px" : "0 74px", padding: mobileView? '60px 0':"125px 0" }}> 
        <Box sx={{ flex: "1", textAlign: "left" }}>
        <Typography sx={{ fontFamily: "Cardo", fontSize: mobileView? "50px" :  "64px", textAlign: "left", padding: '20px 0' }}>
           {title}
            </Typography>
            {children}
            </Box>
        </Box>
        
    )
}