import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { Box, Button, Card, CardActions, CardContent, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../utils/constants";

function Posts() {
  const [posts, setPosts] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    fetch(`${BASE_URL}/posts/`)
      .then((res) => res.json())
      .then((data) => {
        setPosts(data);
      })
      .catch((err) => {
        console.log(err);
    })
    
  }, []);

  return (
    <Stack sx={{
      display: "flex",
      flexDirection: "row",
      flexWrap: "wrap",
      gap: 5,
      mb: "40px"
    }}>
      {
        posts.map((post) => (
          <Card sx={{
            width: "30%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between"
          }}>
            <CardContent>
              <Typography
                variant="h5"
                gutterBottom
                sx={{
                  fontWeight: 600,
                  textTransform: "capitalize",
                }}
                >{post.title}</Typography>
              <Typography variant="body1" noWrap gutterBottom>{post.body}</Typography>
              <Stack sx={{
                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap",
                gap: 1,
              }}>
                {
                  post.tags.map(tag => (
                    <Box
                      sx={(theme) => ({
                        px: 2,
                        py: 0.9,
                        fontSize: "14px",
                        borderRadius: "50vh",
                        color: "white",
                        textTransform: "capitalize",
                        bgcolor: theme.palette.secondary.main,
                      })}
                    >{tag}</Box>
                    ))
                }
              </Stack>
            </CardContent>
            <CardActions >
              <Button
                sx={{
                  color: "black",
                }}
                endIcon={<ChevronRightIcon />}
                onClick={() => {
                  navigate(`/posts/${post.postId}`);
                }}
              >Read Full Blog</Button>
            </CardActions>
          </Card>
        ))
      }
      
    </Stack>
  );
}

export default Posts;
