import { AppBar, Toolbar } from "@mui/material";

function CustomAppBar({ children, ...props }) {
  return (
    <AppBar
      position="fixed"
      sx={{
        zIndex: "modal",
      }}
      {...props}
    >
      <Toolbar>{children}</Toolbar>
    </AppBar>
  );
}

export default CustomAppBar;
