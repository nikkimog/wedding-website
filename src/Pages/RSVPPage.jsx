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
  const [initialGuest, setInitialGuest] = useState([]);
  const mobile = useMediaQuery("(max-width:600px)");

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
    let { data: initialGuest, error } = await supabase
      .from("guests")
      .select()
      .select("*")
      .ilike("name", guestName)
      .order("id", { ascending: false });

    console.log("guestsInitially", initialGuest);

    if (error) console.log("error", error);
    else setInitialGuest(initialGuest);

    // if (guests[0]?.name) {
    //           setFoundGuest(true);
    //         }
    // console.log("guests", guests);
  };

  useEffect(() => {
    const getAllGuests = async () => {
      console.log("initialGuestingetallguests", initialGuest)
      if (initialGuest[0]?.coupleId) {
        console.log("am i in here");
        let { data: allGuests, error } = await supabase
          .from("guests")
          .select()
          .select("*")
          .eq("coupleId", initialGuest[0].coupleId)
          .order("id", { ascending: false });

        console.log("allGuests", allGuests);
     
        if (error) console.log("error", error);
        else setGuests(allGuests);
      } else { 
        setGuests(initialGuest)
      }
      console.log('guests', guests)

      if (initialGuest[0]?.name) {
        setFoundGuest(true);
      } else { 
        setAttemptMade(true)
      }
    
    };
    getAllGuests();


   

    console.log("guests", guests);

  }, [initialGuest, error]);


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
        {attemptMade && !foundGuest && (
          <>
            <>
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
        )}
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
        {foundGuest && !error && (
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
      </Box>
      <Box className="rsvpPhoto" sx={{ flex: 1 }} />
    </Box>
  );
};

export default RSVPPage;
