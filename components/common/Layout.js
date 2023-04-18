import ResponsiveAppBar from "./HeaderNavBar";
import Box from '@mui/material/Box';

export default function Layout({ children }) {
    return (
        <>
            <ResponsiveAppBar />
            <Box display="flex">
                <Box width="30%" display="inline-block" />
                <Box flexGrow={1}>{children}</Box>
            </Box>
        </>
    )
}