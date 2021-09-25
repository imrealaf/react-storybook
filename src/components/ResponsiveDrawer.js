import PropTypes from "prop-types";
import { Box, Drawer, SwipeableDrawer, Toolbar, useTheme } from "@mui/material";

import { vars } from "theme";

function ResponsiveDrawer({
  children,
  onOpen = () => {},
  onClose = () => {},
  ...props
}) {
  const theme = useTheme();
  const container = document.body;
  const paperStyles = {
    boxSizing: "border-box",
    width: vars.drawerWidth,
    backgroundColor: theme.palette.grey[900],
    backgroundImage: "none",
  };

  const DrawerContent = () => (
    <Box>
      <Toolbar />
      {children}
    </Box>
  );

  return (
    <Box
      component="nav"
      sx={{ width: { sm: vars.drawerWidth }, flexShrink: { sm: 0 } }}
      role="navigation"
    >
      <SwipeableDrawer
        {...props}
        container={container}
        variant="temporary"
        onClose={onClose}
        onOpen={onOpen}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: "block", sm: "none" },
          "& .MuiDrawer-paper": paperStyles,
        }}
      >
        <DrawerContent />
      </SwipeableDrawer>
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: "none", sm: "block" },
          "& .MuiDrawer-paper": paperStyles,
        }}
        open
      >
        <DrawerContent />
      </Drawer>
    </Box>
  );
}

ResponsiveDrawer.propTypes = {
  onOpen: PropTypes.func,
  onClose: PropTypes.func,
  children: PropTypes.node,
};

export default ResponsiveDrawer;
