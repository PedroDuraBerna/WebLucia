import { AccountCircle, AppRegistration, Info, Login, Logout, Mail, Notifications, QuestionMark } from '@mui/icons-material';
import { Badge, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { mainTheme } from '../../../../theme/mainTheme';


export const NavBarMenuListItem = ({ navLink = '/home', badgeContent = 0, type = 'AccountCircle', text = 'text' }) => {

    const { palette } = mainTheme;

    const iconSize = 20;
    const separation = 3;

    let icon;

    switch (type) {
        case 'AccountCircle':
            icon = <AccountCircle sx={{ color: { xs: palette.primary.main, md: palette.secondary.main }, fontSize: iconSize }} />;
            break;
        case 'Notifications':
            icon = <Notifications sx={{ color: { xs: palette.primary.main, md: palette.secondary.main }, fontSize: iconSize }} />;
            break;
        case 'Mail':
            icon = <Mail sx={{ color: { xs: palette.primary.main, md: palette.secondary.main }, fontSize: iconSize }} />;
            break;
        case 'Login':
            icon = <Login sx={{ color: { xs: palette.primary.main, md: palette.secondary.main }, fontSize: iconSize }} />;
            break;
        case 'Logout':
            icon = <Logout sx={{ color: { xs: palette.primary.main, md: palette.secondary.main }, fontSize: iconSize }} />;
            break;
        case 'Info':
            icon = <Info sx={{ color: { xs: palette.primary.main, md: palette.secondary.main }, fontSize: iconSize }} />;
            break;
        case 'AppRegistration':
            icon = <AppRegistration sx={{ color: { xs: palette.primary.main, md: palette.secondary.main }, fontSize: iconSize }} />;
            break;
        default:
            icon = <QuestionMark sx={{ color: { xs: palette.primary.main, md: palette.secondary.main }, fontSize: iconSize }} />;
            break;
    };

    let navLinkStyle = {};

    if (document.body.offsetWidth > 900) {
        navLinkStyle = {
            textDecoration: 'none',
            width: `${iconSize * 2}px`,
        };
    } else {
        navLinkStyle = {
            textDecoration: 'none',
            width: '100%',
        };
    }

    return (
        // Para cambiar el tamaño de los iconos: ListItem -> sx -> width
        <ListItem sx={{ p: '0px', justifyContent: { md: 'end' }, width: { xs: '100%', md: `${iconSize * separation}px` } }}>
            <NavLink to={navLink} style={navLinkStyle} >
                <ListItemButton sx={{
                    height: { xs: '70px', md: '100%' },
                    width: { xs: '100%', md: `${iconSize * separation}px` },
                    padding: { md: `${iconSize}px` },
                    justifyContent: { md: 'center' },
                }}>
                    <ListItemIcon sx={{
                        alignItems: 'center',
                        minWidth: '0px',
                    }} >
                        <Badge badgeContent={badgeContent} color='error' >
                            {icon}
                        </Badge>
                        <ListItemText primary={text} sx={{ ml: { xs: '20px', md: '0px' }, display: { md: 'none' } }}></ListItemText>
                    </ListItemIcon>
                </ListItemButton>
            </NavLink>
        </ListItem>
    )
}
