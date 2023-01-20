import { AppBar, Box, Drawer, IconButton, Toolbar, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';
import { NavBarMenuList } from './components';
import { AppBreadcrumbs } from '../components';
import styled from '@emotion/styled';
import { useCheckAuthList } from './hooks';
import { listItems, subMenuListItems } from '../../../data';
import { ArrowCircleRight } from '@mui/icons-material';

export const NavBar = () => {

    // Obtenemos auth del store
    const auth = 'authenticated-editor-admin'; // Seteo esto para codificar

    // Con este hook enviamos List items y la autorización, devolviéndonos si esos items podemos verlos
    const listItemsFiltered = useCheckAuthList(auth, listItems);

    const [mobileOpen, setMobileOpen] = useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const [mobileOpenCategories, setMobileOpenCategories] = useState(false);

    const handleDrawerToggleCategories = () => {
        setMobileOpenCategories(!mobileOpenCategories);
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

            <Box
                sx={{
                    flexGrow: 1,
                }}>
                <AppBar
                    position='static'
                >
                    <StyledToolbar
                        sx={{
                            justifyContent: 'space-between',
                        }} >
                        <Typography
                            variant='h5'
                            noWrap
                            component='div'
                            sx={{
                                display: 'block',
                            }}
                        >
                            Digital Space
                        </Typography>
                        <IconButton
                            size='large'
                            edge='start'
                            color='inherit'
                            sx={{
                                display:
                                {
                                    xs: 'flex',
                                    md: 'none'
                                }
                            }}
                            onClick={handleDrawerToggle}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Box
                            sx={{
                                flexGrow: 1,
                                display:
                                {
                                    md: 'block',
                                    xs: 'none',
                                }
                            }}
                        >
                            <NavBarMenuList
                                listItems={listItemsFiltered}
                                textColor='secondary'
                            />
                        </Box>
                    </StyledToolbar>
                </AppBar>
            </Box>

            {/* SUBNAVEGADOR HORIZONTAL MD */}

            <AppBar
                position='static'
                sx={{
                    marginBottom: '10px',
                    marginTop: '0px',
                    display:
                    {
                        xs: 'none', md: 'block'
                    }
                }}
                color='secondary'
            >
                <Box
                    display='flex'
                    flexDirection='row'
                >
                    <NavBarMenuList
                        listItems={subMenuListItems}
                        textColor='primary'
                    />
                </Box>
            </AppBar>

            {/* SUBNAVEGADOR VERTICAL XS */}

            <Box
                flexDirection='row'
                justifyContent='start'
                sx={{
                    display:
                    {
                        xs: 'flex',
                        md: 'none'
                    }
                }}
            >
                <Box
                    display='flex'
                    justifyContent='center'
                    alignItems='center'>
                    <Typography
                        marginLeft='20px'
                        marginRight='20px'
                        color='primary'
                    >
                        Categorías
                    </Typography>
                    <IconButton
                        size='large'
                        edge='start'
                        color='inherit'
                        onClick={handleDrawerToggleCategories}
                    >
                        <ArrowCircleRight color='primary' />
                    </IconButton>
                </Box>
            </Box>

            <Drawer
                variant='temporary'
                open={mobileOpenCategories}
                onClose={handleDrawerToggleCategories}
                sx={{
                    display:
                    {
                        xs: 'block',
                        md: 'none'
                    },
                    '& .MuiDrawer-paper':
                    {
                        width: 300
                    },
                }}
                anchor='left'
            >
                <NavBarMenuList
                    listItems={subMenuListItems}
                    textColor='primary' />
            </Drawer>

            {/* BREADCRUMBS */}

            <Box>
                <AppBreadcrumbs />
            </Box>

            {/* NAVEGADOR VERTICAL */}

            <Drawer
                variant='temporary'
                open={mobileOpen}
                onClose={handleDrawerToggle}
                sx={{
                    display:
                    {
                        xs: 'block',
                        md: 'none',
                    },
                    '& .MuiDrawer-paper':
                    {
                        width: 300
                    },
                }}
                anchor='right'
            >
                <Box>
                    <NavBarMenuList
                        listItems={listItemsFiltered}
                        auth={auth} />
                </Box>
            </Drawer>
        </>
    )
}
