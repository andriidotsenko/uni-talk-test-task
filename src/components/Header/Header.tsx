import { AppBar, Container, Toolbar, Typography } from "@mui/material";

import { FC, useState } from "react";

export const Header: FC = () => {
  return (
    <>
      <AppBar
        position="static"
        sx={{ backgroundColor: "#FF354E", boxShadow: "none" }}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Typography
              variant="h5"
              noWrap
              component="a"
              href="#app-bar-with-responsive-menu"
              sx={{
                mr: 0,
                display: { xs: "flex", md: "1" },
                fontFamily: "monospace",
                fontWeight: 500,
                color: "inherit",
                textDecoration: "none",
              }}
            >
              Dotsenko image search
            </Typography>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
};
