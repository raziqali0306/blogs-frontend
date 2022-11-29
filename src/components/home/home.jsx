
import HorizontalRuleIcon from '@mui/icons-material/HorizontalRule';
import SearchIcon from '@mui/icons-material/Search';
import { Box, InputAdornment, styled, TextField, Typography } from '@mui/material';
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
    const [filteredPosts, setFilteredPosts] = useState([]);
    const [searchText, setSearchText] = useState('');

    useEffect(() => {
        let filteredPosts = [...posts];
        if (selectedTag !== null) {
            filteredPosts = filteredPosts.filter((post) => post.tags.includes(selectedTag));
        }
        if (searchText.length >= 3) {
            filteredPosts = filteredPosts.filter((post) => (post.title.toLowerCase().includes(searchText.toLowerCase()) || post.body.toLowerCase().includes(searchText.toLowerCase())));
        }
        setFilteredPosts(filteredPosts)
    }, [posts, searchText, selectedTag])

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
                        <Typography variant='h6' fontWeight={600}>Blogs</Typography>
                        <HorizontalRuleIcon />
                    </Stack>
                    <Stack
                        direction={'row'}
                        width={"25%"}
                    >
                        <TextField
                            fullWidth
                            size='small'
                            placeholder='Search here...'
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <SearchIcon />
                                    </InputAdornment>
                                ),
                            }}
                            onChange={(e) => {
                                setSearchText(e.target.value)
                            }}
                        />
                    </Stack>
                </StyledStack>
                <Posts posts={filteredPosts} />
            </Box>
        </>
  )
}