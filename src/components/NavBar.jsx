import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import LogoutIcon from "@mui/icons-material/Logout";
import {
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  MenuItem,
  Menu,
} from "@mui/material";
import { Box } from "@mui/system";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { useRecoilState } from "recoil";
import { authenticated } from "../store";
import { AccountCircle } from "@mui/icons-material";
import axios from "axios";
import { Navigate, Outlet, useNavigate } from "react-router-dom";
import * as Color from "@mui/material/colors";

function NavBar(props) {
  const [drawer, setDrawer] = useState(false);
  const [anchorEl, setAnchorEl] = useState(false);
  const drawerWidth = 250;
  const [auth, setAuth] = useRecoilState(authenticated);
  const navigate = useNavigate();
  const logout = async () => {
    await axios.delete("logout");
    setAuth({ check: false, user: [] });
    localStorage.removeItem("tokenUser");
    Navigate("login");
  };

  return (
    <Box>
      <AppBar position="fixed" color='primary'>
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            onClick={() => setDrawer(!drawer)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" sx={{ flexGrow: 1 }}></Typography>
          {auth.check && (
            <div>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={() => setAnchorEl(true)}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={anchorEl}
                onClose={() => setAnchorEl(false)}
              >
                <MenuItem sx={{}} onClick={logout}>
                  Logout <LogoutIcon fontSize="small" sx={{ ml: 1 }} />
                </MenuItem>
              </Menu>
            </div>
          )}
        </Toolbar>
      </AppBar>
      <Toolbar />
      <Drawer
        anchor="left"
        open={drawer}
        variant="temporary"
        onBackdropClick={() => setDrawer(false)}
      >
        <Box
          sx={{
            width: drawerWidth,
          }}
        >
          <Toolbar
            sx={{
              display: "flex",
              justifyContent: "flex-end",
            }}
          >
            <IconButton onClick={() => setDrawer(false)}>
              <ChevronLeftIcon />
            </IconButton>
            <Typography variant="h6"></Typography>
          </Toolbar>
          <Divider />
          <List>
            <ListItem button>
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <ListItemText primary="Inbox" />
            </ListItem>
          </List>
        </Box>
      </Drawer>
      <Box component="main">
        <Outlet />
      </Box>
    </Box>
  );
}

export default NavBar;
