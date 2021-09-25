import { useContext } from "react";
import { useTheme } from "@mui/material/styles";
import { Box, Switch, FormControlLabel, ListSubheader } from "@mui/material";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";

import MenuIcon from "@mui/icons-material/Menu";
import MoreIcon from "@mui/icons-material/MoreVert";

import { ColorModeContext } from "theme";
import { AppBar, ResponsiveDrawer, Dropdown, Button } from "components";
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
          <Button color="inherit">Some Link</Button>
          <Dropdown
            button={
              <IconButton onClick={dropdown.show}>
                <MoreIcon />
              </IconButton>
            }
            {...dropdown}
          >
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
          <List
            sx={{ mt: 1 }}
            subheader={
              <ListSubheader
                component="div"
                sx={{ backgroundColor: "inherit", color: "primary.main" }}
              >
                COMPONENTS
              </ListSubheader>
            }
          >
            {menu.components.map((item, index) => (
              <ListItem button key={item.id}>
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
