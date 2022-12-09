import { Cancel } from "@mui/icons-material";
import SaveIcon from '@mui/icons-material/Save';
import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAppContext } from "../context/core";
import usePosts from "../hooks/use-posts";

function CreateBlog({ blog }) {
    const titleRef = useRef(null);
    const bodyRef = useRef(null);
    const tagsRef = useRef(null);

    const { id } = useParams();
    
    const { createPost, editPost } = usePosts();
    const navigate = useNavigate();
    const appContext = useAppContext();
        
    const [title, setTitle] = useState(blog?.title || '');
    const [body, setBody] = useState(blog?.body || '');
    const [tags, setTags] = useState(blog?.tags || []);

    const handleDelete = (value) => {
        const newtags = tags.filter((val) => val !== value);
        setTags(newtags);
    };

    const actionHandler = () => {
        if (titleRef.current.value === "") {
            titleRef.current.focus();
        } else if (bodyRef.current.value === "") {
            bodyRef.current.focus();
        } else {
            if (blog === undefined) {
                createPost(title, body, tags);
            }
            else {
                editPost(title, body, tags);
            }
        }
    }
    
    const addTag = (e) => {
        e.preventDefault();
        setTags([...tags, tagsRef.current.value]);
        tagsRef.current.value = "";
    };

    
    useEffect(() => {
        if (appContext?.userId === '' || appContext?.userId === null) navigate('/sign');
        window.scrollTo(0, 0);
    }, [appContext?.userId, navigate])
  
    return (
        <Stack
            sx={{
                mt: 8,
                gap: 4
            }}
            textAlign="center"
            maxWidth={"lg"}
            mx="auto"
            minHeight={'85vh'}
        >
            <Typography variant="h4" fontWeight={800} gutterBottom>{blog ? 'Edit' : 'Create'}Post</Typography>
            <TextField value={title} onChange={(e) => setTitle(e.target.value)} variant="standard" label="Title" inputRef={titleRef} fullWidth></TextField>
            <TextField value={body} onChange={(e) => setBody(e.target.value)} variant="standard" label="Body" fullWidth inputRef={bodyRef} sx={{ mb: 2 }} multiline maxRows={12}></TextField>
            <form onSubmit={addTag}>
                <TextField
                    inputRef={tagsRef}
                    fullWidth
                    variant='standard'
                    label={'Enter tags'}
                    InputProps={{
                        startAdornment: (
                        <Box sx={{ mr: 1, display: "flex" }}>
                            {tags.map((data, index) => {
                                return (
                                    <Tags data={data} handleDelete={handleDelete} key={index} />
                                );
                            })}
                        </Box>
                        ),
                    }}
                />
            </form>
            <Stack
                direction={'row'} 
                gap={2}
            >
                {
                    blog ? 
                        <>
                            <Button
                                variant="contained"
                                type="submit"
                                color="success"
                                sx={{ width: "fit-content" }}
                                onClick={actionHandler}
                                startIcon={<SaveIcon />}
                            >
                            Save
                            </Button>
                            <Button
                                variant="contained"
                                type="submit"
                                color="secondary"
                                sx={{ width: "fit-content" }}
                                onClick={() => {
                                    navigate(`/posts/${id}`)
                                }}
                            >
                            Cancel
                            </Button>
                        </>
                        :
                        <Button
                            variant="contained"
                            type="submit"
                            color="secondary"
                            size="large"
                            sx={{ width: "fit-content" }}
                            onClick={actionHandler}
                            >
                        Create
                        </Button>
                }
            </Stack>
        </Stack>
    );
}

const Tags = ({ data, handleDelete }) => {
  return (
    <Box
      sx={(theme) => ({
        background: theme.palette.secondary.main,
        color: "white",
        borderRadius: "50vh",
        px: 1.6,
        py: 0.8,
              my: 0.8,
        mr: 0.5,
        alignItems: 'center',
      })}
    >
      <Stack direction='row' gap={1}>
        <Typography variant="body2" textTransform={'capitalize'}>{data}</Typography>
              <Cancel
                sx={{ cursor: "pointer", width:"20px", height: "20px" }}
                onClick={() => {
                    handleDelete(data);
                }}
            />
      </Stack>
    </Box>
  );
};

export default CreateBlog;
