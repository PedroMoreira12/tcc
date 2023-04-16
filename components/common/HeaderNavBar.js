import styles from "../../styles/index.module.css";
import Link from 'next/link'

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
            <button>
                {route.text}
            </button>
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