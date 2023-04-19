import Typography from "@mui/material/Typography";
import { useRouter } from 'next/router';
import Box from '@mui/material/Box';
import { titles } from '../../utils/posts/postTitles'
import Button from '@mui/material/Button';

export default function SideBar({ changeState }) {
    const location = useRouter();
    const { pathname } = location;

    return (
        <Box
            display="flex"
            alignItems="flex-start"
            justifyContent="start"
            height="100vh"
        >
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'start'}}>
                {titles[pathname]?.map((title, index) => (
                    <Button key={title} style={{ backgroundColor: 'transparent', color: 'black'}} onClick={() => changeState(index)}>
                        <Typography variant="h6" sx={{ marginTop: 3, textTransform: 'none', fontFamily: 'Noto Sans' }}>
                            {title}
                        </Typography>
                    </Button>
                ))}
            </Box>
        </Box>
    )
}