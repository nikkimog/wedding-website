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
    {name: 'Things to Do', path: '/things-to-do'},
    {name:  'Accomodations', path: '/accomodations'},
    {name: 'Ceremony', path: '/ceremony'},
    {name:  'Registry', path: '/registry'},
    {name: 'FAQ', path: '/faq'},

  ]
    const drawerWidth = 240;
    const drawer = (

        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
            {/* <Link to='/'> */}\
            <Link to="/">
          <Typography variant="h6" sx={{ my: 2 }}>
            NIKKI and KAI
          </Typography>
          </Link>
          {/* </Link> */}
          <Divider />
          <List>
            {navItems.map((item) => {
                return (

              <ListItem key={item.name} disablePadding>
                <ListItemButton sx={{ textAlign: 'center' }}>
                <Link to={item.path}>
                  <ListItemText primary={item.name} />
                  </Link>
                </ListItemButton>
              </ListItem>
               )
            })}

          </List>
        </Box>
      );
 return (
    <Box sx={{ display: 'flex' }}>
    <AppBar component="nav" sx={{backgroundColor: '#283618'}}>
      <Toolbar variant="dense" style={{ display: 'flex', justifyContent: 'space-between'}}>
        <Box>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          sx={{ mr: 2, display: { sm: 'none' } }}
        >
          <MenuIcon />
        </IconButton>
        <Link to="/">

        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
        >
          NIKKI AND KAI
        </Typography>
        </Link>
        </Box>
        <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
          {navItems.map((item) => (
            <Link to={item.path}>
            <Button key={item.name} sx={{ color: '#fff' }}>
              {item.name}
            </Button>
            </Link>
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