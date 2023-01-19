import { NavBarMenuListItem } from './NavBarMenuListItem';
import { Box, List } from '@mui/material';

export const NavBarMenuList = ({ listItems = [], textColor = 'primary' }) => {

    return (
        <Box sx={{
            display:
            {
                md: 'flex',
            }
        }}>
            <List
                sx={{
                    width: '100%',
                    p: '0px',
                    display: { md: 'flex' },
                    flex: 'row',
                    justifyContent: 'end',
                }}
            >
                {
                    listItems.map(item => <NavBarMenuListItem
                        type={item.icon}
                        text={item.text}
                        textColor={textColor}
                        key={item.text}
                        badgeContent={item.badgeContent}
                        navLink={item.navLink}
                    />)
                }
            </List>
        </Box>
    )
}
