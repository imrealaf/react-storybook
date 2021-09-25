import { useContext } from "react";
import { useTheme } from "@mui/material/styles";
import { Box, Switch, FormControlLabel } from "@mui/material";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

import MailIcon from "@mui/icons-material/Mail";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MenuIcon from "@mui/icons-material/Menu";

import { ColorModeContext } from "theme";
import { AppBar, ResponsiveDrawer, Dropdown } from "components";
import { usePopover, useToggle } from "hooks";
import { vars } from "theme";

import menu from "data/menu.json";

function App() {
  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);
  const drawer = useToggle();
  const dropdown = usePopover();
  const mode = theme.palette.mode;
  const isDark = mode === "dark";

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
          <Dropdown iconBtn={true} {...dropdown}>
            <Box py={2}>
              <FormControlLabel
                sx={{ pl: 2 }}
                control={
                  <Switch
                    checked={isDark}
                    onChange={colorMode.toggleColorMode}
                    inputProps={{ "aria-label": "controlled" }}
                  />
                }
                label="Dark mode"
              />
            </Box>
          </Dropdown>
        </AppBar>
        <ResponsiveDrawer open={drawer.open} onClose={drawer.hide}>
          <List>
            {menu.map((item, index) => (
              <ListItem button key={item.id}>
                <ListItemIcon sx={{ color: "primary.main" }}>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={item.title} />
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
