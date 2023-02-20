import React from 'react';
import { Button, Box, Typography, List, Divider, AppBar, ListItem, ListItemButton, ListItemText, Toolbar, IconButton, Drawer } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom'

const Navigation = ({children}) => {
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
      setMobileOpen(!mobileOpen);

    };

    const navItems = [
    {name: 'RSVP', path: '/rsvp'},
    // {name: 'Things to Do', path: '/things-to-do'},
    {name: 'Ceremony', path: '/#ceremony'},
    {name:  'Lodging', path: '/#lodging'},
    {name:  'Registry', path: '/#registry'},
    {name: 'FAQ', path: '/#faq'},

  ]
    const drawerWidth = 240;
    const drawer = (

        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
            {/* <Link to='/'> */}
          <Typography variant="h6" sx={{ my: 2 }}>
          <Link to="/">

            N / K
          </Link>

          </Typography>
          {/* </Link> */}
          <Divider />
          <List>
            {navItems.map((item) => {
                return (

              <ListItem key={item.name} disablePadding>
                <ListItemButton sx={{ textAlign: 'center' }}>
                {/* <Link to="#registry"> */}
                <Link to={item.path}>
                  <ListItemText sx={{color: 'black'}} primary={item.name}  />
                  </Link >
                  {/* </Link> */}
                </ListItemButton>
              </ListItem>
               )
            })}

          </List>
        </Box>
      );
 return (
    <Box sx={{ display: 'flex' }}>
    <AppBar elevation={0} component="nav" sx={{backgroundColor: '#FFF9F1', height: '103px', justifyContent: 'center'}}>
      <Toolbar variant="dense" style={{ display: 'flex', justifyContent: 'space-between'}}>
        <Box>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          sx={{ mr: 2, display: { sm: 'none' }, color: 'black' }}
        >
          <MenuIcon />
        </IconButton>
        <Link to="">

        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' }, color: 'black', fontSize: '40px', fontFamily: 'Noto Sans' }}
        >
          N / K 
        </Typography>
        </Link>
        </Box>
        <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
          {navItems.map((item) => (
            <a key={item.name} href={item.path}>
            {/* <a href={item.path}> */}
                 
            <Button key={item.name} sx={{ color: 'black', fontSize: '24px', textTransform: 'none' }}>
              {item.name}
            </Button>
            {/* </a> */}
            </a>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
    <Box component="nav">
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: 'block', sm: 'none' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
        }}
      >
        {drawer}
      </Drawer>
    </Box>
    </Box>
 )
};

export default Navigation;