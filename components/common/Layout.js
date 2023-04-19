import ResponsiveAppBar from "./HeaderNavBar";
import SideBar from "./SideBar";
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';

export default function Layout({ children }) {
    return (
        <>
            <ResponsiveAppBar />
            <Box display="flex">
                <Box width="25%" display="inline-block">
                    <SideBar />
                </Box>
                <Divider orientation="vertical" flexItem sx={{ marginLeft: '-0.5%' }}></Divider>
                <Box flexGrow={1}>{children}</Box>
            </Box>
        </>
    )
}