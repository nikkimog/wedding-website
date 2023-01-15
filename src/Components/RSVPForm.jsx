import React, { useState } from "react";
import { Box, TextField, RadioGroup, Button, Typography } from "@mui/material";

const RSVPForm = ({ guests, formSubmitted }) => {
  const guestOne = guests[0];
  const guestTwo = guests[1];
  const sendRSVP = () => {
    formSubmitted();

    fetch(`http://localhost:3001/`, {
      method: 'PATCH',
      body: JSON.stringify({
        id: guestOne.id,
        RSVPResponse: guestOneWillAttend,
        RSVPMessage: RSVPMessage,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8'
        }
    }).then(response => {
        return response.json()
    }).catch(function(error){
        console.log(error)
    })

    // eslint-disable-next-line no-lone-blocks
    {
      guestTwo &&
        fetch(`http://localhost:3001/`, {
          method: "PATCH",
          body: JSON.stringify({
            id: guestTwo.id,
            RSVPResponse: guestTwoWillAttend,
            RSVPMessage: RSVPMessage,
          }),
          headers: {
            'Content-type': 'application/json; charset=UTF-8'
            }
        }).then(response => {
            return response.json()
        }).catch(function(error){
            console.log(error)
        })
    }
  };

  const [guestOneWillAttend, setGuestOneWillAttend] = useState("");
  const [guestTwoWillAttend, setGuestTwoWillAttend] = useState("");
  const [RSVPMessage, setRSVPMessage] = useState("");
  const [noChoiceYetGuestOne, setNoChoiceYetGuestOne] = useState(true);
  const [noChoiceYetGuestTwo, setNoChoiceYetGuestTwo] = useState(true);


  return (
    <>
      <Box sx={{ display: "flex", flexDirection: "column", padding: "50px" }}>
        <Box key={guestOne.name} sx={{ padding: '.5rem'}}>
          <Typography> You must be {guestOne.name}, {guestOne.description} </Typography>
        {/* </Box> */}
        {/* <Box> */}
          <Typography> Let us know below if you'll be able to attend our celebration! </Typography>
        </Box>
        <Box sx={{ display: "flex" }}>
          <RadioGroup sx={{ margin: "auto" }}>
            <Button
              sx={(theme) => ({
                backgroundColor:
                  !noChoiceYetGuestOne && guestOneWillAttend && theme.palette.primary.main,
                color: !noChoiceYetGuestOne && guestOneWillAttend && "white",
                "&:hover": {
                  backgroundColor:
                    guestOneWillAttend && theme.palette.primary.main,
                },
              })}
              onClick={(e) => {
                setGuestOneWillAttend(true);
                setNoChoiceYetGuestOne(false)
              }}
            >
              Will Attend
            </Button>
            <Button
              sx={(theme) => ({
                backgroundColor:
                !noChoiceYetGuestOne && !guestOneWillAttend && theme.palette.primary.main,
                color: !noChoiceYetGuestOne && !guestOneWillAttend && "white",
                "&:hover": {
                  backgroundColor:
                  !noChoiceYetGuestOne && !guestOneWillAttend && theme.palette.primary.main,
                },
              })}
              onClick={(e) => {
                setGuestOneWillAttend(false)
              setNoChoiceYetGuestOne(false)
              }}
            >
              Will Not Attend
            </Button>
          </RadioGroup>
        </Box>
        {/* </Box> */}
        {guestTwo && (
          <Box
            sx={{ display: "flex", flexDirection: "column", padding: "50px" }}
          >
            <Box sx={{padding: '.5rem'}} key={guestTwo.name}>
             <Typography> You must be {guestTwo.name}, {guestTwo.description} </Typography>
              <Typography> Let us know below if you'll be able to attend our celebration! </Typography>
            </Box>
            <Box sx={{ display: "flex" }}>
              <RadioGroup sx={{ margin: "auto" }}>
                <Button
                  sx={(theme) => ({
                    backgroundColor:
                    !noChoiceYetGuestTwo && guestTwoWillAttend && theme.palette.primary.main,
                    color: !noChoiceYetGuestTwo && guestTwoWillAttend && "white",
                    "&:hover": {
                      backgroundColor:
                      !noChoiceYetGuestTwo && guestTwoWillAttend && theme.palette.primary.main,
                    },
                  })}
                  onClick={(e) => {
                    setGuestTwoWillAttend(true);
              setNoChoiceYetGuestTwo(false)

                  }}
                >
                  Will Attend
                </Button>
                <Button
                  sx={(theme) => ({
                    backgroundColor:
                    !noChoiceYetGuestTwo && !guestTwoWillAttend && theme.palette.primary.main,
                    color: !noChoiceYetGuestTwo && !guestTwoWillAttend && "white",
                    "&:hover": {
                      backgroundColor:
                      !noChoiceYetGuestTwo && !guestTwoWillAttend && theme.palette.primary.main,
                    },
                  })}
                  onClick={() => {
                    setGuestTwoWillAttend(false)
              setNoChoiceYetGuestTwo(false)
                  }}

                >
                  Will Not Attend
                </Button>
              </RadioGroup>
            </Box>
          </Box>
        )}
        {guestOne.numOfGuestsInvited > 1 && (
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography>How many guests total?</Typography>
            <TextField sx={{ width: "50px" }}></TextField>
          </Box>
        )}
        <Typography sx={{padding: '1rem'}}>
        Message for the bride and groom:
        </Typography>
        <TextField
          sx={{ width: "50%", margin: "auto" }}
          onChange={(e) => setRSVPMessage(e.target.value)}
        ></TextField>
        <Button
        sx={{ margin: '0 auto'}}
          onClick={() => {
            sendRSVP();

            // setGuestName('')
            // setGuestDescription('')
          }}
        >
          submit
        </Button>
      </Box>
    </>
  );
};

export default RSVPForm;
