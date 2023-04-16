import styles from "../../styles/index.module.css";
import Link from 'next/link'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';

export default function HeaderNavBar() {
    const routes =
        [{
            path: '/',
            text: 'HOME'
        },
        {
            path: '/whatsapp',
            text: 'WhatsApp'
        }]
    const links = routes.map(route => (
        <Link href={route.path} key={route.path}>
            <Button variant="warning">
                {route.text}
            </Button>
        </Link>
    ))
    return (
        <>
            <div className={styles.headerNavBar}>
                <div className={styles.textNavBar}>
                    {links}
                </div>
            </div>
        </>
    )
}