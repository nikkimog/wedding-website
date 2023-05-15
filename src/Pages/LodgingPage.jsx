import { Link, Typography, useMediaQuery } from "@mui/material";
import { Box, Stack } from "@mui/system";
import React from "react";
import { SectionBox } from "../Components/SectionBox";

const LodgingPage = (theme) => {
  const mobile = useMediaQuery("(max-width:600px)");
  return (

    <SectionBox title="Cape Town" id="lodging">
      <Box
        style={{
          margin: mobile ? "30px 0" : "74px 0",
          display: "flex",
          flexDirection: mobile ? "column" : "row",
        }}
      >
        <Box sx={{ flex: "1", textAlign: "left" }}>
          <Box>
            <Typography
              sx={{
                margin: "24px 0",
                padding: "10px 0",
                borderBottom: "solid 1px black",
                fontFamily: "Lato",
                width: "125px",
              }}
            >
              The Week Before
            </Typography>
            <Typography sx={{ fontFamily: "Manrope", fontSize: mobile ? '18px' : "24px"}}>
              We will be staying at <Link href="https://dorp.co.za/" target="blank">Dorp</Link> in the Gardens neighborhood the week
              before the wedding and will be booking a room block for anyone
              interested. The neighborhood is walkable to lots of shops and
              restaurants.{" "}
            </Typography>
            <Typography sx={{ fontFamily: "Manrope", fontSize: mobile ? '18px' : "24px"}}>
              Feel free to book anywhere during this week and reach out to us
              with any questions about lodging.
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            flex: "1",
            textAlign: "left",
            display: "flex",
            justifyContent: "space-around",
          }}
        >
          <Box>
            <Typography
              sx={{
                margin: "24px 0",
                padding: "10px 0",
                borderBottom: "solid 1px black",
                fontFamily: "Lato",
                width: "104px",
              }}
            >
              Favorite Spots
            </Typography>
            <Stack>
              <Link
                href="https://www.sanbi.org/gardens/kirstenbosch/"
                target="_blank"
                sx={{ fontFamily: "Manrope", fontSize: "16px", marginY: "12px" }}
              >
                Kirstenbosch National Botanical Garden
              </Link>
              <Link
                href="https://zeitzmocaa.museum"
                target="_blank"
                sx={{ fontFamily: "Manrope", fontSize: "16px", marginY: "12px" }}
              >
                Zeitz Museum of Contemporary Art Africa
              </Link>
              <Link
                href="https://www.robben-island.org.za"
                target="_blank"
                sx={{ fontFamily: "Manrope", fontSize: "16px", marginY: "12px" }}
              >
                Robben Island
              </Link>
              <Link
                href="https://www.iziko.org.za/museums/south-african-museum/"
                target="_blank"
                sx={{ fontFamily: "Manrope", fontSize: "16px", marginY: "12px" }}
              >
                Iziko South African Museum
              </Link>
              <Link
                href="https://www.sanparks.org/parks/table_mountain/tourism/attractions.php#boulders"
                target="_blank"
                sx={{ fontFamily: "Manrope", fontSize: "16px", marginY: "12px" }}
              >
                Boulders Beach
              </Link>
              <Link
                href="https://www.alltrails.com/trail/south-africa/western-cape/lion-s-head-summit?u=i"
                target="_blank"
                sx={{ fontFamily: "Manrope", fontSize: "16px", marginY: "12px" }}
              >
                Lion's Head
              </Link>
              <Link
                href="https://www.sanparks.org/parks/table_mountain/"
                target="_blank"
                sx={{ fontFamily: "Manrope", fontSize: "16px", marginY: "12px" }}
              >
                Table Mountain
              </Link>
              <Link
                href="https://www.chapmanspeakdrive.co.za/"
                target="_blank"
                sx={{ fontFamily: "Manrope", fontSize: "16px", marginY: "12px" }}
              >
                Chapman's Peak Drive
              </Link>
              <Link
                href="https://goo.gl/maps/Zzz2CnBNYHW71PdBA"
                target="_blank"
                sx={{ fontFamily: "Manrope", fontSize: "16px", marginY: "12px" }}
              >
                Our Cafe, Restaurant, and Bar Recommendations
              </Link>
            </Stack>
          </Box>
          <Box>
            <Typography
              sx={{
                margin: "24px 0",
                padding: "10px 0",
                borderBottom: "solid 1px black",
                fontFamily: "Lato",
                width: "111px",
              }}
            >
              Accomodations
            </Typography>
            <Stack>

<Link
  href="http://www.lagrenadine.co.za"
  target="_blank"
  sx={{ fontFamily: "Manrope", fontSize: "16px", marginY: "12px" }}
>
  La Grenadine
</Link>
<Link
  href="https://igadihouse.com"
  target="_blank"

  sx={{ fontFamily: "Manrope", fontSize: "16px", marginY: "12px" }}
>
  iGadi
</Link>
<Link
  href="https://number5-guesthouse.co.za"
  target="_blank"

  sx={{ fontFamily: "Manrope", fontSize: "16px", marginY: "12px" }}
>
  Number5
</Link>
<Link
  href="https://www.hotelcloudnine.com/"
  target="_blank"

  sx={{ fontFamily: "Manrope", fontSize: "16px", marginY: "12px" }}
>
  Cloud9
</Link>
<Link
  href="https://www.kloofstreethotel.com"
  target="_blank"

  sx={{ fontFamily: "Manrope", fontSize: "16px", marginY: "12px" }}
>
  Kloof Street Hotel
</Link>
<Link
  href="http://www.inawestays.co.za/"
  target="_blank"

  sx={{ fontFamily: "Manrope", fontSize: "16px", marginY: "12px" }}
>
  In Awe Stays
</Link>
</Stack>
            
          </Box>
        </Box>
      </Box>
      <Box>
        <Typography
          sx={{ fontFamily: "Cardo", fontSize: mobile? '50px':  "64px", textAlign: "left" }}
        >
          Stellenbosch
        </Typography>
      </Box>
      <Box
        style={{
          margin: mobile ? "30px 0" : "74px 0",
          display: "flex",
          flexDirection: mobile ? "column" : "row",
        }}
      >
        <Box sx={{ flex: "1", textAlign: "left" }}>
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
              Feb 23 - 25
            </Typography>
            <Typography sx={{ fontFamily: "Manrope", fontSize: mobile ? '18px' : "24px" }}>
              We recommend staying in Stellenbosch for the weekend of the
              wedding. It is beautiful wine country where our ceremony will be
              held.{" "}
            </Typography>
            <Typography sx={{ fontFamily: "Manrope", fontSize: mobile ? '18px' : "24px"}}>
              For ease and safety of our guests, we will have a shuttle running
              to and from our venue to any accomodations in Stellenbosch proper.
            </Typography>
            <Typography sx={{ fontFamily: "Manrope", fontSize: mobile ? '18px' : "24px"}}>
              We've listed some hotels and guesthouses but feel free to
              peruse the area on Google Maps and book a place that suits your
              needs.
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            flex: "1",
            textAlign: "left",
            display: "flex",
            justifyContent: "space-around",
          }}
        >
          <Box>
            <Typography
              sx={{
                margin: "24px 0",
                padding: "10px 0",
                borderBottom: "solid 1px black",
                fontFamily: "Lato",
                width: "104px",
              }}
            >
              Favorite Spots
            </Typography>
            <Stack>
              <Link
                href="https://babylonstoren.com/"
                target="_blank"
                sx={{ fontFamily: "Manrope", fontSize: "16px", marginY: "12px" }}
              >
                Babylonstoren
              </Link>
              <Link
                href="https://cavalliestate.com/"
                target="_blank"
                sx={{ fontFamily: "Manrope", fontSize: "16px", marginY: "12px" }}
              >
                Cavalli Estate
              </Link>
              <Link
                href="https://boschendal.com/"
                target="_blank"
                sx={{ fontFamily: "Manrope", fontSize: "16px", marginY: "12px" }}
              >
                Boschendal
              </Link>
              <Link
                href="http://www.bartinney.co.za/"
                target="_blank"
                sx={{ fontFamily: "Manrope", fontSize: "16px", marginY: "12px" }}
              >
                Bartinney
              </Link>
            
              <Link
                href="https://goo.gl/maps/c2mzfJ2bmqTcTseL8"
                target="_blank"
                sx={{ fontFamily: "Manrope", fontSize: "16px", marginY: "12px" }}
              >
                Our Cafe, Restaurant, and Bar Recommendations
              </Link>
            </Stack>
          </Box>
          <Box>
            <Typography
              sx={{
                margin: "24px 0",
                padding: "10px 0",
                borderBottom: "solid 1px black",
                fontFamily: "Lato",
                width: "111px",
              }}
            >
              Accomodations
            </Typography>
            <Stack>
            <Link
              href="https://coopmanhuijs.co.za"
              sx={{ fontFamily: "Manrope", fontSize: "16px", marginY: "12px" }}
            >
              Coopmanhuijs
            </Link>
            <Link
              href="https://www.dehaasliving.co.za/hamman-14/"
              sx={{ fontFamily: "Manrope", fontSize: "16px", marginY: "12px" }}
            >
              Hamman 14
            </Link>
            <Link
              href="https://cloudsestate.com"
              sx={{ fontFamily: "Manrope", fontSize: "16px", marginY: "12px" }}
            >
              Clouds Estate
            </Link>
            <Link
              href="https://www.laanhof.co.za/accommodation/"
              sx={{ fontFamily: "Manrope", fontSize: "16px", marginY: "12px" }}
            >
              Laanhof
            </Link>
            <Link
              href="https://hotelkrige.co.za/"
              sx={{ fontFamily: "Manrope", fontSize: "16px", marginY: "12px" }}
            >
              Hotel Krige
            </Link>
            <Link
              href="https://7ackermannplace.co.za/"
              sx={{ fontFamily: "Manrope", fontSize: "16px", marginY: "12px" }}
            >
              7 Ackermann Place
            </Link><Link
              href="https://www.bonneesperance.com/"
              sx={{ fontFamily: "Manrope", fontSize: "16px", marginY: "12px" }}
            >
              Bonne Esperance
            </Link>
            </Stack>

          </Box>
        </Box>
      </Box>
      </SectionBox>
  );
};

export default LodgingPage;
