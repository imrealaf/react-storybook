import { Box, Divider, Drawer, Toolbar } from "@mui/material";

import { vars } from "theme";

function ResponsiveDrawer({ children, mobileOpen, mobileOnClose, ...props }) {
  const container = document.body;
  const paperStyles = {
    boxSizing: "border-box",
    width: vars.drawerWidth,
  };

  const DrawerContent = () => (
    <Box>
      <Toolbar />
      <Divider />
      {children}
    </Box>
  );

  return (
    <Box
      component="nav"
      sx={{ width: { sm: vars.drawerWidth }, flexShrink: { sm: 0 } }}
      role="navigation"
    >
      <Drawer
        {...props}
        container={container}
        variant="temporary"
        open={mobileOpen}
        onClose={mobileOnClose}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: "block", sm: "none" },
          "& .MuiDrawer-paper": paperStyles,
        }}
      >
        <DrawerContent />
      </Drawer>
      <Drawer
        {...props}
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
