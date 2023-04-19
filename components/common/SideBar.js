import Typography from "@mui/material/Typography";
import { useRouter } from 'next/router';
import Box from '@mui/material/Box';

export default function SideBar() {
    const location = useRouter();
    const { pathname } = location;

    const content = {
        '/': 'Home',
        '/whatsapp': 'WhatsApp',
        '/instagram': 'Instagram',
        '/email': 'Email'
    }
    return (
        <Box
            display="flex"
            alignItems="flex-start"
            justifyContent="center"
            height="100vh"
        >
            <Typography variant="h4" sx={{ marginTop: 3 }}>
                Exemplo
            </Typography>
        </Box>
    )
}