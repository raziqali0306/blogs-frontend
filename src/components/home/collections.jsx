import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import HorizontalRuleIcon from '@mui/icons-material/HorizontalRule';
import { Box, Button, Stack, Typography } from '@mui/material';
import React from 'react';
import { resources } from '../../resources/posts';
import { StyledStack } from '../customComponents/styledComponents';
import Tags from '../tags';


const resource = resources();

export default function Collection({ selectedTag, setSelectedTag }) {
    
    const tags = resource.getTags.read();

    return (
        <Box paddingBottom={"46px"}>
            <StyledStack>
                <Stack sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    gap: "5px"
                }}>
                    <Typography variant='h6' fontWeight={600} >Browse the Category</Typography>
                    <HorizontalRuleIcon />
                </Stack>
                <Button color='text' endIcon={<ChevronRightIcon />} >see all categories</Button>
            </StyledStack>
            <Tags tags={tags} selectedTag={selectedTag} selectTag={(tag) => {
                selectedTag === tag ? setSelectedTag(null) : setSelectedTag(tag)
            }} />
      </Box>
  )
}
