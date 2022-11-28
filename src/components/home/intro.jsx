import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Box, Button, styled, TextField, Typography } from '@mui/material';
import React from 'react';
import blogger from '../../assests/blogger.gif';


const StyledBox = styled(Box)({
    display: "flex",
    flexDirection: "column",
    justifyContent: "center"
})

export default function Intro() {
    return (
        <>
            <Box position={"absolute"}
                sx={{
                    left: "50%",
                    bottom: "100px",
                    transform: "-50%",
                }}
            >
                <KeyboardArrowDownIcon />
            </Box>
            <StyledBox>
                <Typography variant="h3" fontWeight={1000} marginBottom={2}>Hi, I'm Custom.Blog</Typography>
                <Box sx={(theme) => ({ borderLeft: "5px", borderColor: theme.palette.text.main, borderLeftStyle:"solid", pl:"10px", borderRadius: "4px", marginBottom: "25px" })}>
                    <Typography>Write blogs to share tips and tricks, frameworks, projects, tutorials, etc</Typography>
                    <Typography>Make sure you subscribe to get the latest updates</Typography>
                </Box>
                <Box sx={{ display: "flex", gap: "25px" }}>
                    <TextField placeholder='Enter your email...' variant="outlined"
                        sx={{
                            flexGrow: 1,
                            bgcolor: 'white',
                        }}
                    />
                    <Button variant="contained" color='secondary' >Subscribe</Button>
                </Box>
            </StyledBox>
            <StyledBox marginLeft={18}>
                <img src={blogger} alt="" />
            </StyledBox>
        </>
  )
}
