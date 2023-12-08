"use client";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { useRouter } from "next/navigation";

interface AppbarProps {
  color?: string;
}

const Appbar = ({ color }: AppbarProps) => {
  const router = useRouter();

  return (
    <Box
      sx={{
        flexGrow: 1,
        position: "absolute",
        width: 1,
        top: 0,
        left: 0,
        right: 0,
      }}
    >
      <AppBar
        position="static"
        sx={{ background: "inherit", color: "primary.main" }}
      >
        <Toolbar>
          <Typography
            variant="h3"
            component="div"
            ml={2}
            sx={{ flexGrow: 1, color: color, cursor: "pointer" }}
            onClick={() => router.push("/")}
          >
            Solarvolt
          </Typography>

          <Button color="inherit">About Us</Button>
          <Button color="inherit">Services</Button>
          <Button color="inherit" onClick={() => router.push("/training")}>
            Training
          </Button>
          <Button color="inherit">Contact Us</Button>
          <Button color="inherit">Login</Button>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Appbar;
