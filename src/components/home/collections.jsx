import HorizontalRuleIcon from '@mui/icons-material/HorizontalRule';
import { Box, Button, Stack, Typography } from '@mui/material';
import React from 'react';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Tags from '../tags';
import { StyledStack } from '../customComponents/styledComponents';


export default function Collection() {
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
            <Tags tags={['tag1', 'tag2', 'tag3', 'tag4', 'tag5', 'tag6', 'tag7']}/>
      </Box>
  )
}
