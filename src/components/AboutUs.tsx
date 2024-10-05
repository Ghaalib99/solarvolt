import React from "react";
import { Box, Container, Grid, Typography, Paper, Avatar } from "@mui/material";
import { EmojiObjects, VerifiedUser, Public } from "@mui/icons-material";

const AboutUs = () => {
  return (
    <Box
      sx={{
        py: 10,
        backgroundColor: "#f5f5f5",
        textAlign: "center",
      }}
    >
      <Container maxWidth="lg">
        {/* Title Section */}
        <Typography
          variant="h3"
          component="h2"
          gutterBottom
          sx={{ color: "primary.main", mb: 4 }}
        >
          About Us
        </Typography>
        <Typography
          variant="body1"
          paragraph
          sx={{ maxWidth: "800px", mx: "auto", mb: 6, color: "text.secondary" }}
        >
          Solarvolt Technology Solutions is committed to revolutionizing the
          energy landscape by delivering efficient, affordable, and sustainable
          solar-powered solutions. We enable homes and businesses to reduce
          reliance on fossil fuels, minimize energy costs, and make a positive
          impact on the environment.
        </Typography>

        {/* Mission, Vision, and Values Section */}
        <Grid container spacing={4} justifyContent="center">
          {/* Mission */}
          <Grid item xs={12} md={4}>
            <Paper
              elevation={4}
              sx={{
                p: 4,
                textAlign: "center",
                bgcolor: "white",
                color: "",
                height: "100%",
              }}
            >
              <Avatar
                sx={{
                  bgcolor: "primary.main",
                  width: 60,
                  height: 60,
                  mb: 2,
                  mx: "auto",
                }}
              >
                <EmojiObjects />
              </Avatar>
              <Typography variant="h5" gutterBottom>
                Our Mission
              </Typography>
              <Typography variant="body2">
                To empower individuals and businesses with reliable and
                cost-effective solar solutions, fostering the transition to
                renewable energy while promoting sustainability.
              </Typography>
            </Paper>
          </Grid>

          {/* Vision */}
          <Grid item xs={12} md={4}>
            <Paper
              elevation={4}
              sx={{
                p: 4,
                textAlign: "center",
                bgcolor: "white",
                color: "",
                height: "100%",
              }}
            >
              <Avatar
                sx={{
                  bgcolor: "primary.main",
                  width: 60,
                  height: 60,
                  mb: 2,
                  mx: "auto",
                }}
              >
                <Public />
              </Avatar>
              <Typography variant="h5" gutterBottom>
                Our Vision
              </Typography>
              <Typography variant="body2">
                To be a global leader in solar energy innovation, advancing
                technologies that create a greener planet and a sustainable
                future.
              </Typography>
            </Paper>
          </Grid>

          {/* Values */}
          <Grid item xs={12} md={4}>
            <Paper
              elevation={4}
              sx={{
                p: 4,
                textAlign: "center",
                bgcolor: "white",
                color: "",
                height: "100%",
              }}
            >
              <Avatar
                sx={{
                  bgcolor: "primary.main",
                  width: 60,
                  height: 60,
                  mb: 2,
                  mx: "auto",
                }}
              >
                <VerifiedUser />
              </Avatar>
              <Typography variant="h5" gutterBottom>
                Our Values
              </Typography>
              <Typography variant="body2">
                Integrity, innovation, and customer satisfaction drive
                everything we do. We strive to deliver solutions that are not
                only high-quality but also eco-friendly.
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Container>
      <Box mt={10} mb={10}>
        <Container
          sx={{
            display: { md: "flex" },
            justifyContent: "space-between",
          }}
        >
          <Box
            sx={{
              width: 0.3,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginX: { xs: "auto", md: 0 },
            }}
          >
            <Box
              component="img"
              src="/image1-removebg.png"
              alt=""
              sx={{
                width: "500px",
                height: "400px",
              }}
            />
          </Box>
          <Box
            sx={{
              width: { xs: 1, md: 0.6 },
              padding: 2,
              textAlign: { xs: "center", md: "left" },
            }}
          >
            <Typography variant="h3" mb={2} mt={4}>
              Experience Maximum Comfort
            </Typography>
            <Typography variant="body2" mb={2} fontSize={16}>
              Welcome to a new era of comfort with Solavolt. We prioritize your
              comfort, offering solutions that go beyond the ordinary. Whether
              it &apos; for your home or business, our commitment to providing a
              comfortable and efficient environment is unwavering.
            </Typography>

            <Typography variant="body2" mb={2} fontSize={16}>
              Discover the joy of seamless living through our cutting-edge
              technologies. Our range of comfort-focused services designed to
              elevate your experience and make everyday living a delight. From
              energy-efficient solutions to smart home innovations, we bring you
              the tools to create a space that perfectly aligns with your
              lifestyle. Join us on a journey where comfort meets innovation,
              and where your satisfaction is our top priority.
            </Typography>
          </Box>
        </Container>
      </Box>

      <Box
        mt={10}
        // mb={10}
        sx={{
          bgcolor: "#E5E7EB",
        }}
      >
        <Container
          sx={{
            display: { md: "flex" },
            justifyContent: "space-between",
          }}
        >
          <Box
            sx={{
              width: { xs: 1, md: 0.6 },
              padding: 2,
              textAlign: { xs: "center", md: "left" },
            }}
          >
            <Typography variant="h3" mb={2} mt={4}>
              Take control of your power supply
            </Typography>
            <Typography variant="body2" mb={2} fontSize={16}>
              At Solarvolt we empower you to take control of your energy future
              through the incredible potential of solar power. In a world where
              sustainability is more crucial than ever, solar energy stands out
              as a beacon of hope.
            </Typography>

            <Typography variant="body2" mb={2} fontSize={16}>
              Our mission is to offer you more than just solar solutions, we
              provide a pathway to a cleaner, greener, and more self-sufficient
              lifestyle. Imagine a world where your energy needs are met by the
              sun, where you have control over your consumption, and where you
              contribute to a healthier planet. With cutting-edge technology and
              a commitment to excellence, Solarvolt brings you solar solutions
              tailored to your unique needs.
            </Typography>
          </Box>

          <Box
            sx={{
              width: 0.3,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginX: { xs: "auto", md: 0 },
            }}
          >
            <img
              src="/image2-removebg.png"
              alt=""
              style={{
                width: "400px",
                height: "400px",
              }}
            />
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default AboutUs;
