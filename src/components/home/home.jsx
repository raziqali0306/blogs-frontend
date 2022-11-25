
import { Box, Button, styled, Typography } from '@mui/material';
import { Stack } from '@mui/system';
import React from 'react';
import { StyledStack } from '../customComponents/styledComponents';
import Collection from './collections';
import Intro from './intro';
import HorizontalRuleIcon from '@mui/icons-material/HorizontalRule';
import Posts from '../posts';
import Footer from '../footer';

const StyledContainer = styled(Box)(({ theme }) => ({
    paddingBottom: "10vh",
    minHeight: "80vh",
    display: "flex",
    gap: 10
}))

export default function Home() {
    return (
        <>
            <Box sx={(theme) => ({backgroundColor: theme.palette.primary.extraLight, mb: "100px"})}>
                <Stack maxWidth="lg" mx="auto">
                    <StyledContainer position={'relative'}>
                        <Intro />
                    </StyledContainer>
                    <Collection />
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
                <Posts />
            </Box>
            <Footer />
        </>
  )
}