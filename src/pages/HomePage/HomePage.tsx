import { Pagination } from "@mui/material";

import { FC } from "react";
import UnsplashPhotos from "../../components/UnsplashPhotos/UnsplashPhotos";
const apiKey = "4HbzscYsx_uoGKA7F59n5SW-BokKePMAvwCEdTQd8q0";
export const HomePage: FC = () => {
  return (
    <>
      <UnsplashPhotos apiKey={apiKey} currentPage={1} perPage={10} />
      <Pagination
        count={10}
        showFirstButton
        showLastButton
        sx={{ display: "flex", justifyContent: "center", marginTop: "20px" }}
      />
    </>
  );
};
