import styles from "../../styles/index.module.css";

export default function BodyContent({ children }) {
    return (
        <>
            <div className={styles.backGroundStyle}>
                <div className={styles.highlightedContent}>
                    {children}
                </div>
            </div>
        </>
    )
}