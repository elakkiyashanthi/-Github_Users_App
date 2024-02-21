import * as React from "react";
import { styled } from "@mui/material/styles";
import { Link } from "react-router-dom";

const StyledLink = styled(Link)(({ theme }) => ({
  display: "flex",
  color: theme.palette.secondary.main,
  textDecoration: "none",
  ...theme,
}));

export default function CustomLink({ to, children }) {
  return <StyledLink to={to}>{children}</StyledLink>;
}
