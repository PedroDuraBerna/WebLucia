import { AccountCircle, AppRegistration, Category, Home, Info, Login, Logout, Mail, Notifications, QuestionMark } from '@mui/icons-material';
import { Badge, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { mainTheme } from '../../../../theme/mainTheme';

// VARIABLES DEL COMPONENTE

const { palette } = mainTheme;
const extraStyle = { color: { xs: palette.primary.main }, display: { md: 'none' }, fontSize: '30px' };
const initialClassFunction = '';

export const NavBarMenuListItem = ({ navLink = '/home', badgeContent = 0, type = 'AccountCircle', text = 'text' }) => {

    // Pensar hacer custom hook para obtener los iconos

    let icon;

    switch (type) {
        case 'Category':
            icon = <Category sx={extraStyle} />;
            break;
        case 'Home':
            icon = <Home sx={extraStyle} />;
            break;
        case 'AccountCircle':
            icon = <AccountCircle sx={extraStyle} />;
            break;
        case 'Notifications':
            icon = <Notifications sx={extraStyle} />;
            break;
        case 'Mail':
            icon = <Mail sx={extraStyle} />;
            break;
        case 'Login':
            icon = <Login sx={extraStyle} />;
            break;
        case 'Logout':
            icon = <Logout sx={extraStyle} />;
            break;
        case 'Info':
            icon = <Info sx={extraStyle} />;
            break;
        case 'AppRegistration':
            icon = <AppRegistration sx={extraStyle} />;
            break;
        default:
            icon = <QuestionMark sx={extraStyle} />;
            break;
    };

    let classFunction = '';

    if (document.body.offsetWidth > 900) {
        classFunction = ({ isActive }) => (isActive ? 'activeNavLink' : '');
    }

    return (
        // Para cambiar el tamaño de los iconos: ListItem -> sx -> width
        <ListItem sx={{ p: '0px', justifyContent: { md: 'end' }, width: { xs: '100%', md: 'auto' } }}>
            <NavLink
                to={navLink}
                style={{ textDecoration: 'none', width: '100%' }}
                className={classFunction}
            >
                <ListItemButton sx={{
                    height: { xs: '70px', md: '100%' },
                    width: '100%',
                    padding: { md: '10px' },
                    justifyContent: { md: 'center' },
                }}>
                    <ListItemIcon sx={{
                        alignItems: 'center',
                        minWidth: '0px',
                    }} >
                        <Badge
                            badgeContent={badgeContent}
                            color='error'
                            sx={{ display: { md: 'none' } }} >
                            {icon}
                        </Badge>
                        <ListItemText
                            primary={text}
                            sx={{ ml: { xs: '20px', md: '0px' }, color: { xs: palette.primary.main, md: palette.secondary.main } }}>
                        </ListItemText>
                    </ListItemIcon>
                </ListItemButton>
            </NavLink>
        </ListItem >
    )
}
