import { FC, useState } from "react";
import {
  Grid,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  Link
} from "@mui/material";
import { Photo } from "../../types";
import { Loader } from "../Loader/Loader";
import { useUnsplashPhotos } from "../../hooks/useUnsplashPhotos";

interface UnsplashPhotosProps {
  apiKey: string;
  currentPage: number;
  perPage: number;
  orderBy: string;
}

const UnsplashPhotos: FC<UnsplashPhotosProps> = ({
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
  if (isError) return <div>Error: {isError.message}</div>;

  return (
    <Grid container spacing={2} sx={{ marginTop: "20px" }}>
      {photos &&
        photos.map((photo: Photo) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={photo.id}>
            <PhotoCard photo={photo} />
          </Grid>
        ))}
    </Grid>
  );
};

interface PhotoCardProps {
  photo: Photo;
}

const PhotoCard: FC<PhotoCardProps> = ({ photo }) => {
  const [expanded, setExpanded] = useState(false);

  const handleToggleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: 600 }}>
      <CardMedia
        sx={{ height: 200 }}
        image={photo.urls.small}
        title={photo.alt_description || "Unsplash Photo"}
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="span">
          {photo.user.name}
        </Typography>
        <Typography variant="body1" color="text.secondary">
          <Link
            href={`https://unsplash.com/@${photo.user.username}`}
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none" }}
          >
            @{photo.user.username}
          </Link>
        </Typography>
        <Typography
          variant="body2"
          component="article"
          color="text.secondary"
          sx={{
            overflow: expanded ? "visible" : "hidden",
            textOverflow: expanded ? "clip" : "ellipsis",
            display: "-webkit-box",
            WebkitBoxOrient: "vertical",
            WebkitLineClamp: expanded ? "none" : 1,
            cursor: "pointer",
          }}
          onClick={handleToggleExpand}
        >
          {photo.description || photo.alt_description || "No description"}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          size="small"
          variant="contained"
          type="button"
          href={photo.links.html}
          target="_blank"
          sx={{
            backgroundColor: "var(--main-accent)",
            "&:hover": {
              backgroundColor: "var(--secondary-accent)",
            },
          }}
        >
          View
        </Button>
      </CardActions>
    </Card>
  );
};

export default UnsplashPhotos;
