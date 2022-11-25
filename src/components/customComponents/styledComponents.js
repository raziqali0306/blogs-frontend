import { Box, Stack, styled } from "@mui/material";

export const StyledStack = styled(Stack)({
    display: "flex",
    flexDirection:"row",
    justifyContent: "space-between",
    marginBottom: "40px"
})


export const StyledBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  cursor: "pointer"
}))
