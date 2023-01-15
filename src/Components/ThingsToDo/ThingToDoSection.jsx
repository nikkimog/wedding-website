import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import ThingToDoTile from './thingToDoTile'

const ThingToDoSection = ({ data, sectionTitle }) => {
    return (
        <>
        <Typography variant="h3" sx={{margin: '20px'}}>{sectionTitle}</Typography>
        <Box sx={{display: 'flex', flexWrap: 'wrap', gap: '20px', width: '80%', margin: 'auto', justifyContent: 'center'}}>
       
       {data.map((item)=>{
          return <ThingToDoTile key={item.id} name={item.name} description={item.description} photoURL={item.photoURL} />
       })}
       </Box>
       </>
    )

}

export default ThingToDoSection; 