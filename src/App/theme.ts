import { createTheme } from "@mui/material";
import { brown, yellow } from "@mui/material/colors";

const _theme = createTheme({
  typography: {
    fontSize: 16,
    fontFamily: "noto serif thai",
  },
  palette: {
    primary: {
      dark: "#3f2f9d",
      main: "#6a5acd",
      light: "#9c92dd",
    },
    secondary: {
      dark: brown[700],
      main: brown[400],
      light: yellow[50],
    },
  },
});

export const theme = _theme;
