import { AccountCircle, AppRegistration, Info, Login, Logout, Mail, Notifications, QuestionMark } from '@mui/icons-material';
import { Badge, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { NavLink } from 'react-router-dom';

export const MenuListItem = ({ navLink = '/home', padding = '0px', height = '70px', badgeContent = 0, color = 'error', type = 'AccountCircle', text = 'text' }) => {

    let icon;

    switch (type) {
        case 'AccountCircle':
            icon = <AccountCircle />;
            break;
        case 'Notifications':
            icon = <Notifications />;
            break;
        case 'Mail':
            icon = <Mail />;
            break;
        case 'Login':
            icon = <Login />;
            break;
        case 'Logout':
            icon = <Logout />;
            break;
        case 'Info':
            icon = <Info />;
            break;
        case 'AppRegistration':
            icon = <AppRegistration />;
            break;
        default:
            icon = <QuestionMark />;
            break;
    };

    return (
        <ListItem sx={{ p: { padding } }}>
            <NavLink to={navLink} style={{ textDecoration: 'none', width: '100%' }} >
                <ListItemButton sx={{ height: { height } }}>
                    <ListItemIcon>
                        <Badge badgeContent={badgeContent} color={color}>
                            {icon}
                        </Badge>
                        <ListItemText primary={text} sx={{ ml: '20px' }}></ListItemText>
                    </ListItemIcon>
                </ListItemButton>
            </NavLink>
        </ListItem>
    )
}
