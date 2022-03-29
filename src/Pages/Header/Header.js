import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { NavLink } from 'react-router-dom';

import { makeStyles } from '@mui/styles';
import { useTheme } from '@mui/material';
import Drawer from '@mui/material/Drawer';

import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
// import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import useAuth from '../hooks/useAuth';
// import InboxIcon from '@mui/icons-material/MoveToInbox';
// import MailIcon from '@mui/icons-material/Mail';


const Navbar = () => {
    const theme = useTheme()
    const { user, logout } = useAuth();
    const useStyle = makeStyles({
        navIcon: {
            [theme.breakpoints.up('sm')]: {
                display: 'none !important'
            }
        },
        navItem: {
            [theme.breakpoints.down('sm')]: {
                display: 'none !important'
            }
        }
    })
    const { navIcon, navItem } = useStyle();

    const [state, setState] = React.useState(false);

    // const toggleDrawer = (anchor, open) => (event) => {
    //     if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
    //         return;
    //     }

    //     setState({ ...state, [anchor]: open });
    // };
    const list = (
        <Box
            sx={{ width: 250 }}
            role="presentation"
        // onClick={toggleDrawer(anchor, false)}
        // onKeyDown={toggleDrawer(anchor, false)}
        >

            <List>

                <ListItem button >

                    <ListItemText>
                        <NavLink style={{ textDecoration: 'none' }} to="/home"><Button sx={{ color: "black" }} variant="text">Home</Button></NavLink>
                    </ListItemText>
                </ListItem>
                <ListItem button >

                    <ListItemText>
                        <NavLink style={{ textDecoration: 'none' }} to="/cars"><Button sx={{ color: "black" }} variant="text">More Products</Button></NavLink>
                    </ListItemText>
                </ListItem>

                <ListItem button >

                    <ListItemText>
                        {
                            user?.email ?
                                <Box>

                                    <Button onClick={logout} color="inherit">Logout</Button>
                                </Box>
                                :
                                <NavLink style={{ textDecoration: 'none', color: 'black' }} to="/login"><Button color="inherit">Login</Button></NavLink>
                        }
                    </ListItemText>
                </ListItem>


            </List>
            <Divider />

        </Box>
    );
    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                            className={navIcon}
                            onClick={() => setState(true)}
                        >
                            <MenuIcon />


                        </IconButton>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            <h4>Ed-Tech</h4>

                        </Typography>
                        <Box className={navItem} sx={{ display: 'flex' }}>
                            <NavLink style={{ textDecoration: 'none' }} to="/home"><Button sx={{ color: "white" }} variant="text">Home</Button></NavLink>
                            <NavLink style={{ textDecoration: 'none' }} to="/cars"><Button sx={{ color: "white" }} variant="text"></Button></NavLink>



                            {
                                user?.email ?
                                    <Box>
                                        <Typography style={{ textDecoration: 'none', color: 'white' }}><Button color="inherit">{user.displayName}</Button></Typography>

                                        <Button onClick={logout} color="inherit">Logout</Button>
                                    </Box>
                                    :
                                    <NavLink style={{ textDecoration: 'none', color: 'white' }} to="/login"><Button color="inherit">Login</Button></NavLink>
                            }
                        </Box>
                    </Toolbar>
                </AppBar>
            </Box>
            <div>

                <React.Fragment>
                    {/* <Button onClick={() => setState(true)}>click</Button> */}
                    <Drawer

                        open={state}
                        onClose={() => setState(false)}
                    >
                        {list}
                    </Drawer>
                </React.Fragment>

            </div>
        </>
    );
};

export default Navbar;