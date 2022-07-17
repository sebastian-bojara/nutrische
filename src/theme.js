import { createTheme } from "@mui/material";

// https://www.behance.net/gallery/126080091/Bravecash-Branding-Web?tracking_source=search_projects%7Corange
export const colors = {
    primary: '#ff5125',
    black: '#010001',
    white: '#fff',
    blue: '#0149ff',
    yellow: '#ffc901',
    green: '#019e00',
};

export const theme = createTheme({
    palette: {
      primary: {
        main: colors.primary,
      },
      secondary: {
        main: colors.yellow,
      },
    },
  });
  