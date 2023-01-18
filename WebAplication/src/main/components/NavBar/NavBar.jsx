import { AppBar, Box, Drawer, IconButton, Toolbar, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';
import { NavBarMenuList } from './components';
import { AppBreadcrumbs } from './components';

export const NavBar = () => {

    // Obtenemos auth del store
    const auth = 'authenticated-writter-admin'; // Seteo esto para codificar

    const [mobileOpen, setMobileOpen] = useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    return (
        <>

            {/* NAVEGADOR HORIZONTAL */}

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
                            sx={{ display: 'block' }}
                        >
                            Digital Space</Typography>
                        <Box sx={{ flexGrow: 1, display: { md: 'block', xs: 'none' } }}>
                            <NavBarMenuList auth={auth} />
                        </Box>
                    </Toolbar>
                </AppBar>
            </Box>

            {/* BREADCRUMBS */}
            <Box sx={{ p: '10px' }}>
                <AppBreadcrumbs />
            </Box>

            {/* NAVEGADOR VERTICAL */}

            <Drawer
                variant='temporary'
                open={mobileOpen}
                onClose={handleDrawerToggle}
                sx={{
                    display: { xs: 'block', md: 'none' },
                    '& .MuiDrawer-paper': { width: 300 },
                }}
            >
                <Box>
                    <NavBarMenuList auth={auth} />
                </Box>
            </Drawer>
        </>
    )
}
