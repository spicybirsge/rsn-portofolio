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
import Link from '@mui/material/Link';

import {Link as RouterLink} from "react-router-dom"




const Navbar = () => {
  
    const HomeP = React.forwardRef((props, ref) => (
        <RouterLink ref={ref} to="/" {...props} />
      ));

      const AboutP = React.forwardRef((props, ref) => (
        <RouterLink ref={ref} to="/about" {...props} />
      ));


  return (
    <AppBar >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
        <img style={{display: 'inline-block', borderRadius: "50%", marginRight: "5px"}} width="30" height="30" src={process.env.PUBLIC_URL+"/logo.png"} />
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
           RSN-GAMING
          </Typography>

       
          
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
           
          <Link component={HomeP} color="inherit" variant="body2" underline="none" style={{"fontSize": "18px", "marginRight": "15px"}}>
          Home
          </Link>
          <Link component={AboutP} color="inherit" variant="body2" underline="none" style={{"fontSize": "18px", "marginRight": "15px"}}>
          About
          </Link>
          <Link target="__blank" href="https://www.youtube.com/channel/UCo-Z-aFPvCJ-YCOAmUPBVTw" color="inherit" variant="body2" underline="none" style={{"fontSize": "18px", "marginRight": "15px"}}>
         YouTube
          </Link>
             
          </Box>

         
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Navbar;