import HorizontalRuleIcon from '@mui/icons-material/HorizontalRule';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Box, Stack, Typography } from "@mui/material";
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import usePosts from '../hooks/use-posts';
import { StyledStack } from "./customComponents/styledComponents";

function MyBlogs() {

    const { getMyPosts, deletePost } = usePosts();
    const navigate = useNavigate();

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        (async () => {
            setPosts(await getMyPosts());
        })();
        document.querySelector('.reveal.intro').classList.add('active')
    }, [getMyPosts])

    return (
        <Stack sx={{
            mt: 8,
            maxWidth: "lg",
            mx: 'auto',
            minHeight: "40vh",
            mb: "20vh",
        }}>
            <Box mb={"2vh"} className="reveal intro">
                <StyledStack>
                    <Stack sx={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        gap: "5px"
                    }}>
                        <Typography variant='h6' fontWeight={600} >My Blogs</Typography>
                        <HorizontalRuleIcon />
                    </Stack>
                </StyledStack>
            </Box>
            {
                posts?.length === 0 ?
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            height: "100%",
                            flexGrow: 1,
                        }}
                    >
                        <Typography gutterBottom >You have no blogs yet.!</Typography>
                    </Box>
                    : 
                    <Stack
                        gap={4}
                        sx={{
                            display: "flex",
                            justifyContent: 'center',
                            flexDirection: "column",
                            width: "90%",
                            mx: 'auto',
                            flexWrap: "nowrap",
                            flexGrow: 1,
                        }}
                    >
                        {
                            posts?.map((post) => (
                                <Box
                                    flexDirection={'row'}
                                    sx={(theme) => ({
                                        display: "flex",
                                        justifyContent: "space-between",
                                        alignItems: "center",
                                        px: 4,
                                        py: 3,
                                        boxShadow: `2px 2px 12px ${theme.palette.primary.main}`,
                                        borderRadius: "8px",
                                        transition: "all 0.2s ease-in-out",
                                        '&:hover': {
                                            boxShadow: `2px 2px 16px ${theme.palette.primary.dark}`,
                                            scale: '1.02',
                                            cursor: "pointer"
                                        }
                                    })}
                                >
                                    <Box
                                        width={"70%"}
                                    >
                                        <Typography
                                            variant="h6"
                                            gutterBottom
                                            noWrap
                                            sx={{
                                                fontWeight: 600,
                                                textTransform: "capitalize",
                                                width: "60%"
                                            }}
                                        >{post.title}</Typography>
                                        <Typography
                                            variant="body2"
                                            noWrap
                                            gutterBottom
                                        >{post.body}</Typography>
                                    </Box>
                                    <Box
                                        sx={{
                                            position: "relative",
                                            '&:hover div': {
                                                visibility: "visible"
                                            }       
                                        }}
                                        >
                                        <MoreVertIcon color='primary' />
                                        <Stack
                                            component={'div'}
                                            sx={(theme) => ({
                                                position: 'absolute',
                                                top: "0%",
                                                right: "100%",
                                                px: 2,
                                                py: 2,
                                                borderRadius: "4px",
                                                boxShadow: "2px 2px 8px gray",
                                                backgroundColor: "white",
                                                zIndex: '100',
                                                gap: 1,
                                                visibility: "hidden",
                                                '&:hover': {
                                                    visibility: "visible"
                                                }
                                            })}
                                        >
                                            <Typography variant='body2' onClick={() => {
                                                navigate(`/posts/${post.postId}/edit`);
                                            }}>Edit</Typography>
                                            <Typography variant='body2' onClick={() => {
                                                deletePost(post.postId);
                                                window.location.reload();
                                            }}>Remove</Typography>
                                        </Stack>
                                    </Box>
                                </Box>
                            ))
                        }

                    </Stack>
            }
        </Stack>
    )
}

export default MyBlogs;