import React from "react";
import Restaurants from "../Components/ThingsToDo/Restaurants";
import Winelands from "../Components/ThingsToDo/Winelands";
import Hikes from "../Components/ThingsToDo/Hikes";
import Museums from "../Components/ThingsToDo/Museums";
import { Tabs, Tab, Typography, Box } from "@mui/material";

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Box
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </Box>
  );
}

const ThingsToDoPage = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ paddingTop: "20px" }}>
      <Typography variant="h2" sx={{margin: '20px'}} >Our Cape Town Recommendations</Typography>
      <Box
        sx={(theme)=> ({
          borderBottom: 1,
          borderColor: "divider",
          width: "70%",
          margin: "auto",
          color: theme.palette.secondary.main,
          display: 'flex',
          justifyContent: 'center'
        })}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="tabs for our recommendations"
          scrollButtons
          allowScrollButtonsMobile
          variant="scrollable"
        >
          <Tab label="Hikes and Beautiful Views" {...a11yProps(0)} />
          <Tab label="Restaurants" {...a11yProps(1)} />
          <Tab label="Museums and Historic Attractions" {...a11yProps(2)} />
          <Tab label="Winelands" {...a11yProps(3)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <Hikes />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Restaurants />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Museums />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <Winelands />
      </TabPanel>
    </Box>
  );
};

export default ThingsToDoPage;
