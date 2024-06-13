import { Pagination } from "@mui/material";

import { FC } from "react";
import UnsplashPhotos from "../UnsplashPhotos/UnsplashPhotos";

export const Body: FC = () => {
  return (
    <>
      <UnsplashPhotos />
      <Pagination
        count={10}
        showFirstButton
        showLastButton
        sx={{ display: "flex", justifyContent: "center", marginTop: "20px" }}
      />
    </>
  );
};
