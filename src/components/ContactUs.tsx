import React from "react";
import { Box, Button, TextField, Typography, Grid, Paper } from "@mui/material";

const ContactUs = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        backgroundColor: "#f5f5f5",
        padding: "4rem",
      }}
    >
      <Paper
        elevation={3}
        sx={{ padding: "2rem", maxWidth: "600px", width: "100%" }}
      >
        <Typography variant="h4" component="h1" align="center" gutterBottom>
          Contact Us
        </Typography>
        <Typography variant="body1" align="center" paragraph>
          We'd love to hear from you! Please fill out the form below.
        </Typography>

        <form noValidate autoComplete="off">
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Full Name"
                variant="outlined"
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Email Address"
                type="email"
                variant="outlined"
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Message"
                variant="outlined"
                multiline
                rows={4}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                fullWidth
                variant="contained"
                color="primary"
                size="large"
              >
                Send Message
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Box>
  );
};

export default ContactUs;
