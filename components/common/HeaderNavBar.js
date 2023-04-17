import styles from "../../styles/index.module.css";
import { links } from "../../utils/constants/routes-constants";

export default function HeaderNavBar() {
    return (
        <>
            <div className={styles.headerNavBar}>
                <div className={styles.logoStart}>
                    LOGO
                </div>
                <div className={styles.textNavBar}>
                    {links}
                </div>
            </div>
        </>
    )
}