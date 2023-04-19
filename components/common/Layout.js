import ResponsiveAppBar from "./HeaderNavBar";
import SideBar from "./SideBar";
import Box from '@mui/material/Box';

export default function Layout({ children, changeState }) {
    return (
        <>
            <ResponsiveAppBar />
            <Box display="flex">
                <Box width="25%" display="inline-block">
                    <SideBar changeState={changeState}/>
                </Box>
                <Box flexGrow={1}>{children}</Box>
            </Box>
        </>
    )
}