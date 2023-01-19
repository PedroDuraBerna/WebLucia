import Breadcrumbs from '@mui/material/Breadcrumbs';
import HomeIcon from '@mui/icons-material/Home';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { IconButton, Typography } from '@mui/material';
import { Box } from '@mui/system';

export const AppBreadcrumbs = ({ marginTop = '20px' }) => {

    // Obtenemos el PATH
    const { pathname } = useLocation();
    const pathnames = pathname.split('/').filter(path => path !== '').filter(path => path !== 'home');

    return (
        <Box>

            {/* HOME BREADCRUMB */}

            <Breadcrumbs
                aria-label="breadcrumb"
            >
                <NavLink
                    to='/home'
                >
                    <Box
                        display='flex'
                        alignItems='center'
                    >
                        <IconButton>
                            <HomeIcon />
                        </IconButton>
                        <Typography
                            color='primary'
                        >
                            Home
                        </Typography>
                    </Box>
                </NavLink>

                {/* SUB-BRADCRUMBS */}

                {
                    pathnames.map((pathname, index) => (
                        (index === 1)
                            ? <Link
                                key={pathname}
                                to={`../${pathname}`}
                            >
                                <Typography
                                    color='primary'
                                >
                                    {pathname}
                                </Typography>
                            </Link>
                            : <Link
                                key={pathname}
                                to={`../../${pathname}`}
                            >
                                <Typography
                                    color='primary'
                                >
                                    {pathname}
                                </Typography>
                            </Link>
                    ))
                }

            </Breadcrumbs>
        </Box>
    );
};