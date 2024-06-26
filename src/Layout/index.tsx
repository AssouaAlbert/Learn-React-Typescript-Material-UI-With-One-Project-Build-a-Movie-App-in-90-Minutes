import React from "react";
import { Box } from "@mui/material";
import { ReactNode } from "react";
import Sidebar from "../components/sidebar";

interface LayoutProps {
  children: ReactNode;
}

function Layout({ children }: LayoutProps) {
  return <Box sx={{
    backgroundColor: "#10141F",
    display: "flex",
    flexDirection: {
      xs: 'column',
      lg: "row"
    },
    color: 'white',
    padding: 3,
    gap:3,
    overFlowY: 'hidden',
    height: '100vh',

  }}>
    <Sidebar />
    <Box sx={{
      width: "100%",
      overflowY: "scroll"
    }}>{children}</Box>
  </Box>;
}

export default Layout;

