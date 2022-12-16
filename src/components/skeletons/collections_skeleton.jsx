import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import HorizontalRuleIcon from '@mui/icons-material/HorizontalRule';
import { Button, Typography } from "@mui/material";
import { Box, Stack } from "@mui/system";
import { StyledStack } from "../customComponents/styledComponents";

function CollectionSkeleton() {
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
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    flexDirection: "row",
                    gap: 5,
                    flexWrap: "wrap",
                }}
            >
                <Tag /><Tag />
                <Tag /><Tag />
                <Tag /><Tag />
                <Tag /><Tag />
                <Tag /><Tag /><Tag />
            </Box>
      </Box>
    )
}

function Tag() {
    return (
        <Box
            sx={(theme) => Object.assign({
                px: 1,
                py: 2,
                textAlign: "center",
                width: "12%",
                height: "28px",
                bgcolor: "white",
                borderRadius: 4,
                textTransform: "capitalize",
                boxShadow: `4px 4px 4px 4px ${theme.palette.primary.light}`,
                transition: "all 0.2s ease-in-out",
                display: "flex",
                alignItems: "center"
            })}
        >
            <Box
                className="skeleton-animate"
                sx={{
                    borderRadius: "4px",
                    height: "75%",
                    width: "65%",
                    mx: "auto",
                }}
            ></Box>
        </Box>
    )
}

export default CollectionSkeleton;