import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import InfoIcon from '@mui/icons-material/Info';

const NavBar = () => {
  return (
    <AppBar position="static" color="primary">
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1, fontWeight: 'bold',colour:'Blue',textShadow:'2px 2px 4px rgba(0,0,0,0.5)',letterSpacing: '1px' }}>
        
        </Typography>
        <Button
          color="inherit"
          startIcon={<InfoIcon />}
          style={{
            fontWeight: 'bold',
            backgroundColor: 'blue',//rgba(255, 255, 255, 0.3)
            borderRadius: '8px',
            marginRight: '10px'
          }}
        >
          About Us
        </Button>
        <Button
          color="inherit"
          startIcon={<AccountCircleIcon />}
          style={{
            fontWeight: 'bold',
            backgroundColor: 'blue',
            borderRadius: '8px'
          }}
        >
          Logout
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
