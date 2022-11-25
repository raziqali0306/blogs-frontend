import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { Button, Divider, Stack, Typography } from "@mui/material";
import { Box } from '@mui/system';
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { BASE_URL } from "../utils/constants";
import CreateBlog from './create';

function Post() {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [enableEdit, setEnableEdit] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    getPost();
  }, [id]);
  
  const getPost = () => {
    fetch(`${BASE_URL}/posts/${id}`)
      .then((res) => res.json())
      .then((data) => setPost(data))
      .catch((err) => console.log(err));
  }

  const deletePost = () => {
    fetch(`${BASE_URL}/posts/${id}`, {
      method: "DELETE",
    })
    .then((data) => {
      navigate('/');
    }).catch((err) => {
      alert("Failed to delete post");
      console.log(err)
    });
  }

  return (
    <>
      {
        enableEdit ? 
          <CreateBlog blog={post} cancel={() => setEnableEdit((prev) => !prev)} refreshPost={() => getPost()} />
          :
          <Stack
            mt={10}
            minHeight={"80vh"}
            maxWidth="lg"
            mx="auto"
            alignItems={"center"}
            textAlign="left"
            >
            <Typography variant="h3" textTransform={'capitalize'} textAlign={'center'} marginBottom={4} fontWeight={600}>{post?.title}</Typography>
            <Box sx={{width: "40%", display: "flex", flexDirection: "column", justifyContent: 'center', mx: "auto", marginBottom: 10 }}>
              <Divider component={'hr'} sx={(theme) => ({ height: 0.5, bgcolor: theme.palette.secondary.main, width: "100%", marginY: 1.5 })} />
              <Stack
                direction="row"
                sx={{
                  justifyContent: 'center',
                  width: "100%"
                }}
              >
                {
                  post?.tags.map((tag, index) => (
                    <Typography
                      variant='body2'
                      key={index}
                      sx={(theme) => ({
                        mx: 0.8, 
                        px: 2,
                        py: 0.8,
                        borderRadius: "50vh",
                        bgcolor: theme.palette.secondary.main,
                        color: 'white',
                        textTransform: "capitalize"
                      })}
                    >
                      {tag}
                    </Typography>
                  ))
                }
              </Stack>
            </Box>
            <Typography variant="body1" marginBottom={6}>{post?.body}</Typography>
            <Stack
              width={"100%"}
              direction={"row"}
              justifyContent={'space-between'}
              >
            </Stack>
            <Stack
              direction={'row'}
              justifyContent="space-between"
              width={"100%"}
              >
              <Button
                onClick={() => {
                  navigate(`/posts/${id}/edit`);
                }}
                variant="contained"
                sx={(theme) => ({
                  bgcolor: theme.palette.secondary.main,
                  color: "white"
                })}
                startIcon={<EditIcon />}
                >Edit</Button>
              <Button
                onClick={deletePost}
                variant="contained"
                sx={{
                  bgcolor: "red",
                  color: "white"
                }}
                startIcon={<DeleteIcon />}
                >Delete</Button>
            </Stack>
          </Stack>
      }
    </>
  );
}

export default Post;
