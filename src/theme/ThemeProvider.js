import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

import { ColorModeContext } from "./mode";
import { useThemeWithModes } from "hooks";

function CustomThemeProvider({ children }) {
  const { theme, colorMode } = useThemeWithModes();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default CustomThemeProvider;
