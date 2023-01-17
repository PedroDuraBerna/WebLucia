import { AppBar, Box, Drawer, IconButton, Toolbar, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';
import { MenuDrawer } from './MenuListButonsDrawer';

export const NavBar = () => {

    const [mobileOpen, setMobileOpen] = useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };


    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position='static'>
                    <Toolbar>
                        <IconButton
                            size='large'
                            edge='start'
                            color='inherit'
                            sx={{ mr: 2, display: { xs: 'block', md: 'none' } }}
                            onClick={handleDrawerToggle}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography
                            variant='h5'
                            noWrap
                            component='div'
                            sx={{ display: { xs: 'none', sm: 'block' } }}
                        >
                            Digital Space</Typography>
                        <Box sx={{ flexGrow: 1 }}>
                            <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                                
                            </Box>
                        </Box>
                    </Toolbar>
                </AppBar>
            </Box>
            <Drawer
                variant='temporary'
                open={mobileOpen}
                onClose={handleDrawerToggle}
                sx={{
                    display: { xs: 'block', md: 'none' },
                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 300 },
                }}
            >
                <MenuDrawer></MenuDrawer>
            </Drawer>
        </>
    )
}
