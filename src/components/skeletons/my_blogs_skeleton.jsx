import HorizontalRuleIcon from '@mui/icons-material/HorizontalRule';
import { Box, Stack, Typography } from "@mui/material";
import { StyledStack } from "../customComponents/styledComponents";

function MyBlogsSkeleton() {
    return (
        
        <Stack sx={{
            mt: 8,
            maxWidth: "lg",
            mx: 'auto',
            minHeight: "40vh",
            mb: "20vh",
        }}>
            <Box mb={"2vh"}>
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
                    <Post /><Post />
                    <Post /><Post />
                    <Post /><Post />
                    <Post /><Post />
                    <Post /><Post />
                </Stack>
        </Stack>
    )
}

function Post() {
    return (
        <Box
            flexDirection={'row'}
            sx={(theme) => ({
                height: "64px",
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
                    className='skeleton-animate'
                    variant="h6"
                    gutterBottom
                    noWrap
                    sx={{
                        height: "30px",
                        borderRadius: "4px",
                        fontWeight: 600,
                        textTransform: "capitalize",
                        width: "60%"
                    }}
                    ></Typography>
                <Typography
                    className='skeleton-animate'
                    variant="body2"
                    sx={{
                        borderRadius: "4px",
                        height: "18px",
                    }}
                    noWrap
                    gutterBottom
                    ></Typography>
            </Box>
        </Box>
    )
}

export default MyBlogsSkeleton;