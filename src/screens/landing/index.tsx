import Image from "next/image";
import Appbar from "@/components/appbar";
import Box from "@mui/material/Box";
import { Button, Container, Typography } from "@mui/material";
import { Open_Sans } from "next/font/google";
import { FlashAuto } from "@mui/icons-material";
import ElectricMeterIcon from "@mui/icons-material/ElectricMeter";
import SelfImprovementIcon from "@mui/icons-material/SelfImprovement";

export default function Landing() {
  return (
    <>
      <Box
        sx={{
          height: { xs: "auto", md: "100vh" },
          display: { md: "flex" },
          position: "relative",
          mb: 10,
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
    </>
  );
}
