import React, { useState } from "react";
import {
  Typography,
  Box,
  Button,
  TextField,
//   RadioGroup,
  Snackbar,
  Alert,
} from "@mui/material";
// import { styled } from "@mui/material/styles";
import RSVPForm from "../Components/RSVPForm";
import { supabase } from "../App";

const RSVPPage = () => {
  const [guests, setGuests] = useState([]);
  const [guestName, setGuestName] = useState("");
  const [foundGuest, setFoundGuest] = useState(false);
  const [attemptMade, setAttemptMade] = useState(false);
//   const [guestDescription, setGuestDescription] = useState("");
  const [error, ] = useState("");
  const [open, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState("success");

  const formSubmitted = () => {
    // setFoundGuest(false);
    // setGuests([]);
    setSnackbarMessage("Thanks for RSVPing!");
    setOpenSnackbar(true);
    setSnackbarSeverity("success");
  };

  // const StyledSnackbar = styled((props) => <Snackbar {...props} />)(
  //   ({ theme }) => ({
  //     "& .MuiSnackbar-root": {
  //       top: theme.spacing('100px'),
  //     },
  //   })
  // );

  const handleClose = () => {
    setOpenSnackbar(false);
  };

  const findGuest1 = async () => {
    let { data: guestss, error } = await supabase
        .from("guests").select()
        .select("*")
        .eq("name", guestName)
        .order("id", { ascending: false });
    if (error) console.log("error", error);
    else setGuests(guestss);
    console.log('data', guestss)
    console.log('guests', guests)

};
  const findGuest = () => {
    console.log(guestName);
    // try {
    fetch(`http://localhost:3001/?name=${guestName}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log("data", data);
        setGuests(data);
        // setGuestDescription(data[0].description)
        setAttemptMade(true);

        if (data[0]?.name) {
          setFoundGuest(true);
        }
      })
      .catch(function (error) {
        console.log(error);
        setOpenSnackbar(true);
        setSnackbarSeverity("error");
        setSnackbarMessage(
          "Shoot there is something going awry here. Would you mind reaching out to Nikki or Kai and letting them know?"
        );
        // setError(
        //   "Shoot there is something going awry here. Would you mind reaching out to Nikki or Kai and letting them know?"
        // );
      });
  };

  // use react hook form to handle final submit

  return (
    <Box
      sx={{ height: "100%", paddingTop: "100px", width: "70%", margin: "auto" }}
    >
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
      {attemptMade && !foundGuest && (
        <>
          <div>
            {" "}
            Gee willikers - I cant find your name! Would you mind trying again
            with a different variation? If you still popping up email
            nicolerosemogensen at gmail dot com and I (nikki) will sort it out!
          </div>
          <button
            onClick={() => {
              setAttemptMade(false);
              setOpenSnackbar(false);
            }}
          >
            try again!
          </button>
        </>
      )}
      {!foundGuest && !attemptMade && (
        <Box>
          <Typography variant="h5" sx={{ padding: "20px" }}>
            enter your name below to find your invitation details
          </Typography>
          <Box style={{ display: "flex", justifyContent: "center" }}>
            <TextField
              onChange={(e) => setGuestName(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  findGuest1();
                }
              }}
            ></TextField>
            <Button
              onClick={(e) => {
                findGuest1();
              }}
            >
              Enter
            </Button>
          </Box>
        </Box>
      )}
      {foundGuest && !error && (
        <>
          <RSVPForm guests={guests} formSubmitted={formSubmitted} />

          <Typography>
            Whoops, this isn't me! 
            <Button
              onClick={() => {
                setFoundGuest(false);
                setGuests([]);
                setAttemptMade(false);
              }}
            >
              try again
            </Button>
          </Typography>
        </>
      )}
    </Box>
  );
};

export default RSVPPage;
