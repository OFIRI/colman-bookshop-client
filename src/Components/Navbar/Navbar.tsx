import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { Link } from 'react-router-dom';
import { SessionContextStore } from '../../contexts/SessionContext/SessionContext';
import { ShoppingCart } from '@mui/icons-material';
import { ShoppingContextStore } from '../../contexts/ShoppingContext/ShoppingContext';

const pages = [{name: 'Books', route: '/'}, {name: 'About Us', route: '/about-us'}, {name: 'Register', route: '/register'}, {name: 'Login', route: '/login'}, {name: 'Manage', route: '/admin/users'}];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);
  const {user, isAdmin, logout} = React.useContext(SessionContextStore);
  const { shoppingCart } = React.useContext(ShoppingContextStore);


  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = (setting: string) => {
    switch(setting) {
      case "Logout":
        logout()
    }
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static">
      <div>
        <Toolbar variant="dense">
          <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            TOAR books
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.filter(page => {
                if (!user && (page.name === "Register" || page.name === "Login"))
                  return false;
                if (!isAdmin && (page.name === "Manage"))
                  return false;
                return true;
              }).map((page) => (
                <Link to={page.route} style={{ textDecoration: 'none' }}>
                  <MenuItem key={page.name} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{page.name}</Typography>
                  </MenuItem>
                </Link>
              ))}
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            LOGO
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.filter(page => {
                if (user && (page.name === "Register" || page.name === "Login"))
                  return false;
                if (!isAdmin && (page.name === "Manage"))
                  return false;
                return true;
              }).map((page) => (
              <Link to={page.route} style={{ textDecoration: 'none' }}>
                <Button
                  key={page.name}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: 'white', display: 'block' }}
                  >
                  {page.name}
                </Button>
              </Link>
            ))}
          </Box>

          {user &&<>
            <Link to="/cart" style={{ textDecoration: 'none' }}>
              <IconButton>
                <ShoppingCart style={{color: 'white'}}/>
              </IconButton>
            </Link>
          {shoppingCart && <Typography style={{marginRight: 10}}>{Object.keys(shoppingCart).reduce((prevKey, currKey) => {
            return prevKey + shoppingCart[currKey].quantity }
            , 0)} items in Cart</Typography> }
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt={`${user?.first_name} ${user?.last_name}`} src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={() => handleCloseUserMenu(setting)}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
              <Typography variant='h6' style={{marginLeft: 10}}>{`${user?.first_name} ${user?.last_name}`}</Typography>
          </>}
        </Toolbar>
      </div>
    </AppBar>
  );
};
export default Navbar;