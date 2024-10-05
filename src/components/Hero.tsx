import React from "react";
import Appbar from "@/components/appbar";
import Box from "@mui/material/Box";
import { Button, Typography } from "@mui/material";
import { FlashAuto } from "@mui/icons-material";
import ElectricMeterIcon from "@mui/icons-material/ElectricMeter";
import SelfImprovementIcon from "@mui/icons-material/SelfImprovement";

const Hero = () => {
  const handleNavigation = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <Box
      sx={{
        height: { xs: "auto", md: "100vh" },
        display: { md: "flex" },
        position: "relative",
        bgcolor: { xs: "primary.dark", md: "inherit" },
      }}
    >
      <Appbar color="white" />

      {/* Left */}
      <Box
        sx={{
          flex: 1,
          height: 1,
          bgcolor: "primary.dark",
          color: "white",
          pt: 9,
          borderTopLeftRadius: 50,
        }}
      >
        <Box
          sx={{
            // mt: 1,
            // marginX: { xs: "auto" },
            mb: { xs: 6, md: 0 },
            ml: 8,
            width: 0.6,
            textAlign: { xs: "center", md: "left" },
          }}
        >
          <Typography
            variant="h1"
            sx={{ color: "primary.light", mb: 2, mt: { xs: 4, md: 0 } }}
          >
            Solarvolt Energy Solutions
          </Typography>
          <Typography variant="body1" fontSize={14} mb={3}>
            Join the energy revolution with Solarvolt, empowering individuals,
            businesses, and communities to thrive through clean, reliable, and
            cost-effective solar energy solutions that shape a sustainable
            future.
          </Typography>
          <Button
            variant="contained"
            sx={{
              bgcolor: "primary.light",
              color: "primary.dark",
              fontWeight: 500,
              "&:hover": {
                bgcolor: "#E5E7EB",
              },
            }}
            size="large"
            onClick={() => handleNavigation("contact")}
          >
            Contact us
          </Button>
        </Box>
      </Box>

      {/* Right */}
      <Box
        sx={{
          flex: 1,
          height: 1,
          bgcolor: "white",
          pt: 12,
          borderTopRightRadius: 50,
          display: { xs: "none", md: "block" },
        }}
      >
        <Box
          sx={{
            display: "flex",
            width: 0.6,
            mt: 4,
            marginLeft: "auto",
            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              bgcolor: "primary.light",
              padding: 2,
              height: 50,
              width: 50,
              borderRadius: "50%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              mr: 4,
            }}
          >
            <FlashAuto />
          </Box>
          <Box
            sx={{
              bgcolor: "primary.light",
              padding: 2,
              height: 50,
              width: 50,
              borderRadius: "50%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              mr: 4,
            }}
          >
            <ElectricMeterIcon />
          </Box>
          <Box
            sx={{
              bgcolor: "primary.light",
              padding: 2,
              height: 50,
              width: 50,
              borderRadius: "50%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              mr: 4,
            }}
          >
            <SelfImprovementIcon />
          </Box>
        </Box>
      </Box>

      <Box
        sx={{
          position: { xs: "relative", md: "absolute" },
          top: { md: 300, lg: 280 },
          left: { xs: 0, md: 170 },
          width: 1,
        }}
      >
        <Box
          component="img"
          src="/solar-roof-2.png"
          alt=""
          sx={{
            width: { xs: 1, md: 0.7 },
            height: 400,
            display: "block",
            // margin: "0 auto",
          }}
        />
      </Box>
    </Box>
  );
};

export default Hero;
