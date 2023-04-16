import Link from "next/link";
import styles from "../styles/404.module.css";

// noinspection JSUnusedGlobalSymbols
export default function Custom404() {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>404 - Página Não Encontrada</h1>
            <p className={styles.description}>
                A página que você está procurando não existe.
            </p>
            <Link href="/">
                <button className={styles.button}>
                    Voltar para página inicial
                </button>
            </Link>
        </div>
    );
}