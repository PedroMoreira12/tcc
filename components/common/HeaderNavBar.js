import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { routes } from '../../utils/constants/routes-constants'
import { useRouter } from 'next/router';
import Link from "next/link";
import UserMenu from "./UserMenu";

function ResponsiveAppBar() {
    const router = useRouter();
    const isActive = (path) => {
        return path === router.asPath
    }
    return (
        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                            ml: '-8%',
                            mr: 1,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        ContraGolpes
                    </Typography>

                    <Box sx={{ flexGrow: 1, display: { md: 'flex' }, ml: '11%' }}>
                        {routes.map((route, index) => (
                            <Link href={route.path} style={{textDecoration: 'none'}} key={index}>
                                <Button
                                    key={route.text}
                                    sx={{
                                        my: 2,
                                        mr: 3,
                                        color: 'white',
                                        display: 'block',
                                        backgroundColor: isActive(route.path) ? "#87CEFA" : ""
                                }}
                                >
                                    {route.text}
                                </Button>
                            </Link>
                        ))}
                    </Box>

                    <UserMenu />
                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default ResponsiveAppBar;