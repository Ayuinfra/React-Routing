import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';


const Navbar = (props) => {
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography varient="h6" sx={{ flexGrow: 1}}>
                    Routing Example
                </Typography>
                <Button color="inherit" href="/">Home</Button>
                <Button color="inherit" href="/about">About</Button>
                <Button color="inherit" href="/contact">Contact</Button>
            </Toolbar>
        </AppBar>
    )
}
export default Navbar;