import Link from "next/link";
import Button from "react-bootstrap/Button";

const routes = [
    {
        path: '/',
        text: 'Home'
    },
    {
        path: '/whatsapp',
        text: 'WhatsApp'
    }
]

export const links = routes.map(route => (
    <Link href={route.path} key={route.path}>
        <Button variant="info" style={{ fontSize: '36px', padding: '10px 20px', margin: '10px'}}>
            {route.text}
        </Button>
    </Link>
))