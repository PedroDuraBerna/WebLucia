import { AppBar, Box, Drawer, IconButton, Toolbar, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';
import { NavBarMenuList } from './components';
import { AppBreadcrumbs } from './components';
import styled from '@emotion/styled';

export const NavBar = () => {

    // Obtenemos auth del store
    const auth = 'authenticated-editor-admin'; // Seteo esto para codificar

    const [mobileOpen, setMobileOpen] = useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const StyledToolbar = styled(Toolbar)(({ theme }) => ({
        // Override media queries injected by theme.mixins.toolbar
        '@media all': {
            minHeight: 0,
        },
    }));

    return (
        <>

            {/* NAVEGADOR HORIZONTAL */}

            <Box sx={{ flexGrow: 1 }}>
                <AppBar position='static'>
                    <StyledToolbar sx={{ justifyContent: 'space-between' }} >
                        <Typography
                            variant='h5'
                            noWrap
                            component='div'
                            sx={{ display: 'block' }}
                        >
                            Digital Space
                        </Typography>
                        <IconButton
                            size='large'
                            edge='start'
                            color='inherit'
                            sx={{ display: { xs: 'flex', md: 'none' } }}
                            onClick={handleDrawerToggle}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Box sx={{ flexGrow: 1, display: { md: 'block', xs: 'none' } }}>
                            <NavBarMenuList auth={auth} />
                        </Box>
                    </StyledToolbar>
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
                anchor='right'
            >
                <Box>
                    <NavBarMenuList auth={auth} />
                </Box>
            </Drawer>
        </>
    )
}
