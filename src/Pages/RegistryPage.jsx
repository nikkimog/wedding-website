import React from "react";
import { SectionBox } from "../Components/SectionBox";
import { Typography, Link, useMediaQuery } from "@mui/material";


const RegistryPage = () => {
const mobile = useMediaQuery("(max-width:600px)");

  return (
    <SectionBox id="registry" title="Registry">
      <Typography sx={{ fontFamily: "Manrope", fontSize: mobile ? '18px' : "24px" }}>
        If you are able to come to our ceremony in South Africa, please consider your
        presence our wedding present.
      </Typography>
      <Typography sx={{ fontFamily: "Manrope", fontSize: mobile? '18px':  "24px" }}>
        If you do wish to celebrate with a gift, please
        follow this link to our <Link target="_blank" href="https://www.hitchd.com/nikkiandkai"> external registry.</Link>
      </Typography>
    </SectionBox>
  );
};

export default RegistryPage;
