import { NavBarMenuListItem } from './NavBarMenuListItem';
import { useCheckAuthList } from '../hooks';
import { listItems } from '../helpers';
import { Box, List } from '@mui/material';

export const NavBarMenuList = ({ auth = 'not-authenticated' }) => {

    // Con este hook enviamos items y la autorización, devolviéndonos si esos items podemos verlos
    const listItemsFiltered = useCheckAuthList(auth, listItems);

    return (
        <Box sx={{ display: { md: 'flex' } }}>
            <List
                sx={{ width: '100%', p: '0px', display: { md: 'flex' }, flex: 'row', justifyContent: 'end' }}
            >
                {
                    listItemsFiltered.map(item => <NavBarMenuListItem
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
