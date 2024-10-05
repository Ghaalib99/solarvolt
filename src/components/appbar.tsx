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

// Combine the two prop interfaces
interface AppbarProps {
  color?: string;
}

const Appbar: React.FC<AppbarProps> = ({ color }) => {
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

  const handleNavigation = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
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
            sx={{ flexGrow: 1, color: color, cursor: "pointer" }}
            onClick={() => router.push("/")}
          >
            Solarvolt
          </Typography>

          {/* Desktop buttons */}
          <Button
            onClick={() => handleNavigation("about")}
            color="inherit"
            sx={{ display: { xs: "none", md: "block" } }}
          >
            About Us
          </Button>
          <Button
            onClick={() => handleNavigation("services")}
            color="inherit"
            sx={{ display: { xs: "none", md: "block" } }}
          >
            Services
          </Button>
          <Button
            color="inherit"
            sx={{ display: { xs: "none", md: "block" } }}
            onClick={handleTraining}
          >
            Training
          </Button>
          <Button
            onClick={() => handleNavigation("contact")}
            color="inherit"
            sx={{ display: { xs: "none", md: "block" } }}
          >
            Contact Us
          </Button>
          <Button color="inherit" sx={{ display: { xs: "none", md: "block" } }}>
            Login
          </Button>

          {/* Mobile menu */}
          <IconButton
            size="large"
            edge="start"
            aria-label="menu"
            sx={{ mr: 2, display: { xs: "block", md: "none" } }}
            onClick={handleClick}
          >
            <MenuIcon />
          </IconButton>

          {/* Dropdown menu for mobile */}
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <MenuItem onClick={() => handleNavigation("about")}>
              About Us
            </MenuItem>
            <MenuItem onClick={() => handleNavigation("services")}>
              Services
            </MenuItem>
            <MenuItem onClick={handleTraining}>Training</MenuItem>
            <MenuItem onClick={() => handleNavigation("contact")}>
              Contact Us
            </MenuItem>
            <MenuItem onClick={handleClose}>Login</MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Appbar;
