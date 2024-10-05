import React from "react";
import { Button, Container, Typography, Box } from "@mui/material";

const Footer = () => {
  return (
    <Box
      sx={{
        color: "white",
        bgcolor: "primary.dark",
        padding: 2,
      }}
    >
      <Container
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography variant="body2">© 2023 Ghaalib99</Typography>
      </Container>
    </Box>
  );
};

export default Footer;
