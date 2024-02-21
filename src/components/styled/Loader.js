import * as React from "react";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import CircularProgress from "@mui/material/CircularProgress";

const StyledLoader = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  position: "fixed",
  left: "0px",
  top: "0px",
  width: "100%",
  height: "100%",
}));

export default function CustomLoader() {
  return (
    <StyledLoader>
      <Box sx={{ mt: 1 }}>
        {" "}
        <CircularProgress />
      </Box>
    </StyledLoader>
  );
}
