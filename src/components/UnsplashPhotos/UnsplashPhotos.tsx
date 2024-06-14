import { FC } from "react";
import { Grid } from "@mui/material";
import { Photo } from "../../Types/types.ts";
import { Loader } from "../Loader/Loader";
import { useUnsplashPhotos } from "../../hooks/useUnsplashPhotos";

import { PhotoCard } from "../PhotoCard/PhotoCard.tsx";

interface UnsplashPhotosProps {
  apiKey: string;
  currentPage: number;
  perPage: number;
  orderBy: string;
}

export const UnsplashPhotos: FC<UnsplashPhotosProps> = ({
  apiKey,
  currentPage,
  perPage,
  orderBy,
}) => {
  const { photos, isLoading, isError } = useUnsplashPhotos(
    apiKey,
    currentPage,
    perPage,
    orderBy
  );

  if (isLoading)
    return (
      <div>
        <Loader />
      </div>
    );
  if (isError) return <div>Error: {isError?.message}</div>;

  return (
    <>
      <Grid container spacing={2} sx={{ marginTop: "5px" }}>
        {photos &&
          photos.map((photo: Photo) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={photo.id}>
              <PhotoCard photo={photo} />
            </Grid>
          ))}
      </Grid>
    </>
  );
};
