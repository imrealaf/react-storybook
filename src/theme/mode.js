import { createContext } from "react";
import red from "@mui/material/colors/red";

export const ColorModeContext = createContext({ toggleColorMode: () => {} });

export const defaultColorMode = "dark";

export const darkMode = {
  primary: {
    main: red[500],
  },
};

export const lightMode = {
  primary: {
    main: red[500],
  },
};
