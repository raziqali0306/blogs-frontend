import { createTheme } from "@mui/material";

const font =  "'Plus Jakarta Sans', sans-serif";

export const theme = createTheme({
    typography: {
        fontFamily: font,
    },
    palette: {
        primary: {
            extraLight: "#EFF0F3",
            light: "#E4E5E9",
            main: "#C0C0C0",
            dark: "#9A9494"
        },
        secondary: {
            main: "#6246EA"
        },
        text: {
            main:"#2B2C34"
        },
        common: {
            main: "#fff"
        }
    }
})