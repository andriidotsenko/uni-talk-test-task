import { FC } from "react";
import { useUnsplashPhotos } from "../../hooks/useUnsplashPhotos";
import { Photo } from "../../types";
import {
  Grid,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@mui/material";

interface UnsplashPhotosProps {
  apiKey: string;
  currentPage: number;
  perPage: number;
}

const UnsplashPhotos: FC<UnsplashPhotosProps> = ({
  apiKey,
  currentPage,
  perPage,
}) => {
  const { photos, isLoading, isError } = useUnsplashPhotos(
    apiKey,
    currentPage,
    perPage
  );

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error: {isError.message}</div>;

  photos && console.log(photos);
  return (
    <Grid container spacing={2} sx={{ marginTop: "20px" }}>
      {photos &&
        photos.map((photo: Photo) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={photo.id}>
            <Card sx={{ maxWidth: 600 }}>
              <CardMedia
                sx={{ height: 200 }}
                image={photo.urls.small}
                title={photo.description || "Unsplash Photo"}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="span">
                  {photo.user.name}
                </Typography>
                <Typography
                  variant="body2"
                  component="article"
                  color="text.secondary"
                >
                  {photo.description || "No description available."}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" href={photo.links.html} target="_blank">
                  View
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
    </Grid>
  );
};

export default UnsplashPhotos;
