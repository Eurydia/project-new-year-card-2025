import {
  createTheme,
  responsiveFontSizes,
} from "@mui/material";

const _theme = createTheme({
  typography: { fontSize: 18 },
  palette: {
    primary: {
      dark: "#3f2f9d",
      main: "#6a5acd",
      light: "#9c92dd",
    },
  },
});

export const theme = responsiveFontSizes(_theme);
