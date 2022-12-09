import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { Button, Divider, Stack, Typography } from "@mui/material";
import { Box } from '@mui/system';
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAppContext } from '../context/core';
import usePosts from '../hooks/use-posts';

function Post() {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  const navigate = useNavigate();
  const appContext = useAppContext();

  const { getPostById, deletePost } = usePosts();

  useEffect(() => {
    (async() => {
        setPost(await getPostById());
    })()
  }, [getPostById, id]);
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  return (
    <>
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
        <Typography variant="body1" marginBottom={10} whiteSpace={'pre-wrap'}>{post?.body}</Typography>
        <Typography variant='body2'>Publised on: { new Date(post?.createdAt).toLocaleDateString() } | { new Date(post?.createdAt).toLocaleTimeString() }</Typography>
        <Stack
          direction={'row'}
          justifyContent="space-between"
          width={"100%"}
          marginBottom={8}
        >
          {
            appContext?.userId === post?.author ?
              <>
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
                >
                  Edit
                </Button>
                <Button
                  onClick={() => {
                    deletePost()
                    navigate('/')
                  }}
                  variant="contained"
                  sx={{
                    bgcolor: "red",
                    color: "white"
                  }}
                  startIcon={<DeleteIcon />}
                >
                  Delete
                </Button>
              </>
            :null
          }
        </Stack>
      </Stack>
    </>
  );
}

export default Post;
