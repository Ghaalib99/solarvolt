"use client";
// import page from "@/app/auth/page";
import React from "react";

import { Box } from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import AppBar from "@mui/material/AppBar";
import CssBaseline from "@mui/material/CssBaseline";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

const drawerWidth = 300;

type ProfileProps = {
  children: React.ReactNode;
};

interface Props {
  window?: () => Window;
}

const InAppLayout = (props: ProfileProps & Props) => {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const { window } = props;

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        {props.children}
      </Box>
    </Box>
  );
};

export default InAppLayout;
