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
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

interface AppbarProps {
  color?: string;
}

const Appbar = ({ color }: AppbarProps) => {
  const router = useRouter();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleTraining = () => {
    handleClose();
    router.push("/training");
  };

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

          <Button color="inherit" sx={{ display: { xs: "none", md: "block" } }}>
            About Us
          </Button>
          <Button color="inherit">Services</Button>
          <Button color="inherit" onClick={() => router.push("/training")}>
            Training
          </Button>
          <Button color="inherit">Contact Us</Button>
          <Button color="inherit">Login</Button>
          <IconButton
            size="large"
            edge="start"
            // color="white"
            aria-label="menu"
            sx={{ mr: 2, display: { xs: "block", md: "none" } }}
            onClick={handleClick}
          >
            <MenuIcon />
          </IconButton>

          <Menu
            id="demo-positioned-menu"
            aria-labelledby="demo-positioned-button"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            anchorOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
          >
            <MenuItem onClick={handleClose}>About Us</MenuItem>
            <MenuItem onClick={handleClose}>Services</MenuItem>
            <MenuItem onClick={handleTraining}>Training</MenuItem>
            <MenuItem onClick={handleClose}>Contact Us</MenuItem>
            <MenuItem onClick={handleClose}>Login</MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Appbar;
