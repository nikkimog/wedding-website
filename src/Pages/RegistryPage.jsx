import React from "react";
import { SectionBox } from "../Components/SectionBox";
import { Box, Typography, Link } from "@mui/material";

const RegistryPage = () => {
  return (
    <SectionBox id="registry" title="Registry">
      <Typography sx={{ fontFamily: "Manrope", fontSize: "24px" }}>
        If you are coming to our ceremony in South Africa, please consider your
        presence our wedding present.
      </Typography>
      <Typography sx={{ fontFamily: "Manrope", fontSize: "24px" }}>
        If you are not able to attend and would like to give a gift, please
        follow this link to an <Link to="/"> external registry.</Link>
      </Typography>
    </SectionBox>
  );
};

export default RegistryPage;
