import { useContext } from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

import MailIcon from "@mui/icons-material/Mail";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import MenuIcon from "@mui/icons-material/Menu";

import { ColorModeContext } from "theme";
import { AppBar, ResponsiveDrawer } from "components";
import { useToggle } from "hooks";
import { vars } from "theme";

function App() {
  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);
  const drawer = useToggle();

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ display: { sm: "none" }, mr: 2 }}
            onClick={drawer.toggle}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Material UI Theme
          </Typography>
          <Box style={{ textTransform: "capitalize" }} sx={{ mr: 1 }}>
            <Box
              component="span"
              sx={{
                display: { xs: "none", sm: "inline-block" },
                typography: "body2",
              }}
            >
              <strong>{theme.palette.mode}</strong> Mode
            </Box>
          </Box>
          <IconButton color="inherit" onClick={colorMode.toggleColorMode}>
            {theme.palette.mode === "dark" ? (
              <Brightness7Icon />
            ) : (
              <Brightness4Icon />
            )}
          </IconButton>
        </AppBar>
        <ResponsiveDrawer mobileOpen={drawer.open} mobileOnClose={drawer.hide}>
          <List>
            {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
              <ListItem button key={text}>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
          <Divider />
          <List>
            {["All mail", "Trash", "Spam"].map((text, index) => (
              <ListItem button key={text}>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
        </ResponsiveDrawer>
        <Box
          component="main"
          p={3}
          sx={{
            position: "absolute",
            top: { xs: 56, sm: 64 },
            width: { xs: "100%", sm: `calc(100% - ${vars.drawerWidth}px)` },
            ml: { sm: `${vars.drawerWidth}px` },
          }}
        >
          Content
        </Box>
      </Box>
    </>
  );
}

export default App;
