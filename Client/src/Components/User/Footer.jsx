import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";

const Footer = () => (
  <>
    <AppBar position="static" component="footer" color="default">
      <Toolbar style={{ justifyContent: "center" }}>
        <Typography variant="caption">©2023 (mrkc2303)</Typography>
      </Toolbar>
    </AppBar>
  </>
);

export default Footer;
