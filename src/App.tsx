import { FC, Suspense } from "react";
import "./App.css";
import { Header } from "./components/Header/Header.tsx";

import { Container } from "@mui/material";
import { Outlet } from "react-router-dom";
import { Loader } from "./components/Loader/Loader.tsx";

export const App: FC = () => {
  return (
    <>
      <Container>
        <Header />
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </Container>
    </>
  );
};
