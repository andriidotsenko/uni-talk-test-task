import { AppBar, Container, Toolbar, Typography } from "@mui/material";
import { FC } from "react";
import Link from "@mui/material/Link";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export const Header: FC = () => {
  return (
    <>
      <AppBar
        position="static"
        sx={{ backgroundColor: "#FF354E", boxShadow: "none" }}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters sx={{ justifyContent: "space-between" }}>
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
            <div
              className="wrapper"
              style={{ display: "flex", gap: "10px", justifyContent: "end" }}
            >
              <Link href="https://github.com/andriidotsenko/uni-talk-test-task">
                <GitHubIcon sx={{ color: "white" }} />
              </Link>
              <Link href="https://www.linkedin.com/in/dotsenko-andrii/">
                <LinkedInIcon sx={{ color: "white" }} />
              </Link>
            </div>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
};
