import { AppBar, Container, Toolbar, Typography } from "@mui/material";
import { FC } from "react";
import Link from "@mui/material/Link";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { motion } from "framer-motion";

export const Header: FC = () => {
  return (
    <>
      {" "}
      <motion.div
        initial={{ y: "-99%", opacity: 0 }}
        whileInView={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0 }}
        transition={{}}
      >
        <AppBar
          position="static"
          sx={{ backgroundColor: "#FF354E", boxShadow: "none" }}
        >
          <Container maxWidth="xl">
            <Toolbar disableGutters sx={{ justifyContent: "space-between" }}>
              <Typography
                variant="body1"
                noWrap
                component="a"
                href="#"
                sx={{
                  mr: 0,
                  display: { xs: "flex" },
                  fontFamily: "Tiny5",
                  fontWeight: 500,
                  color: "inherit",
                  textDecoration: "none",
                }}
              >
                Dotsenko TestTask
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
      </motion.div>
    </>
  );
};
