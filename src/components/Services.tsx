import React from "react";
import { Box, Grid, Paper, Typography, Avatar } from "@mui/material";
import {
  SolarPower,
  WindPower,
  EnergySavingsLeaf,
  BatteryChargingFull,
} from "@mui/icons-material";

const services = [
  {
    title: "Solar Energy",
    description:
      "Harness the power of the sun to generate clean, sustainable energy for your home or business.",
    icon: <SolarPower />,
  },
  {
    title: "Battery Storage Solutions",
    description:
      "Store excess solar energy for use during nights or cloudy days, ensuring energy reliability.",
    icon: <BatteryChargingFull />,
  },
  {
    title: "Energy Efficiency",
    description:
      "Optimize your energy use with smart solutions designed to save costs and the environment.",
    icon: <EnergySavingsLeaf />,
  },
];

const Services = () => {
  return (
    <Box
      sx={{
        backgroundColor: "primary.main",
        py: 8,
        px: 2,
        textAlign: "center",
      }}
    >
      <Typography variant="h4" component="h2" gutterBottom color="white">
        What We Do
      </Typography>
      <Typography variant="body1" color="white" paragraph>
        Leading the way in renewable energy solutions to power a greener future.
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        {services.map((service, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Paper elevation={3} sx={{ p: 3 }}>
              <Avatar
                sx={{
                  bgcolor: "primary.main",
                  width: 60,
                  height: 60,
                  margin: "0 auto",
                  mb: 2,
                }}
              >
                {service.icon}
              </Avatar>
              <Typography variant="h6" gutterBottom>
                {service.title}
              </Typography>
              <Typography variant="body2">{service.description}</Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Services;
