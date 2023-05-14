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
  Snackbar,
  Alert
} from "@mui/material";
import { supabase } from "../App";
import emailjs from 'emailjs-com'

const RSVPForm = ({ guests, formSubmitted }) => {
  const guestOne = guests[0] 
  const guestTwo = guests[1] 
  const guestThree = guests[2] 
  const guestFour = guests[3]   
  const guestFive = guests[4] 
  const [guestOneRSVP, setGuestOneRSVP] = useState(guestOne?.RSVPstatus || null);
  const [guestOneDiet, setGuestOneDiet] = useState(guestOne?.dietary_restrictions || '');
  const [guestTwoRSVP, setGuestTwoRSVP] = useState(guestTwo?.RSVPstatus || null);
  const [guestTwoDiet, setGuestTwoDiet] = useState(guestTwo?.dietary_restrictions || '');
  const [guestThreeRSVP, setGuestThreeRSVP] = useState(guestThree?.RSVPstatus || null);
  const [guestThreeDiet, setGuestThreeDiet] = useState(guestThree?.dietary_restrictions || '');
  const [guestFourRSVP, setGuestFourRSVP] = useState(guestFour?.RSVPstatus || null);
  const [guestFourDiet, setGuestFourDiet] = useState(guestFour?.dietary_restrictions || '');
  const [guestFiveRSVP, setGuestFiveRSVP] = useState(guestFive?.RSVPstatus || null);
  const [guestFiveDiet, setGuestFiveDiet] = useState(guestFive?.dietary_restrictions || '');
  // const [emailAddress, setEmailAddress] = useState(null)

  const [, setSubmitted] = useState(false)

  const [RSVPMessage, setRSVPMessage] = useState(guestOne?.messageForCouple || "");
  const [open, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState("success");

  emailjs.init("XJfBga4GxpPOnGycs");

  const handleClose = () => {
    setOpenSnackbar(false);
  };
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
    let submissionError = false
    const { error } = await supabase
      .from("guests")
      .update({
        RSVPstatus: guestOneRSVP,
        haveRSVPd: true,
        messageForCouple: RSVPMessage,
        dietary_restrictions: guestOneDiet
      })
      .eq("id", guestOne.id);
      if (error){
        submissionError = true
      }
      console.log('error', error)

    if (guestTwo) {
      const { error } = await supabase
        .from("guests")
        .update({
          RSVPstatus: guestTwoRSVP,
          haveRSVPd: true,
          messageForCouple: RSVPMessage,
          dietary_restrictions: guestTwoDiet
        })
        .eq("id", guestTwo.id);
        if (error){
        submissionError = true
        }
    }
    if (guestThree) {
      const { error } = await supabase
        .from("guests")
        .update({
          RSVPstatus: guestThreeRSVP,
          haveRSVPd: true,
          messageForCouple: RSVPMessage,
          dietary_restrictions: guestThreeDiet
        })
        .eq("id", guestThree.id);
        if (error){
        submissionError = true
        }
    }
    if (guestFour) {
      const { error } = await supabase
        .from("guests")
        .update({
          RSVPstatus: guestFourRSVP,
          haveRSVPd: true,
          messageForCouple: RSVPMessage,
          dietary_restrictions: guestFourDiet
        })
        .eq("id", guestFour.id);
        if (error){
        submissionError = true
        }
    }
    if (guestFive) {
      const { error } = await supabase
        .from("guests")
        .update({
          RSVPstatus: guestFiveRSVP,
          haveRSVPd: true,
          messageForCouple: RSVPMessage,
          dietary_restrictions: guestFiveDiet
        })
        .eq("id", guestFive.id);
        if (error){
        submissionError = true
        }
    }

    if (!submissionError){
      const message = `
        guestOne: ${guestOne.name} said ${guestOneRSVP},
        guestTwo: ${guestTwo.name} said ${guestTwoRSVP},
        guestThree: ${guestThree.name} said ${guestThreeRSVP},
        guestFour:  ${guestFour.name} said ${guestFourRSVP},
        guestFive: ${guestFive.name} said ${guestFiveRSVP},
        message: ${RSVPMessage}
      `
      const templateParams= {  message: message}
      try { 
        await emailjs.send('service_a342ldn', 'template_q3uhh5m', templateParams)
      } catch (error) {
        console.log('error', error)}
      formSubmitted()
      setSubmitted(true)
    } else { 
      setOpenSnackbar(true)
      setSnackbarMessage('Server error! Please try again or contact Nikki or Kai.')
      setSnackbarSeverity('error')
    }
  };


  return (
    <>
      <Box sx={{ display: "flex", flexDirection: "column", padding: "50px", textAlign: 'left' }}>
        <>
        <Snackbar
          open={open}
          anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        >
          <Alert
            variant="filled"
            severity={snackbarSeverity}
            onClose={handleClose}
          >
            {snackbarMessage}
          </Alert>
        </Snackbar>
        {guestOne.RSVPstatus && <Box>
          <Typography sx={{fontFamily: 'Manrope', padding: '.75rem 0'}}>You have already RSVP'd. If you need to 
          change your RSVP, update your response and click submit again.
          </Typography>
        </Box>}
        <Box key={guestOne.name} sx={{ padding: ".5rem 0" }}>
          <Typography
            sx={{ display: "flex", fontFamily: "Manrope", fontSize: "20px" }}
          >
            {" "}
            Hi, {guestOne.name}!{" "}
          </Typography>
        </Box>
        <Box sx={{ display: "flex" }}>
          <FormControl>
            <FormLabel id="demo-controlled-radio-buttons-group">
              <Typography
                sx={{ fontFamily: "Manrope", color: "black", fontSize: "16px" }}
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
            <Typography sx={{fontFamily: 'Manrope', color: 'black', fontSize: '16px', margin: '5px 0'}}>Any dietary restrictions?</Typography>
            <TextField 
            value={guestOneDiet}
          onChange={(e) => setGuestOneDiet(e.target.value)}/>
            
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
                Hi, {guestTwo.name}!{" "}
              </Typography>
            </Box>
            <Box sx={{ display: "flex" }}>
              <FormControl>
                <FormLabel id="demo-controlled-radio-buttons-group">
                  <Typography
                    sx={{
                      fontFamily: "Manrope",
                      color: "black",
                      fontSize: "16px",
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
                <Typography sx={{fontFamily: 'Manrope', color: 'black', fontSize: '16px', margin: '5px 0'}}>Any dietary restrictions?</Typography>
            <TextField 
            value={guestTwoDiet}
          onChange={(e) => setGuestTwoDiet(e.target.value)}/>
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
                Hi, {guestThree.name}!{" "}
              </Typography>
            </Box>
            <Box sx={{ display: "flex" }}>
              <FormControl>
                <FormLabel id="demo-controlled-radio-buttons-group">
                  <Typography
                    sx={{
                      fontFamily: "Manrope",
                      color: "black",
                      fontSize: "16px",
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
                <Typography sx={{fontFamily: 'Manrope', color: 'black', fontSize: '16px', margin: '5px 0'}}>Any dietary restrictions?</Typography>
            <TextField 
            value={guestThreeDiet}
          onChange={(e) => setGuestThreeDiet(e.target.value)}/>
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
                Hi, {guestFour.name}!{" "}
              </Typography>
            </Box>
            <Box sx={{ display: "flex" }}>
              <FormControl>
                <FormLabel id="demo-controlled-radio-buttons-group">
                  <Typography
                    sx={{
                      fontFamily: "Manrope",
                      color: "black",
                      fontSize: "16px",
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
                <Typography sx={{fontFamily: 'Manrope', color: 'black', fontSize: '16px', margin: '5px 0'}}>Any dietary restrictions?</Typography>
            <TextField 
            value={guestFourDiet}
          onChange={(e) => setGuestFourDiet(e.target.value)}/>
              </FormControl>
            </Box>
          </>
        )}
        {guestFive && (
          <>
          <Box key={guestFive.name} sx={{ padding: ".5rem 0", marginTop: '1rem' }}>
          <Typography sx={{display: 'flex', fontFamily: 'Manrope', fontSize: '20px'}}>
            {" "}
            Hi, {guestFive.name}!{" "}
          </Typography>
        </Box>
            <Box sx={{ display: "flex"}}>
              <FormControl>
                <FormLabel id="demo-controlled-radio-buttons-group">
                  <Typography sx={{fontFamily: 'Manrope', color: 'black', fontSize: '16px' }}>Will you be attending?</Typography>
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
                <Typography sx={{fontFamily: 'Manrope', color: 'black', fontSize: '16px', margin: '5px 0'}}>Any dietary restrictions?</Typography>
            <TextField 
            value={guestFiveDiet}
          onChange={(e) => setGuestFiveDiet(e.target.value)}/>
              </FormControl>
            </Box>
          </>
        )}
        
        <Typography
          sx={{
            display: "flex",
            alignItems: "end",
            padding: "1rem 0 5px 0",
            fontFamily: "Manrope",
            fontSize: "16px",
          }}
        >
          Message for the couple{" "}
          {/* <Typography sx={{ fontSize: "12px", padding: ".25rem" }}>
            (optional)
          </Typography> */}
        </Typography>

        <TextField
          multiline
          minRows={2}
          sx={{ width: "350px" }}
          value={RSVPMessage}
          onChange={(e) => setRSVPMessage(e.target.value)}
        ></TextField>
        {/* <Typography
          sx={{
            display: "flex",
            alignItems: "end",
            padding: "1rem 0",
            fontFamily: "Manrope",
            fontSize: "16px",
          }}
        >If you'd like a copy of your responses, enter your email below.</Typography>
        <TextField sx={{width: '350px'}} value={emailAddress} onChange={(e) => setEmailAddress(e.target.value)} /> */}
        <Button
          sx={{ width: "25%", margin: ".5rem 0" }}
          variant="contained"
          onClick={() => {
            sendRSVP();
          }}
        >
          submit
        </Button>
        </>
      </Box>
    </>
  );
};

export default RSVPForm;
