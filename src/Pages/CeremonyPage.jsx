import { Typography, useMediaQuery, Link } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { SectionBox } from "../Components/SectionBox";
import { AddToCalendarButton } from "add-to-calendar-button-react";

const CeremonyPage = (theme) => {
  const mobile = useMediaQuery("(max-width:680px)");

  const event = {
    name: "Nikki and Kai's Wedding",
    description: "Time to celebrate Nikki and Kai's marriage in South Africa!",
    startDate: "2024-02-24",
    endDate: "2024-02-24",
    startTime: "16:00",
    endTime: "23:59",
    location: "Tokara Wine Estate, Stellenbosch, South Africa",
    timeZone: "Africa/Johannesburg",
    options: ["Google", "Apple", "Microsoft365", "Yahoo", "Outlook.com"],
    // startTime: '2024-02-24T10:00:00-04:00',
    // endTime: '2024-02-24T10:00:00-11:59'
  };

  return (
    <SectionBox title="Ceremony" id="ceremony">
      <Box sx={{ display: "none" }}>Nikki Mogensen and Kai Bastos</Box>
      <Box
        style={{
          margin: mobile ? "30px 0" : "74px 0",
          display: "flex",
          flexDirection: mobile ? "column" : "row",
        }}
      >
        <Box
          sx={{
            flex: "1",
            textAlign: "left",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <Box>
            <Typography
              sx={{
                margin: "24px 0",
                padding: "10px 0",
                borderBottom: "solid 1px black",
                fontFamily: "Lato",
                width: "90px",
                marginLeft: "5px",
              }}
            >
              Date & Time
            </Typography>
            <Typography
              sx={{
                fontFamily: "Manrope",
                fontSize: mobile ? "18px" : "24px",
                marginLeft: "5px",
              }}
            >
              February 24th, 4:00PM
            </Typography>
            <AddToCalendarButton
              styleLight="--font: Manrope; --btn-shadow: 5px; --btn-background: #FFF9F1"
              hideCheckmark="true"
              listStyle="dropdown-static"
              hideBackground="true"
              size="4|5|5"
              description={event.description}
              options={event.options}
              name={event.name}
              location={event.location}
              startDate={event.startDate}
              endDate={event.endDate}
              startTime={event.startTime}
              endTime={event.endTime}
              timeZone={event.timeZone}
            />
          </Box>
          <Box>
            <Typography
              sx={{
                margin: "24px 0",
                padding: "10px 0",
                borderBottom: "solid 1px black",
                fontFamily: "Lato",
                width: "45px",
                marginLeft: "5px",
              }}
            >
              Venue
            </Typography>
            <Typography
              sx={{
                fontFamily: "Manrope",
                fontSize: mobile ? "18px" : "24px",
                marginLeft: "5px",
              }}
            >
              <Link href="https://www.tokara.com/" target="blank">
                Tokara Wine Estate
              </Link>
            </Typography>
            <Typography
              sx={{
                fontFamily: "Manrope",
                fontSize: mobile ? "18px" : "24px",

                marginLeft: "5px",
              }}
            >
              Stellenbosch, South Africa
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            flex: "1",
            textAlign: "left",
            justifyContent: "space-evenly",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Box>
            <Typography
              sx={{
                margin: "24px 0",
                padding: "10px 0",
                borderBottom: "solid 1px black",
                fontFamily: "Lato",
                width: "72px",
              }}
            >
              Weather
            </Typography>
            <Typography
              sx={{ fontFamily: "Manrope", fontSize: mobile ? "18px" : "24px" }}
            >
              60-80° F with a slight breeze.
            </Typography>
            <Typography
              sx={{ fontFamily: "Manrope", fontSize: mobile ? "18px" : "24px" }}
            >
              It’s the end of summer in South Africa.
            </Typography>
            <Typography
              sx={{ fontFamily: "Manrope", fontSize: mobile ? "18px" : "24px" }}
            >
              We're expecting beautiful weather!
            </Typography>
          </Box>
          <Box>
            <Typography
              sx={{
                margin: "24px 0",
                padding: "10px 0",
                borderBottom: "solid 1px black",
                fontFamily: "Lato",
                width: "90px",
              }}
            >
              Dress Code
            </Typography>
            <Typography
              sx={{ fontFamily: "Manrope", fontSize: mobile ? "18px" : "24px" }}
            >
              Cocktail
            </Typography>
          </Box>
        </Box>
      </Box>
    </SectionBox>
  );
};

export default CeremonyPage;
