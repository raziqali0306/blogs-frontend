import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import HorizontalRuleIcon from '@mui/icons-material/HorizontalRule';
import { Box, Button, Stack, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import usePosts from '../../hooks/use-posts';
import { StyledStack } from '../customComponents/styledComponents';
import Tags from '../tags';


export default function Collection() {

    const { getTags } = usePosts();

    const [tags, setTags] = useState([]);

    useEffect(() => {
        (async () => {
            setTags(await getTags())
        })()
    }, [getTags])
    

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
            <Tags tags={tags}/>
      </Box>
  )
}
