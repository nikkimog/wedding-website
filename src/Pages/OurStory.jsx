import { Typography, Button, Grid, Box } from "@mui/material";
import React from "react";
import { SectionBox } from "../Components/SectionBox";

const OurStory = () => {
  // const mobile = useMediaQuery("(max-width:600px)");
  const [readMore, setReadMore] = React.useState(false);

  return (
    <SectionBox id="ourstory" title="Our Story">
      <Box sx={{ display: "none" }}>Nikki Mogensen and Kai Bastos</Box>
      <Typography sx={{ fontFamily: "Lato", paddingBottom: "5px" }}>
        {" "}
        Nikki was at Linda's (the famed bar and grill in Chapel Hill) the night
        she met Kai.
        <Button onClick={() => setReadMore(!readMore)}>
          {!readMore ? "See More..." : "See Less..."}
        </Button>
        {readMore && (
          <>
            <Typography sx={{ fontFamily: "Lato", marginBottom: "10px" }}>
              In honor of Linda’s, they named their sweet golden retriever after
              the bar where they enjoyed cheese fries. Nikki and Kai took to
              each other quickly and after a few months they planned a trip to
              Cape Town, South Africa. Kai got to introduce Nikki to his family
              and they both got to explore Kai's hometown. After that visit,
              Nikki knew she wanted to marry Kai in South Africa. She was taken
              by the beautiful country and wanted to be able to share this
              experience with all of her loved ones. After Nikki and Kai had
              finished graduate school, they moved to Charlotte and were able to
              spend time closer to Nikki’s family. They also got to spend time
              with Cody, Nikki’s late brother, in the last year of his life.
            </Typography>
            <Typography sx={{ fontFamily: "Lato", marginBottom: "10px" }}>
              In 2022, a job opportunity brought them to San Francisco, where
              they're continuing to grow together and love living in a big city
              with lots of parks for Linda. They've had an eventful six years
              together and are so excited to celebrate their marriage with their
              friends and family in South Africa - the start to the rest of
              their lives together!
            </Typography>
          </>
        )}
      </Typography>
      {/* // use css grid */}
      <Grid container spacing={0}>
        <Grid item md={6} xs={12}>
          {/* <Box> */}
          <img
            style={{
              maxWidth: "100%",
              width: "100%",
              height: "100%",
              padding: 0,
              margin: 0,
            }}
            src="https://i.ibb.co/MkhCp1X/photoOne.jpg"
            alt="kai and nikki in south africa"
          />
          {/* </Box> */}
        </Grid>
        <Grid item md={6} xs={12}>
          {/* <Box> */}
          <img
            style={{
              maxWidth: "100%",
              width: "100%",
              height: "100%",
              padding: 0,
              margin: 0,
            }}
            src="https://i.ibb.co/4pFdRXS/charlotte.jpg"
            alt="charlotte"
          />
          {/* </Box> */}
        </Grid>
        <Grid item md={4} xs={12}>
          <img
            style={{
              maxWidth: "100%",
              width: "100%",

              height: "100%",
              padding: 0,
              margin: 0,
            }}
            src="https://i.ibb.co/z4NZ7QB/photoTwo.jpg"
            alt="photoTwo"
          />
        </Grid>
        <Grid item md={4} xs={12}>
          <img
            style={{
              maxWidth: "100%",
              width: "100%",

              height: "100%",
              padding: 0,
              margin: 0,
            }}
            src="https://i.ibb.co/y8GCZxH/kaiphd.jpg"
            alt="kaiphd"
            border="0"
          />
        </Grid>
        <Grid item md={4} xs={12}>
          <img
            style={{
              maxWidth: "100%",
              width: "100%",

              height: "100%",
              padding: 0,
              margin: 0,
            }}
            src="https://i.ibb.co/ScskrB5/sfsunset.jpg"
            alt="sfsunset"
          />
        </Grid>
      </Grid>

      {/* <Box
        sx={{
          display: "grid",
          gridTemplateRows: "auto auto", // Two rows
          gap: "10px", // Adjust the gap as per your preference
        }}
      >
        <Box sx={{ border: "1px solid black" }}>
          <img
            src="https://i.ibb.co/MkhCp1X/photoOne.jpg"
            alt="kai and nikki in south africa"
          />
        </Box>
        <Box sx={{ border: "1px solid black" }}>
          <img
            src="https://i.ibb.co/4pFdRXS/charlotte.jpg"
            alt="charlotte"
            border="0"
          />
        </Box>
        <Box sx={{ border: "1px solid black" }}>
          <img src="https://i.ibb.co/z4NZ7QB/photoTwo.jpg" alt="photoTwo" />
        </Box>
        <Box sx={{ border: "1px solid black" }}>
          <img
            src="https://i.ibb.co/y8GCZxH/kaiphd.jpg"
            alt="kaiphd"
            border="0"
          />
        </Box>
        <Box sx={{ border: "1px solid black" }}>
          <img src="https://i.ibb.co/ScskrB5/sfsunset.jpg" alt="sfsunset" />
        </Box>
      </Box> */}

      {/* export default GridComponent;

      <Box display="flex" sx={{ height: mobile? '250px' : '400px'}}>
      <Box className="photoOne" sx={{ flex: 1}} />
      <Box className="charlotte" sx={{ flex: 1, margin: '0 0 0 10px '}} />


      </Box>
      <Box display="flex" sx={{ height: mobile? '250px' : '500px'}}>

        <Box className="photoTwo" sx={{ flex: 1 }} />
        <Box className="kaiphd" sx={{ flex: 1,  margin: '0 10px' }} />
        <Box className="sfsunset" sx={{ flex: 1 }} />


      </Box> */}
    </SectionBox>
  );
};

export default OurStory;
