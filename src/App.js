import { ThemeProvider } from "@mui/material";

import CurrentWeek from "./CurrentWeek/CurrentWeek"
import { theme } from "./theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
        <CurrentWeek />
    </ThemeProvider>
  );
}

export default App;
