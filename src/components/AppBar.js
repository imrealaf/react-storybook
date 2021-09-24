import { AppBar, Toolbar } from "@mui/material";

function MyAppBar({ children, ...props }) {
  return (
    <AppBar {...props}>
      <Toolbar>{children}</Toolbar>
    </AppBar>
  );
}

export default MyAppBar;
