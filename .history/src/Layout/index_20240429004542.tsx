import React from "react";
import { Box } from "@mui/material";
import { ReactNode } from "react";

interface LayoutProps {
  childrend: ReactNode;
}

function Layout({ childrend }: LayoutProps) {
  return <Box sx={{
    backgroundColor: "#10141F",
    display: "flex",
    flexDirection: {
      xs:'column'
    }

  }}>

  </Box>;
}

export default Layout;

