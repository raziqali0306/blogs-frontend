import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { Box, Button, Card, CardActions, CardContent, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import { useNavigate } from "react-router-dom";

function Posts({ posts }) {
  const navigate = useNavigate();

  return (
    <Stack sx={{
      display: "flex",
      flexDirection: "row",
      flexWrap: "wrap",
      gap: 5,
      justifyContent: "space-evenly",
    }}>
      {
        posts.length === 0 ? 
          <Box
            minHeight={'40vh'}
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <Typography variant='h6' color='primary' mt={'-52px'}>No posts found...</Typography>
          </Box>  
          :
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
