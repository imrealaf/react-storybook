import { Box, Drawer, SwipeableDrawer, Toolbar } from "@mui/material";

import { vars } from "theme";

function ResponsiveDrawer({
  children,
  onOpen = () => {},
  onClose = () => {},
  ...props
}) {
  const container = document.body;
  const paperStyles = {
    boxSizing: "border-box",
    width: vars.drawerWidth,
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

export default ResponsiveDrawer;
