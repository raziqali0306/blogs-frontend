
import HorizontalRuleIcon from '@mui/icons-material/HorizontalRule';
import { Box, styled, Typography } from '@mui/material';
import { Stack } from '@mui/system';
import React, { useEffect, useState } from 'react';
import usePosts from '../../hooks/use-posts';
import { StyledStack } from '../customComponents/styledComponents';
import Posts from '../posts';
import Collection from './collections';
import Intro from './intro';

const StyledContainer = styled(Box)(({ theme }) => ({
    paddingBottom: "10vh",
    minHeight: "80vh",
    display: "flex",
    gap: 10
}))

export default function Home() {

    
    const { getAllPosts } = usePosts();

    const [selectedTag, setSelectedTag] = useState(null);
    const [posts, setPosts] = useState([]);

    const getPosts = () => {
        if (selectedTag === null) {
            return posts;
        }
        return posts.filter((post) => post.tags.includes(selectedTag));
    }

    useEffect(() => {
    (async () => {
      setPosts(await getAllPosts())
    })()
  }, [getAllPosts]);

    return (
        <>
            <Box sx={(theme) => ({backgroundColor: theme.palette.primary.extraLight, mb: "100px"})}>
                <Stack maxWidth="lg" mx="auto">
                    <StyledContainer position={'relative'}>
                        <Intro />
                    </StyledContainer>
                    <Collection setSelectedTag={setSelectedTag} selectedTag={selectedTag} />
                </Stack>
            </Box>
            <Box maxWidth="lg" mx="auto" marginBottom={"100px"}>
                <StyledStack>
                    <Stack sx={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        gap: "5px"
                    }}>
                        <Typography variant='h6' fontWeight={600} >Blogs</Typography>
                        <HorizontalRuleIcon />
                    </Stack>
                </StyledStack>
                <Posts posts={getPosts()} />
            </Box>
        </>
  )
}