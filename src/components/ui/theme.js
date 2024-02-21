import { createTheme } from "@mui/material/styles";

export  const theme = createTheme({
  palette: {
    background: {
      default: "#e4f0e2",
    },
    primary: {
      main: "#2a9461",
    },
    secondary: {
      main: "#19857b",
    },
    components: {
      muiappbar: {
        root: {
          colorprimary: {
            backgroundcolor: "red",
          },
        },
      },
    },
  },
});
