import React, { useEffect, useState } from "react";
import {
  Typography,
  Box,
  Button,
  TextField,
  //   RadioGroup,
  useMediaQuery,
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
  const [error] = useState("");
  const [open, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState("success");
  const [submitted, setSubmitted] = useState(false)
  const mobile = useMediaQuery("(max-width:600px)");

  const formSubmitted = () => {
    setSubmitted(true)
  };




  const handleClose = () => {
    setOpenSnackbar(false);
  };

  const findGuest1 = async () => {
    let { data: initialGuest, error } = await supabase
      .from("guests")
      .select()
      .select("*")
      .ilike("name", guestName)
      .order("id", { ascending: false });


    if (error){
      setOpenSnackbar(true)
      setSnackbarMessage('Server error! Please try again or contact Nikki or Kai.')
      setSnackbarSeverity('error')
    } 
    if (!initialGuest.length){
      setAttemptMade(true)
    } else { 
      getAllGuests(initialGuest)
    }

  };

    const getAllGuests = async (initialGuest) => {
      if (initialGuest[0]?.coupleId) {
        let { data: allGuests, error } = await supabase
          .from("guests")
          .select()
          .select("*")
          .eq("coupleId", initialGuest[0].coupleId)
          .order("id", { ascending: true });

     
        if (error) {
          setOpenSnackbar(true)
          setSnackbarMessage('Server error! Please try again or contact Nikki or Kai.')
          setSnackbarSeverity('error')
        } else setGuests(allGuests);
      } else { 
        setGuests(initialGuest)
      }

      if (initialGuest[0]?.name) {
        setFoundGuest(true);
        setAttemptMade(true)
      } else if (initialGuest[0]){ 
        setAttemptMade(true)
      }
    
    };

  return (
    <Box
      sx={{
        height: "100%",
        paddingTop: "30px",
        display: "flex",
        flexDirection: mobile ? "column" : "row",
        margin: "auto",
      }}
    >
      <Box sx={{ flex: 1.5, paddingLeft: "5%" }}>
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
        {attemptMade && !foundGuest && !submitted && 
          <>

            <>
            <Typography>hi{submitted}{attemptMade}</Typography>
            <Typography sx={{display: 'flex', fontFamily: 'Manrope', fontSize: '20px', padding: '50px'}}>
            {" "}
            Gee willikers - I cant find your name! Would you mind searching again (and make sure
            you use your first and last name)? If it still is not working, email
              nicolerosemogensen at gmail dot com and I (Nikki) will sort it
              out!
   
          </Typography>
              
            </>
            <Button
                onClick={() => {
                  setFoundGuest(false);
                  setGuests([]);
                  setAttemptMade(false);
                }}
                variant="contained"
              >
                Search Again
              </Button>
          </>
        }
        {!foundGuest && !attemptMade && (
          <Box>
            <Box>
              <Typography
                sx={{
                  fontFamily: "Cardo",
                  fontSize: "64px",
                  textAlign: "left",
                }}
              >
                RSVP
              </Typography>
            </Box>
            <Typography
              variant="h5"
              sx={{ padding: "20px 0", textAlign: "left", marginTop: "50px" }}
            >
              First and Last Name
            </Typography>
            <Box style={{ display: "flex", width: "65%" }}>
              <TextField
                size="small"
                sx={{ width: "90%" }}
                onChange={(e) => setGuestName(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    findGuest1();
                  }
                }}
              ></TextField>
              <Button
                variant="contained"
                sx={{ margin: "0 5px" }}
                onClick={(e) => {
                  findGuest1();
                }}
              >
                Search
              </Button>
            </Box>
          </Box>
        )}
        {foundGuest && !error && !submitted && (
          <>
            <RSVPForm guests={guests} formSubmitted={formSubmitted} />

            <Typography
              sx={{ fontSize: "20px", display: "flex", padding: "0 50px 30px 50px" }}
            >
              Not you?
              <Button
                onClick={() => {
                  setFoundGuest(false);
                  setGuests([]);
                  setAttemptMade(false);
                }}
              >
                Search Again
              </Button>
            </Typography>
          </>
        )}
              {submitted &&
      <Box display="flex" sx={{justifyContent: 'center', marginTop: '50px'}}>
        <Typography sx={{fontFamily: 'Manrope', fontSize: '20px'}}>Thank you for RSVPing!</Typography>
         </Box>
        }
      </Box>

      <Box className="rsvpPhoto" sx={{ flex: 1 }} />
    </Box>
  );
};

export default RSVPPage;
