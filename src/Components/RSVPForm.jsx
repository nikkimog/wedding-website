import React, { useState } from "react";
import {
  Box,
  TextField,
  RadioGroup,
  Button,
  Typography,
  FormControl,
  Radio,
  FormLabel,
  FormControlLabel,
} from "@mui/material";
import { supabase } from "../App";

const RSVPForm = ({ guests, formSubmitted }) => {
  const guestOne = guests[0];
  const guestTwo = guests[1];
  const guestThree = guests[2];
  const guestFour = guests[3];
  const guestFive = guests[4]
  const [guestOneRSVP, setGuestOneRSVP] = React.useState(null);
  const [guestTwoRSVP, setGuestTwoRSVP] = React.useState(null);
  const [guestThreeRSVP, setGuestThreeRSVP] = React.useState(null);
  const [guestFourRSVP, setGuestFourRSVP] = React.useState(null);
  const [guestFiveRSVP, setGuestFiveRSVP] = React.useState(null);


  const [RSVPMessage, setRSVPMessage] = useState("");

  const handleGuestOneChange = (event) => {
    setGuestOneRSVP(event.target.value);
  };

  const handleGuestTwoChange = (event) => {
    setGuestTwoRSVP(event.target.value);
  };
  const handleGuestThreeChange = (event) => {
    setGuestThreeRSVP(event.target.value);
  };
  const handleGuestFourChange = (event) => {
    setGuestFourRSVP(event.target.value);
  };
  const handleGuestFiveChange = (event) => {
    setGuestFiveRSVP(event.target.value);
  };
  const sendRSVP = async () => {
    formSubmitted();
    const { error } = await supabase
      .from("guests")
      .update({
        RSVPstatus: guestOneRSVP,
        haveRSVPd: true,
        messageForCouple: RSVPMessage,
      })
      .eq("id", guestOne.id);

    if (guestTwo) {
      const { error } = await supabase
        .from("guests")
        .update({
          RSVPstatus: guestTwoRSVP,
          haveRSVPd: true,
          messageForCouple: RSVPMessage,
        })
        .eq("id", guestTwo.id);
    }
  };

  console.log("guestOneRSVP", guestOneRSVP);

  return (
    <>
      <Box sx={{ display: "flex", flexDirection: "column", padding: "50px" }}>
        <Box key={guestOne.name} sx={{ padding: ".5rem 0" }}>
          <Typography
            sx={{ display: "flex", fontFamily: "Manrope", fontSize: "20px" }}
          >
            {" "}
            Hi, {guestOne.name} - {guestOne.description}{" "}
          </Typography>
        </Box>
        <Box sx={{ display: "flex" }}>
          <FormControl>
            <FormLabel id="demo-controlled-radio-buttons-group">
              <Typography
                sx={{ fontFamily: "Manrope", color: "black", fontSize: "20px" }}
              >
                {" "}
                Will you be attending?{" "}
              </Typography>
            </FormLabel>
            <RadioGroup
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
              value={guestOneRSVP}
              onChange={handleGuestOneChange}
            >
              <FormControlLabel
                value="Will attend"
                control={<Radio />}
                label="Yes"
              />
              <FormControlLabel
                value="Will not attend"
                control={<Radio />}
                label="No"
              />
            </RadioGroup>
          </FormControl>
        </Box>
        {guestTwo && (
          <>
            <Box
              key={guestTwo.name}
              sx={{ padding: ".5rem 0", marginTop: "1rem" }}
            >
              <Typography
                sx={{
                  display: "flex",
                  fontFamily: "Manrope",
                  fontSize: "20px",
                }}
              >
                {" "}
                Hi, {guestTwo.name} - {guestTwo.description}{" "}
              </Typography>
            </Box>
            <Box sx={{ display: "flex" }}>
              <FormControl>
                <FormLabel id="demo-controlled-radio-buttons-group">
                  <Typography
                    sx={{
                      fontFamily: "Manrope",
                      color: "black",
                      fontSize: "20px",
                    }}
                  >
                    Will you be attending?
                  </Typography>
                </FormLabel>
                <RadioGroup
                  aria-labelledby="demo-controlled-radio-buttons-group"
                  name="controlled-radio-buttons-group"
                  value={guestTwoRSVP}
                  onChange={handleGuestTwoChange}
                >
                  <FormControlLabel
                    value="Will attend"
                    control={<Radio />}
                    sx={{ fontSize: "20px" }}
                    label="Yes"
                  />
                  <FormControlLabel
                    value="Will not attend"
                    control={<Radio />}
                    sx={{ fontSize: "20px" }}
                    label="No"
                  />
                </RadioGroup>
              </FormControl>
            </Box>
          </>
        )}
        {guestThree && (
          <>
            <Box
              key={guestThree.name}
              sx={{ padding: ".5rem 0", marginTop: "1rem" }}
            >
              <Typography
                sx={{
                  display: "flex",
                  fontFamily: "Manrope",
                  fontSize: "20px",
                }}
              >
                {" "}
                Hi, {guestThree.name} - {guestThree.description}{" "}
              </Typography>
            </Box>
            <Box sx={{ display: "flex" }}>
              <FormControl>
                <FormLabel id="demo-controlled-radio-buttons-group">
                  <Typography
                    sx={{
                      fontFamily: "Manrope",
                      color: "black",
                      fontSize: "20px",
                    }}
                  >
                    Will you be attending?
                  </Typography>
                </FormLabel>
                <RadioGroup
                  aria-labelledby="demo-controlled-radio-buttons-group"
                  name="controlled-radio-buttons-group"
                  value={guestThreeRSVP}
                  onChange={handleGuestThreeChange}
                >
                  <FormControlLabel
                    value="Will attend"
                    control={<Radio />}
                    sx={{ fontSize: "20px" }}
                    label="Yes"
                  />
                  <FormControlLabel
                    value="Will not attend"
                    control={<Radio />}
                    sx={{ fontSize: "20px" }}
                    label="No"
                  />
                </RadioGroup>
              </FormControl>
            </Box>
          </>
        )}
        {guestFour && (
          <>
            <Box
              key={guestFour.name}
              sx={{ padding: ".5rem 0", marginTop: "1rem" }}
            >
              <Typography
                sx={{
                  display: "flex",
                  fontFamily: "Manrope",
                  fontSize: "20px",
                }}
              >
                {" "}
                Hi, {guestFour.name} - {guestFour.description}{" "}
              </Typography>
            </Box>
            <Box sx={{ display: "flex" }}>
              <FormControl>
                <FormLabel id="demo-controlled-radio-buttons-group">
                  <Typography
                    sx={{
                      fontFamily: "Manrope",
                      color: "black",
                      fontSize: "20px",
                    }}
                  >
                    Will you be attending?
                  </Typography>
                </FormLabel>
                <RadioGroup
                  aria-labelledby="demo-controlled-radio-buttons-group"
                  name="controlled-radio-buttons-group"
                  value={guestFourRSVP}
                  onChange={handleGuestFourChange}
                >
                  <FormControlLabel
                    value="Will attend"
                    control={<Radio />}
                    sx={{ fontSize: "20px" }}
                    label="Yes"
                  />
                  <FormControlLabel
                    value="Will not attend"
                    control={<Radio />}
                    sx={{ fontSize: "20px" }}
                    label="No"
                  />
                </RadioGroup>
              </FormControl>
            </Box>
          </>
        )}
                        {guestFive && (
          <>
          <Box key={guestFive.name} sx={{ padding: ".5rem 0", marginTop: '1rem' }}>
          <Typography sx={{display: 'flex', fontFamily: 'Manrope', fontSize: '20px'}}>
            {" "}
            Hi, {guestFive.name} - {guestFive.description}{" "}
          </Typography>
        </Box>
            <Box sx={{ display: "flex"}}>
              <FormControl>
                <FormLabel id="demo-controlled-radio-buttons-group">
                  <Typography sx={{fontFamily: 'Manrope', color: 'black', fontSize: '20px' }}>Will you be attending?</Typography>
                </FormLabel>
                <RadioGroup
                  aria-labelledby="demo-controlled-radio-buttons-group"
                  name="controlled-radio-buttons-group"
                  value={guestFiveRSVP}
                  onChange={handleGuestFiveChange}
                >
                  <FormControlLabel
                    value="Will attend"
                    control={<Radio />}
                    sx={{fontSize: '20px'}}
                    label="Yes"
                  />
                  <FormControlLabel
                    value="Will not attend"
                    control={<Radio />}
                    sx={{fontSize: '20px'}}
                    label="No"
                  />
                </RadioGroup>
              </FormControl>
            </Box>
          </>
        )}
        <Typography
          sx={{
            display: "flex",
            alignItems: "end",
            padding: "1rem 0",
            fontFamily: "Manrope",
            fontSize: "20px",
          }}
        >
          Message for the couple{" "}
          <Typography sx={{ fontSize: "12px", padding: ".25rem" }}>
            (optional)
          </Typography>
        </Typography>

        <TextField
          multiline
          minRows={2}
          sx={{ width: "350px" }}
          onChange={(e) => setRSVPMessage(e.target.value)}
        ></TextField>
        <Button
          sx={{ width: "25%", margin: ".5rem 0" }}
          variant="contained"
          onClick={() => {
            sendRSVP();
          }}
        >
          submit
        </Button>
      </Box>
    </>
  );
};

export default RSVPForm;
