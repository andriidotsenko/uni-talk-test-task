import { FC, useState } from "react";
import { Photo } from "../../Types/types";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  Link,
  IconButton,
} from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { motion } from "framer-motion";

interface PhotoCardProps {
  photo: Photo;
}

export const PhotoCard: FC<PhotoCardProps> = ({ photo }) => {
  const [expanded, setExpanded] = useState(false);

  const handleToggleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <motion.div
      initial={{ scale: 0.9, opacity: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0 }}
      transition={{}}
    >
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
          <Typography variant="body1" color="text.secondary">
            Dimensions: {photo.width}x{photo.height}
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Created at: {new Date(photo.created_at).toLocaleDateString()}
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
          <IconButton aria-label="delete" disabled>
            <FavoriteBorderIcon
              sx={{
                fill: "var(--main-accent)",
                marginRight: 1,
              }}
            />
            <Typography
              variant="h6"
              color="text.secondary"
              sx={{
                color: "var(--main-accent)",
                "&:hover": {
                  color: "var(--secondary-accent)",
                },
              }}
            >
              {photo.likes}
            </Typography>
          </IconButton>
        </CardActions>
      </Card>
    </motion.div>
  );
};
