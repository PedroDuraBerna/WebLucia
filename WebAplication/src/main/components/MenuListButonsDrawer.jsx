import { Box, List } from '@mui/material';
import { listItems } from './helpers';
import { useCheckAuth } from './hooks';
import { MenuListItem } from './MenuListItem';

export const MenuDrawer = () => {

    const auth = 'authenticated'; // Lo obtenemos del store

    // Con este hook enviamos items y la autorización, devolviéndonos si esos items podemos verlos
    const listItemsFiltered = useCheckAuth(auth, listItems);

    return (
        <Box>
            <List
                sx={{ width: '100%', pt: '0px' }}
            >
                {
                    listItemsFiltered.map(item => <MenuListItem
                        type={item.icon}
                        text={item.text}
                        key={`${item.text}`}
                        badgeContent={item.badgeContent}
                        navLink={item.navLink}
                    />)
                }
            </List>
        </Box>
    )
}
